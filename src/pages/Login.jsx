import React from 'react';

function Login() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-600">Login</h1>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
