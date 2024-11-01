import { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


    function handleUserLogin(event) {

    }

  return (
    <div className="bg-blue-50 flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-4 text-3xl">Login</h1>
        <form className="w-64 mx-auto">
          <input
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            type="text"
            placeholder="username"
            className="block w-full rounded-sm mb-2 p-2 border"
          />
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="password"
            className="block w-full rounded-sm mb-2 p-2 border"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white block w-full rounded-sm p-3"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
