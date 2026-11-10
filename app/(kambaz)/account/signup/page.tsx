"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = () => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }
    if (password !== verify) {
      setError("Passwords do not match");
      return;
    }
    setCurrentUser({ ...emptyUser, _id: crypto.randomUUID(), username, password });
    router.push("/account/profile");
  };
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      {error && <p className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${field}`}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={`wd-password ${field}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="verify password"
        type="password"
        className={`wd-password-verify ${field}`}
        value={verify}
        onChange={(e) => setVerify(e.target.value)}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>
      <Link href="/account/signin" id="wd-signin-link" className="text-blue-600 underline">
        Sign in
      </Link>
    </div>
  );
}
