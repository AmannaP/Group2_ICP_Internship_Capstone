import React from 'react';
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NFTCard } from '../components/NFTCard';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { mockFeaturedNFTs, mockTopCollections } from '../utils/mockData';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent-500/20 to-transparent opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Discover, Collect & Sell <span className="text-accent-500">Extraordinary</span> NFTs
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-lg">
                NexusNFT is the premier marketplace for NFTs on the Internet Computer Protocol — buy, sell, and discover exclusive digital assets.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="accent" 
                  rightIcon={<ArrowRight size={20} />}
                  onClick={() => {}}
                >
                  Explore
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => {}}
                >
                  Create
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-white">450K+</p>
                  <p className="text-white/70 text-sm">Total Items</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">120K+</p>
                  <p className="text-white/70 text-sm">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">35M+</p>
                  <p className="text-white/70 text-sm">ICP Volume</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto max-w-sm sm:max-w-md md:max-w-full"
            >
              <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Featured NFT" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Ethereal Dreamscape #42</h3>
                  <div className="flex items-center mt-2">
                    <img 
                      src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Creator" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className="ml-2">
                      <p className="text-white text-sm">@cosmicCreator</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-500/30 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-surface-50 dark:fill-surface-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path d="M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,42.7C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-50">Why Choose NexusNFT?</h2>
            <p className="mt-4 text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Built on the Internet Computer Protocol, our platform offers unique advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card glass className="p-6">
              <div className="rounded-full bg-primary-100 dark:bg-primary-900/30 p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Zap className="text-primary-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-50 mb-3">
                Lightning Fast
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                Experience sub-second finality and lightning-fast transactions powered by ICP's chain-key cryptography.
              </p>
            </Card>
            
            <Card glass className="p-6">
              <div className="rounded-full bg-secondary-100 dark:bg-secondary-900/30 p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="text-secondary-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-50 mb-3">
                Secure & Trustless
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                Security built on ICP's decentralized consensus, with no central points of failure or control.
              </p>
            </Card>
            
            <Card glass className="p-6">
              <div className="rounded-full bg-accent-100 dark:bg-accent-900/30 p-3 w-12 h-12 flex items-center justify-center mb-6">
                <TrendingUp className="text-accent-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-50 mb-3">
                Low Fees
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                Enjoy minimal gas fees and transaction costs compared to other blockchain platforms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured NFTs */}
      <section className="py-20 bg-surface-100 dark:bg-surface-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-50">Featured NFTs</h2>
            <Link to="/explore">
              <Button variant="outline" rightIcon={<ArrowRight size={16} />}>
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockFeaturedNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Collections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-50">Top Collections</h2>
            <Link to="/collections">
              <Button variant="outline" rightIcon={<ArrowRight size={16} />}>
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockTopCollections.map((collection) => (
              <Link key={collection.id} to={`/collection/${collection.id}`}>
                <Card interactive className="overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={collection.coverImageUrl} 
                      alt={collection.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <img 
                        src={collection.creator.avatarUrl} 
                        alt={collection.creator.username} 
                        className="w-16 h-16 rounded-xl border-4 border-white dark:border-surface-800 -mt-10 bg-white dark:bg-surface-800"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">
                          {collection.name}
                        </h3>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-surface-600 dark:text-surface-400">by</span>
                          <span className="ml-1 text-sm font-medium text-primary-500">
                            {collection.creator.username}
                            {collection.creator.isVerified && (
                              <span className="inline-flex ml-1 text-primary-500">✓</span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div>
                        <p className="text-xs text-surface-500 dark:text-surface-400">Items</p>
                        <p className="text-sm font-semibold text-surface-900 dark:text-surface-100">
                          {collection.itemCount}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-surface-500 dark:text-surface-400">Floor Price</p>
                        <p className="text-sm font-semibold text-surface-900 dark:text-surface-100">
                          {collection.floorPrice} {collection.currency}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-surface-500 dark:text-surface-400">Volume</p>
                        <p className="text-sm font-semibold text-surface-900 dark:text-surface-100">
                          {collection.totalVolume} {collection.currency}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your NFT Journey?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of artists and collectors in the world's most innovative NFT marketplace on the Internet Computer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="accent" 
                rightIcon={<ArrowRight size={20} />}
                onClick={() => {}}
              >
                Explore NFTs
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => {}}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};