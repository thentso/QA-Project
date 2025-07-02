import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return unsub;
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="font-bold text-lg cursor-pointer">Q&A Portal</span>
          </Link>
          <Link href="/ask" className="hover:underline">Ask</Link>
        </div>
        <div>
          {user ? (
            <button onClick={handleSignOut} className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600">Sign Out</button>
          ) : (
            <Link href="/signin" className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Sign In</Link>
          )}
        </div>
      </nav>
      <main className="min-h-screen bg-gray-50">{children}</main>
    </div>
  );
};

export default Layout; 