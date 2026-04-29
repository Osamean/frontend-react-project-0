import { useState } from 'react';
import Head from 'next/head';

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Welcome to our React application" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-indigo-800 mb-6">
          Welcome to Our Application
        </h1>
        
        <p className="text-lg text-gray-700 mb-8 text-center">
          This is a basic homepage built with React and Next.js
        </p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 w-full max-w-md">
          <p className="text-gray-800 mb-4">
            Current count: <span className="font-bold text-indigo-600">{count}</span>
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Increment
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="font-semibold text-indigo-700 mb-2">Feature {item}</h3>
              <p className="text-gray-600 text-sm">
                This is a sample feature card demonstrating the layout
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-600">
        <p>© {new Date().getFullYear()} React Application</p>
      </footer>
    </div>
  );
}
