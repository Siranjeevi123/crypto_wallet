import { useWallet } from './context/WalletContext.jsx';
import Login from './components/Login.jsx';
import WalletDashboard from './components/WalletDashboard.jsx';
import './index.css';

function App() {
  const { wallet, loading } = useWallet();

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <div className="spinner spinner-lg"></div>
        <span className="text-secondary text-sm">Loading Wallet...</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <div className="app-container">
        {loading ? <LoadingSpinner /> : wallet ? <WalletDashboard /> : <Login />}
      </div>
    </div>
  );
}

export default App;