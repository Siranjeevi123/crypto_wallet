import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import { generateMnemonic } from '../services/wallet';

function Login() {
    const [mnemonic, setMnemonic] = useState('');
    const [newMnemonic, setNewMnemonic] = useState('');
    const [error, setError] = useState('');
    const { login } = useWallet();

    const handleImport = async (e) => {
        e.preventDefault();
        if (!mnemonic.trim() || mnemonic.trim().split(' ').length !== 12) {
            setError('Please enter a valid 12-word mnemonic phrase.');
            return;
        }
        try {
            setError('');
            await login(mnemonic.trim());
        } catch (err) {
            setError('Invalid mnemonic phrase. Please check and try again.');
        }
    };

    const handleCreate = () => setNewMnemonic(generateMnemonic());
    const proceedWithNewMnemonic = async () => await login(newMnemonic);

    if (newMnemonic) {
        return (
            <div className="flex items-center justify-center min-h-[80vh]">
                <div className="w-full max-w-md animate-scale-in">
                    <div className="floating-panel glow-border p-6">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold mb-1">Save Your Secret Phrase</h2>
                            <p className="text-secondary text-sm">This is the only way to recover your wallet</p>
                        </div>

                        {/* Warning */}
                        <div className="mnemonic-warning mb-4 p-3">
                            <div className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-warning text-sm">Write this down!</p>
                                    <p className="text-warning text-xs opacity-80">Never share your recovery phrase.</p>
                                </div>
                            </div>
                        </div>

                        {/* Mnemonic Display */}
                        <div className="mnemonic-display text-center text-sm mb-4 animate-pulse-glow">
                            {newMnemonic}
                        </div>

                        <button
                            onClick={proceedWithNewMnemonic}
                            className="btn btn-primary w-full btn-ripple"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            I've Saved It, Continue
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-2xl animate-fade-in">
                {/* Hero Section */}
                <div className="text-center mb-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-glow-strong">
                        <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold mb-1 text-gradient">CryptoVault</h1>
                    <p className="text-secondary text-sm">Secure Multi-Chain Wallet</p>
                </div>

                {/* Two Column Layout for Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Import Wallet Card */}
                    <div className="floating-panel p-5 animate-slide-up">
                        <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-xs">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </span>
                            Import Wallet
                        </h2>
                        <form onSubmit={handleImport}>
                            <div className="input-group mb-3">
                                <label className="input-label text-xs">Recovery Phrase</label>
                                <textarea
                                    value={mnemonic}
                                    onChange={(e) => setMnemonic(e.target.value)}
                                    placeholder="Enter your 12-word phrase..."
                                    className="input textarea input-mono text-sm"
                                    rows="3"
                                    style={{ minHeight: '80px' }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-full btn-ripple">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>
                                Import
                            </button>
                            {error && (
                                <div className="alert alert-error mt-3 text-xs animate-slide-up">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Create Wallet Card */}
                    <div className="floating-panel p-5 animate-slide-up flex flex-col" style={{ animationDelay: '50ms' }}>
                        <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-xs">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </span>
                            Create New Wallet
                        </h2>
                        <p className="text-secondary text-xs mb-4 ml-9">Generate a new multi-chain wallet</p>
                        <div className="flex-1 flex flex-col justify-end">
                            <button onClick={handleCreate} className="btn btn-secondary w-full btn-ripple">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Create
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-muted text-xs mt-6">
                    Supports ETH • SOL • BTC
                </p>
            </div>
        </div>
    );
}

export default Login;