import React, { useState } from 'react';
import * as blockchain from '../services/blockchain';
import { Connection } from '@solana/web3.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function AssetCard({ coin, balance, onTransactionSuccess }) {
    if (!coin) return null;

    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);
    const [showSend, setShowSend] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        setSending(true);
        setMessage('');
        setError('');
        try {
            if (coin.symbol === 'ETH' || coin.symbol === 'BTC') {
                const txHash = coin.symbol === 'ETH'
                    ? await blockchain.sendEth(coin.privateKey, recipient, amount)
                    : await blockchain.sendBtc(coin.privateKey, recipient, parseFloat(amount));

                setMessage(`Success! Tx: ${txHash.substring(0, 10)}...`);
                resetFormAndRefresh();
            } else if (coin.symbol === 'SOL') {
                const signature = await blockchain.sendSol(coin.privateKey, recipient, parseFloat(amount));
                setMessage(`Tx sent! Confirming...`);
                await pollForSolanaConfirmation(signature);
            }
        } catch (err) {
            setError(`${err.message}`);
            setSending(false);
        }
    };

    const pollForSolanaConfirmation = async (signature) => {
        const solscanLink = `https://solscan.io/tx/${signature}`;
        const connection = new Connection(blockchain.SOL_RPC_URL);
        let confirmed = false;
        for (let i = 0; i < 30; i++) {
            const status = await connection.getSignatureStatus(signature, { searchTransactionHistory: true });
            if (status && status.value && (status.value.confirmationStatus === 'confirmed' || status.value.confirmationStatus === 'finalized')) {
                setMessage(
                    <span className="flex items-center gap-1">
                        ✓ <a href={solscanLink} target="_blank" rel="noopener noreferrer" className="underline">View</a>
                    </span>
                );
                confirmed = true;
                resetFormAndRefresh();
                break;
            }
            await sleep(2000);
        }
        if (!confirmed) {
            setError(<span>Timeout. <a href={solscanLink} target="_blank" rel="noopener noreferrer" className="underline">Check</a></span>);
            setSending(false);
        }
    };

    const resetFormAndRefresh = () => {
        setRecipient('');
        setAmount('');
        setSending(false);
        setShowSend(false);
        if (onTransactionSuccess) onTransactionSuccess();
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="floating-panel asset-card h-full">
            {/* Header Row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="asset-icon">
                        {coin.icon || coin.symbol[0]}
                    </div>
                    <div>
                        <h3 className="asset-title">{coin.name}</h3>
                        <p className="asset-symbol">{coin.symbol}</p>
                    </div>
                </div>
                <div className="text-right">
                    {balance === null ? (
                        <div className="dots-loader">
                            <span></span><span></span><span></span>
                        </div>
                    ) : (
                        <div className="asset-balance">{parseFloat(balance).toFixed(4)}</div>
                    )}
                </div>
            </div>

            {/* Address */}
            <div className="address-display mt-2">
                <span className="address-text text-xs">{coin.address}</span>
                <button
                    onClick={() => copyToClipboard(coin.address)}
                    className="address-copy p-1"
                >
                    {copied ? (
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Toggle Send Form */}
            {!showSend ? (
                <button
                    onClick={() => setShowSend(true)}
                    className="btn btn-secondary btn-sm w-full mt-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send {coin.symbol}
                </button>
            ) : (
                <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <form onSubmit={handleSend}>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                placeholder="Recipient"
                                value={recipient}
                                onChange={(e) => setRecipient(e.target.value)}
                                required
                                className="input input-mono text-xs flex-1"
                                style={{ padding: '0.5rem' }}
                            />
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                                className="input text-sm"
                                style={{ padding: '0.5rem', width: '100px' }}
                            />
                            <button
                                type="submit"
                                disabled={sending || !recipient || !amount}
                                className="btn btn-primary btn-sm flex-1"
                            >
                                {sending ? (
                                    <div className="spinner spinner-sm"></div>
                                ) : (
                                    'Send'
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowSend(false)}
                                className="btn btn-ghost btn-sm"
                            >
                                ✕
                            </button>
                        </div>
                    </form>

                    {message && (
                        <div className="alert alert-success mt-2 text-xs p-2">
                            {message}
                        </div>
                    )}
                    {error && (
                        <div className="alert alert-error mt-2 text-xs p-2">
                            {error}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default AssetCard;