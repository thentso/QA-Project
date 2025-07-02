import { NextPage } from 'next';
import React from 'react';

const HomePage: NextPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Q&A Portal</h1>
      {/* TODO: Real-time list of recent questions, tag filter, ask button */}
    </div>
  );
};

export default HomePage; 