import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Github, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-surface-900 border-t border-surface-200 dark:border-surface-800 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                NexusNFT
              </span>
            </Link>
            <p className="mt-4 text-sm text-surface-600 dark:text-surface-400 max-w-xs">
              Discover, collect, and sell extraordinary NFTs on the Internet Computer Protocol's premier marketplace.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-surface-500 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-surface-500 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-surface-500 hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-surface-500 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-surface-500 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100 uppercase tracking-wider">
              Marketplace
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/explore" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  All NFTs
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/activity" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Activity
                </Link>
              </li>
              <li>
                <Link to="/rankings" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Rankings
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/platform-status" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Platform Status
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-200 dark:border-surface-800">
          <p className="text-sm text-surface-500 text-center">
            &copy; {new Date().getFullYear()} NexusNFT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};