import React from 'react';
import { Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NFT } from '../types';
import { Card, CardContent, CardFooter } from './ui/Card';

interface NFTCardProps {
  nft: NFT;
}

export const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <Link to={`/nft/${nft.id}`}>
      <Card interactive className="h-full">
        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={nft.imageUrl}
            alt={nft.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-3 right-3 flex space-x-2">
            <div className="bg-black/60 backdrop-blur-xs text-white px-2 py-1 rounded-full flex items-center text-xs">
              <Heart size={14} className="mr-1" />
              <span>{nft.likes}</span>
            </div>
            <div className="bg-black/60 backdrop-blur-xs text-white px-2 py-1 rounded-full flex items-center text-xs">
              <Eye size={14} className="mr-1" />
              <span>{nft.views}</span>
            </div>
          </div>
          {nft.isForSale && (
            <div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              For Sale
            </div>
          )}
        </div>
        
        <CardContent className="pb-2">
          <h3 className="text-lg font-bold text-surface-900 dark:text-surface-100 truncate">{nft.name}</h3>
          <div className="flex items-center mt-1">
            <img 
              src={nft.creator.avatarUrl} 
              alt={nft.creator.username} 
              className="w-5 h-5 rounded-full mr-2"
            />
            <span className="text-sm text-surface-600 dark:text-surface-400 truncate">
              {nft.creator.username}
              {nft.creator.isVerified && (
                <span className="inline-flex ml-1 text-primary-500">✓</span>
              )}
            </span>
          </div>
        </CardContent>
        
        <CardFooter className="pt-2 border-t border-surface-200 dark:border-surface-700">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="text-xs text-surface-500 dark:text-surface-400">Price</p>
              <p className="font-bold text-surface-900 dark:text-surface-100">
                {nft.price} {nft.currency}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-surface-500 dark:text-surface-400">Collection</p>
              <p className="text-sm text-surface-700 dark:text-surface-300 truncate max-w-[120px]">
                {nft.collectionName}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};