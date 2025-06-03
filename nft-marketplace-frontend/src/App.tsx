import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<div className="container mx-auto px-4 py-8">Explore Page (Coming Soon)</div>} />
          <Route path="/collections" element={<div className="container mx-auto px-4 py-8">Collections Page (Coming Soon)</div>} />
          <Route path="/activity" element={<div className="container mx-auto px-4 py-8">Activity Page (Coming Soon)</div>} />
          <Route path="/create" element={<div className="container mx-auto px-4 py-8">Create NFT Page (Coming Soon)</div>} />
          <Route path="/profile" element={<div className="container mx-auto px-4 py-8">Profile Page (Coming Soon)</div>} />
          <Route path="/my-nfts" element={<div className="container mx-auto px-4 py-8">My NFTs Page (Coming Soon)</div>} />
          <Route path="/nft/:id" element={<div className="container mx-auto px-4 py-8">NFT Details Page (Coming Soon)</div>} />
          <Route path="/collection/:id" element={<div className="container mx-auto px-4 py-8">Collection Details Page (Coming Soon)</div>} />
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;