import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Wallet, 
  LogOut 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { useTheme } from '../../hooks/useTheme';
import { useWallet } from '../../hooks/useWallet';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isConnected, address, balance, connectWallet, disconnectWallet, isConnecting } = useWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Explore', path: '/explore' },
    { name: 'Collections', path: '/collections' },
    { name: 'Activity', path: '/activity' },
    { name: 'Create', path: '/create' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-surface-900/80 border-b border-surface-200 dark:border-surface-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              NexusNFT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'text-surface-700 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
            >
              <Search size={20} />
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {isConnected ? (
              <div className="flex items-center space-x-2">
                <div className="text-right hidden lg:block">
                  <p className="text-xs text-surface-500 dark:text-surface-400">Balance</p>
                  <p className="text-sm font-medium text-surface-900 dark:text-surface-100">
                    {balance} ICP
                  </p>
                </div>
                <div className="relative group">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary-300 dark:border-primary-700 text-primary-500"
                    leftIcon={<Wallet size={16} />}
                  >
                    {address?.substring(0, 4)}...{address?.substring(address.length - 4)}
                  </Button>
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-surface-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700">
                      My Profile
                    </Link>
                    <Link to="/my-nfts" className="block px-4 py-2 text-sm text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700">
                      My NFTs
                    </Link>
                    <button 
                      onClick={disconnectWallet}
                      className="flex items-center w-full px-4 py-2 text-sm text-error-500 hover:bg-surface-100 dark:hover:bg-surface-700"
                    >
                      <LogOut size={16} className="mr-2" />
                      Disconnect
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Wallet size={16} />}
                onClick={connectWallet}
                isLoading={isConnecting}
              >
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800 p-4"
          >
            <div className="container mx-auto">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-500" />
                <input
                  type="text"
                  placeholder="Search NFTs, collections, and users..."
                  className="w-full pl-10 pr-4 py-2 bg-surface-100 dark:bg-surface-800 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-surface-500 hover:text-surface-900 dark:hover:text-surface-100"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-4 pb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary-500 dark:text-primary-400'
                        : 'text-surface-700 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-2 border-t border-surface-200 dark:border-surface-800">
                  <button
                    onClick={() => {
                      setIsSearchOpen(!isSearchOpen);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center text-sm font-medium text-surface-700 dark:text-surface-300"
                  >
                    <Search size={16} className="mr-2" />
                    Search
                  </button>
                </div>
                
                <div className="pt-2">
                  {isConnected ? (
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-surface-700 dark:text-surface-300">
                          {address?.substring(0, 6)}...{address?.substring(address.length - 4)}
                        </span>
                        <span className="text-sm font-medium text-surface-900 dark:text-surface-100">
                          {balance} ICP
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Link to="/profile">
                          <Button variant="outline" size="sm" fullWidth>
                            Profile
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          fullWidth
                          onClick={disconnectWallet}
                          leftIcon={<LogOut size={16} />}
                        >
                          Logout
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      variant="primary"
                      fullWidth
                      leftIcon={<Wallet size={16} />}
                      onClick={() => {
                        connectWallet();
                        setIsMenuOpen(false);
                      }}
                      isLoading={isConnecting}
                    >
                      Connect Wallet
                    </Button>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};