import React from 'react';

export default function Login() {
  return (
    <>
      <div className="flex justify-center mb-2 mt-10 items-center h-fit bg-blue-20">
        <div className="bg-white mb-2 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Log in to verticalsol</h2>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600 block mb-1">Username:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 block mb-1">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            className="bg-blue-500 text-white p-b rounded w-full hover:bg-blue-600"
            type="submit"
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
}
