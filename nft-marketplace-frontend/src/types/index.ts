export interface NFT {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  creator: User;
  owner: User;
  price: number;
  currency: string;
  isForSale: boolean;
  collectionName: string;
  createdAt: string;
  attributes: NFTAttribute[];
  likes: number;
  views: number;
}

export interface NFTAttribute {
  trait_type: string;
  value: string;
}

export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  isVerified: boolean;
  totalSales?: number;
  totalNFTs?: number;
  joinedDate?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  coverImageUrl: string;
  creator: User;
  itemCount: number;
  floorPrice: number;
  totalVolume: number;
  currency: string;
}

export interface Transaction {
  id: string;
  type: 'sale' | 'mint' | 'transfer' | 'offer' | 'listing';
  nft: NFT;
  from: User;
  to: User;
  price: number;
  currency: string;
  timestamp: string;
}

export type SortOption = 'price_low_to_high' | 'price_high_to_low' | 'recently_added' | 'most_viewed' | 'most_liked';

export type FilterOptions = {
  priceRange: [number, number];
  collections: string[];
  attributes: Record<string, string[]>;
};