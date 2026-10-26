import Link from "next/link";
import * as db from "../../../../database";
const input =
  "w-full rounded border border-neutral-300 px-3 py-2 font-sans text-sm";
const rowLabel = "w-1/3 shrink-0 pt-2 pr-4 text-right text-sm";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input id="wd-name" defaultValue={assignment?.title ?? ""} className={`${input} mb-2`} />
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>
      <textarea
        id="wd-description"
        rows={6}
        defaultValue={assignment?.description ?? ""}
        className={`${input} mb-6`}
      />

      <div className="mb-4 flex">
        <label htmlFor="wd-points" className={rowLabel}>
          Points
        </label>
        <input id="wd-points" defaultValue={assignment?.points ?? 100} className={input} />
      </div>

      <div className="mb-4 flex">
        <label htmlFor="wd-group" className={rowLabel}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-4 flex">
        <label htmlFor="wd-display-grade-as" className={rowLabel}>
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={input}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>
      </div>

      <div className="mb-4 flex">
        <label htmlFor="wd-submission-type" className={rowLabel}>
          Submission Type
        </label>
        <div className="w-full rounded border border-neutral-300 p-4">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${input} mb-4`}>
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          {[
            ["wd-text-entry", "Text Entry"],
            ["wd-website-url", "Website URL"],
            ["wd-media-recordings", "Media Recordings"],
            ["wd-student-annotation", "Student Annotation"],
            ["wd-file-upload", "File Uploads"],
          ].map(([id, label]) => (
            <div key={id} className="mb-2 flex items-center gap-2 text-sm">
              <input type="checkbox" id={id} className="h-4 w-4" />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex">
        <div className={rowLabel}>Assign</div>
        <div className="w-full rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-semibold">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-4`} />
          <label htmlFor="wd-due-date" className="mb-1 block text-sm font-semibold">
            Due
          </label>
          <input type="date" id="wd-due-date" defaultValue={assignment?.due} className={`${input} mb-4`} />
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className="mb-1 block text-sm font-semibold">
                Available from
              </label>
              <input type="date" id="wd-available-from" defaultValue={assignment?.available} className={input} />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-semibold">
                Until
              </label>
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" className={input} />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
