"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, useAccountContext, type User } from "../../../../account/AccountContext";
import { useUsersStore } from "../../../../store/usersStore";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
const field = "rounded border border-neutral-300 px-2 py-1 text-sm";
export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const users = useUsersStore((state) => state.users);
  const addUser = useUsersStore((state) => state.addUser);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role !== "STUDENT";
  const [person, setPerson] = useState<User>(emptyUser);
  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === courseId,
    ),
  );
  const addPerson = () => {
    if (!person.firstName.trim() || !person.lastName.trim()) return;
    const newUser = addUser(person);
    enroll(newUser._id, courseId);
    setPerson(emptyUser);
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {canEdit && (
        <div id="wd-add-person" className="mb-3 flex flex-wrap items-center gap-2">
          <input
            placeholder="First name"
            className={field}
            value={person.firstName}
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
            id="wd-add-person-first-name"
          />
          <input
            placeholder="Last name"
            className={field}
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
            id="wd-add-person-last-name"
          />
          <input
            placeholder="Login ID"
            className={field}
            value={person.loginId}
            onChange={(e) => setPerson({ ...person, loginId: e.target.value })}
            id="wd-add-person-login-id"
          />
          <select
            className={field}
            value={person.role}
            onChange={(e) => setPerson({ ...person, role: e.target.value })}
            id="wd-add-person-role"
          >
            <option value="STUDENT">STUDENT</option>
            <option value="TA">TA</option>
            <option value="FACULTY">FACULTY</option>
          </select>
          <button
            type="button"
            onClick={addPerson}
            id="wd-add-person-btn"
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            + People
          </button>
        </div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            {canEdit && <th className="p-2"></th>}
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              {canEdit && (
                <td className="p-2">
                  <button
                    type="button"
                    onClick={() => unenroll(user._id, courseId)}
                    className="wd-unenroll-person rounded bg-red-600 px-2 py-0.5 text-xs text-white"
                  >
                    Remove
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
