import { useState } from "react";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleUserRegistration(event) {
    event.preventDefault(); // Prevent form submission for now
    // Add registration logic here
  }

  return (
    <div className="bg-blue-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h1 className="mb-6 text-3xl font-semibold text-center text-blue-600">
          Register
        </h1>
        <form className="space-y-4" onSubmit={handleUserRegistration}>
          <input
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            placeholder="Username"
            className="block w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            className="block w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white w-full rounded-md p-3 mt-4 hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
