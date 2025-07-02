import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth, db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Define the available tags that users can choose from
const AVAILABLE_TAGS = [
  'javascript', 'react', 'python', 'nodejs', 'firebase', 
  'nextjs', 'typescript', 'css', 'html', 'database'
];

const AskPage: NextPage = () => {
  const router = useRouter();

  // State variables to store form data
  const [title, setTitle] = useState('');           // Question title
  const [body, setBody] = useState('');             // Question body/details
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // Selected tags
  const [loading, setLoading] = useState(false);    // Loading state for submit button
  const [error, setError] = useState('');           // Error message

  // Check if user is authenticated - if not, redirect to sign in
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      if (!user) {
        router.replace('/signin');
      }
    });
    return unsub;
  }, [router]);

  // Show loading message while checking authentication
  if (!auth.currentUser) {
    return <div className="p-8 text-center">Checking authentication...</div>;
  }

  // Handle tag selection - toggle tags on/off
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        // If tag is already selected, remove it
        return prev.filter(t => t !== tag);
      } else {
        // If tag is not selected, add it (but limit to 3 tags)
        if (prev.length < 3) {
          return [...prev, tag];
        }
        return prev; // Don't add if already at 3 tags
      }
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from reloading the page
    
    // Clear any previous errors
    setError('');
    
    // Basic form validation
    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }
    if (!body.trim()) {
      setError('Please enter a question body');
      return;
    }
    if (selectedTags.length === 0) {
      setError('Please select at least one tag');
      return;
    }

    // Start loading state
    setLoading(true);

    try {
      // Create a new question document in Firestore
      const questionData = {
        title: title.trim(),
        body: body.trim(),
        tags: selectedTags,
        authorId: auth.currentUser!.uid,        // Current user's ID
        authorEmail: auth.currentUser!.email,   // Current user's email
        createdAt: serverTimestamp(),           // Server timestamp (more accurate than client)
        votes: 0,                               // Start with 0 votes
        answerCount: 0                          // Start with 0 answers
      };

      // Add the document to the 'questions' collection
      const docRef = await addDoc(collection(db, 'questions'), questionData);
      
      // Redirect to the new question page
      router.push(`/questions/${docRef.id}`);
      
    } catch (err: any) {
      // If there's an error, show it to the user
      setError(err.message || 'Failed to create question');
    } finally {
      // Always stop loading, whether success or error
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ask a Question</h1>
      
      {/* Form starts here */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's your question? Be specific."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={200} // Limit title length
          />
          <p className="text-sm text-gray-500 mt-1">
            {title.length}/200 characters
          </p>
        </div>

        {/* Body Textarea */}
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">
            Details *
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Provide more context about your question. Include code examples if relevant."
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={5000} // Limit body length
          />
          <p className="text-sm text-gray-500 mt-1">
            {body.length}/5000 characters
          </p>
        </div>

        {/* Tag Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags * (select up to 3)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {AVAILABLE_TAGS.map((tag) => (
              <label key={tag} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagToggle(tag)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm capitalize">{tag}</span>
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Selected: {selectedTags.length}/3
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Question...' : 'Ask Question'}
        </button>
      </form>
    </div>
  );
};

export default AskPage; 