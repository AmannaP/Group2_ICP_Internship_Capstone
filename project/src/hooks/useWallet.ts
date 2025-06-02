import { useState, useEffect } from 'react';

interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: number | null;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
  });
  
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if wallet was previously connected
    const savedWallet = localStorage.getItem('wallet');
    if (savedWallet) {
      try {
        const parsedWallet = JSON.parse(savedWallet);
        setWalletState(parsedWallet);
      } catch (e) {
        console.error('Failed to parse saved wallet data', e);
        localStorage.removeItem('wallet');
      }
    }
  }, []);

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      // Mock implementation - in a real app, this would integrate with ICP wallet
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockAddress = 'abc123...xyz789';
      const mockBalance = 25.5;
      
      const newState = {
        isConnected: true,
        address: mockAddress,
        balance: mockBalance,
      };
      
      setWalletState(newState);
      localStorage.setItem('wallet', JSON.stringify(newState));
    } catch (e) {
      console.error('Failed to connect wallet', e);
      setError('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletState({
      isConnected: false,
      address: null,
      balance: null,
    });
    localStorage.removeItem('wallet');
  };

  return {
    ...walletState,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
  };
};