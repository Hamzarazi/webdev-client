"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
const field = "mb-3 w-full rounded border border-neutral-300 px-4 py-3 font-sans text-lg";
export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);
  const update = () => {
    if (profile) setCurrentUser(profile);
  };
  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };
  if (!currentUser || !profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-md">
      <h1 className="mb-3 text-3xl font-semibold">Profile</h1>
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${field}`}
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={`wd-password ${field}`}
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        placeholder="First Name"
        className={field}
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        placeholder="Last Name"
        className={field}
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-dob"
        type="date"
        className={field}
        value={profile.dob}
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        placeholder="Email"
        className={field}
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        id="wd-role"
        className={field}
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        onClick={update}
        id="wd-update-profile-btn"
        className="mb-3 block w-full rounded bg-blue-600 px-4 py-3 text-lg text-white"
      >
        Update
      </button>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full rounded bg-red-600 px-4 py-3 text-lg text-white"
      >
        Sign out
      </button>
    </div>
  );
}
