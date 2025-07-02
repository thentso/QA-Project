import React, { useState } from 'react';  // essentially for importing the react library
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
// different imports that i can use from firebase ^


export default function SignInPage() {

//  useState is a hook to manage state [state, setState] -- setState is function to update state, stored in actual 'state' variable
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(() => auth.currentUser);

  // Listen for auth state changes
  // useEffect basically has a  listener function (unsub) and then the cleanup function (unsub)
  React.useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    // react syntax -- u => setUser(u) is basically just running setUser(u) considering that u is the parameter (what firebase returns)
    // esentially when auth state changes, setUser updates with new user info 
    // only runs when component mounts, sign in/out, or auth state changes.
    return unsub;
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    // e.preventDefault() is used to prevent the default behavior of the form submission, which is to refresh the page
    setLoading(true);
    setError('');
    try {  // try catch is used to look for errors
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message);  // err.message is the error message from firebase
    }
    setLoading(false);
  };

  // handleSignUp is the same as handleSignIn, but for signing up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };
  // same as before but for google sign in
  const handleGoogle = async () => {
    setLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider(); 
      await signInWithPopup(auth, provider); 
    } catch (err: any) {
        // i COULD add another check if the popup is closed to reset the loading state
        // in the case that the user immediately closes the site, it will still be in a loading state.
        // but, keeping it simple for now and not allowing overusage of logging it you have to wait 
        // maybe a few seconds before trying to log in again if you just close the site!
      setError(err.message);
    }
    setLoading(false);
  };

  // signs out using firebase auth
  const handleSignOut = async () => {
    setLoading(true);
    setError('');
    try {
      await signOut(auth);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (user) {  // if user signed in, show welcome message and sign out button
    return (  // tailwind uses the className attribute to apply styles to the element
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow w-full max-w-md text-center">
          <h2 className="text-xl font-bold mb-4">Welcome, {user.email}</h2>
          <button onClick={handleSignOut} className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Sign Out</button>
        </div>
      </div>
    );
  }

  return (  /// handles sign in/up form
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form className="bg-white p-8 rounded shadow w-full max-w-md" onSubmit={handleSignIn}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In / Sign Up</h2>
        <input
          type="email"
          placeholder="Email"  /// what you see before typing
          className="w-full mb-3 px-3 py-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}   // onChange triggered when value of input changes (e.target.value is what is inside the input)
          // e.target is the element that trigger the event(the input change / the input itself)
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 mb-3 text-sm">{error}</div>}
        {/* // error is a state variable that is used to display the error message from firebase  
        // -- didnt realize but this needs a different syntax for comments because it's inside the JSX (Html part) and not just the JS*/}
        <div className="flex gap-2 mb-3">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={handleSignUp}   // actually calling of function
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"   // end of this shows us disabled state makes it greyed out
            disabled={loading}  // when loading is true, the button is disabled (basically when you are signing in/up)
            // prevents multiple submission/clicks!
          >
            Sign Up
          </button>
        </div>
        <button
          type="button"
          onClick={handleGoogle}
          className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          disabled={loading}
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
} 