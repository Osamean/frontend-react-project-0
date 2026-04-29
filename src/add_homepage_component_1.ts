import { useState } from 'react';
import Head from 'next/head';

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Head>
        <title>My Awesome App</title>
        <meta name="description" content="Welcome to my amazing application" />
      </Head>

      <header className="py-6 px-8 shadow-sm bg-white">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-indigo-700">AppName</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to Your Application
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            This is a beautifully crafted homepage built with Next.js and TypeScript
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10 max-w-2xl mx-auto">
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Click Count: {count}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Feature {item}</h3>
                <p className="text-gray-600">
                  Discover amazing features that make our application stand out from the crowd.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 px-4 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} My Awesome App. All rights reserved.</p>
      </footer>
    </div>
  );
}
