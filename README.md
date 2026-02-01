# 🔐 Crypto Wallet - Web3 Multi-Chain Wallet

A modern, secure, and user-friendly **Web3 cryptocurrency wallet** built with React + Vite. This wallet supports multiple blockchain networks including **Ethereum**, **Bitcoin**, and **Solana**, allowing users to manage their digital assets from a single interface.

![Web3](https://img.shields.io/badge/Web3-Enabled-blue?style=for-the-badge&logo=web3.js)
![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

- 🌐 **Multi-Chain Support** - Manage Ethereum (ETH), Bitcoin (BTC), and Solana (SOL) in one wallet
- 🔑 **HD Wallet Generation** - Create secure wallets using BIP39 mnemonic phrases
- 💸 **Send & Receive** - Easily send and receive cryptocurrencies across supported networks
- 📊 **Real-Time Balances** - View live balance updates for all your assets
- 🛡️ **Secure Key Derivation** - Industry-standard BIP32/BIP44 hierarchical deterministic wallet derivation
- 🎨 **Modern UI** - Beautiful, responsive interface built with TailwindCSS and DaisyUI
- ⚡ **Fast & Lightweight** - Powered by Vite for lightning-fast development and builds

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite 7** | Build Tool & Dev Server |
| **TailwindCSS 4** | Styling |
| **DaisyUI** | UI Component Library |

### Web3 Libraries
| Library | Purpose |
|---------|---------|
| **ethers.js** | Ethereum interactions |
| **@solana/web3.js** | Solana blockchain interactions |
| **bitcoinjs-lib** | Bitcoin transaction handling |
| **bip39** | Mnemonic generation |
| **bip32** | HD wallet key derivation |
| **ed25519-hd-key** | Solana key derivation |

---

## 🔗 GetBlock RPC API

This project uses **[GetBlock](https://getblock.io/)** as the RPC provider for connecting to blockchain networks. GetBlock provides reliable, fast, and scalable blockchain node access for developers.

### Why GetBlock?
- ⚡ **High Performance** - Fast and reliable node infrastructure
- 🌍 **Multi-Chain Support** - Access to 50+ blockchain networks
- 🔒 **Secure** - Enterprise-grade security for your dApps
- 📈 **Scalable** - Auto-scaling infrastructure to handle any load

### Supported Networks via GetBlock:
- **Ethereum Mainnet** - For ETH transactions and balance queries
- **Solana Mainnet** - For SOL transactions and balance queries

> 🔑 **Note**: You'll need to replace the API keys in `src/services/blockchain.js` with your own GetBlock API keys. Sign up at [getblock.io](https://getblock.io/) to get your free API key.

---

## 📁 Project Structure

```
crypto_wallet/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/
│   │   ├── Login.jsx           # Wallet creation/import
│   │   ├── WalletDashboard.jsx # Main wallet interface
│   │   └── AssetCard.jsx       # Asset display component
│   ├── context/
│   │   └── WalletContext.jsx   # Global wallet state management
│   ├── services/
│   │   ├── blockchain.js       # RPC interactions & transactions
│   │   └── wallet.js           # HD wallet generation & derivation
│   ├── styles/          # Additional stylesheets
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/crypto_wallet.git
   cd crypto_wallet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure GetBlock API Keys**
   
   Open `src/services/blockchain.js` and replace the RPC URLs with your GetBlock API keys:
   ```javascript
   const ETH_RPC_URL = 'https://go.getblock.io/YOUR_ETH_API_KEY';
   export const SOL_RPC_URL = 'https://go.getblock.io/YOUR_SOL_API_KEY';
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:5173` to view the app.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🔐 Security Considerations

> ⚠️ **Important Security Notes**

- **Never share your mnemonic phrase** - Anyone with access to your 12/24 word recovery phrase can access your funds
- **Private keys are stored locally** - This wallet stores keys in browser memory/localStorage. For production use, consider more secure storage methods
- **API Keys** - Keep your GetBlock API keys private and never commit them to public repositories
- **Use at your own risk** - This is a development/educational project. Use on mainnet with caution

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [GetBlock](https://getblock.io/) - For providing reliable RPC node access
- [ethers.js](https://docs.ethers.org/) - Ethereum library
- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) - Solana library
- [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) - Bitcoin library
- [TailwindCSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) - Styling

---

<p align="center">
  Made with ❤️ by a Web3 Developer
</p>
