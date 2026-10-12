import { FaUserCircle } from "react-icons/fa";
const people = [
  // Book sample rows
  { name: "Tony Stark", login: "001234561S", section: "S101", role: "STUDENT", last: "2020-10-01", total: "10:21:32" },
  { name: "Bruce Wayne", login: "001234562S", section: "S101", role: "STUDENT", last: "2020-11-02", total: "23:32:23" },
  { name: "Steve Rogers", login: "001234563S", section: "S101", role: "STUDENT", last: "2020-10-02", total: "13:21:32" },
  { name: "Natasha Romanoff", login: "001234564S", section: "S101", role: "TA", last: "2020-11-05", total: "11:22:33" },
  // On your own
  { name: "Hamza Razi", login: "001234565S", section: "S102", role: "STUDENT", last: "2026-10-11", total: "42:10:05" },
  { name: "Ada Lovelace", login: "001234566S", section: "S102", role: "TA", last: "2026-10-09", total: "18:44:12" },
  { name: "Alan Turing", login: "001234567S", section: "S102", role: "FACULTY", last: "2026-10-10", total: "27:03:51" },
  // With AI sample rows
  { name: "Jane Sample", login: "001234568S", section: "S103", role: "STUDENT", last: "2026-09-30", total: "05:12:40" },
  { name: "Alex Sample", login: "001234569S", section: "S103", role: "STUDENT", last: "2026-10-01", total: "08:27:19" },
  { name: "Sam Sample", login: "001234570S", section: "S103", role: "TA", last: "2026-10-03", total: "14:55:02" },
];
export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.login} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
                {p.name}
              </td>
              <td className="p-2">{p.login}</td>
              <td className="p-2">{p.section}</td>
              <td className="p-2">{p.role}</td>
              <td className="p-2">{p.last}</td>
              <td className="p-2">{p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
