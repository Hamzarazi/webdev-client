"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
import "../kambaz.css";
export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const pathname = usePathname() ?? "";
  const links = currentUser
    ? [{ label: "Profile", href: "/account/profile" }]
    : [
        { label: "Signin", href: "/account/signin" },
        { label: "Signup", href: "/account/signup" },
      ];
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={
            pathname === href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
