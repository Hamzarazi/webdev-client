"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";
export default function Assignments() {
  const { cid } = useParams();
  const courseId = String(cid);
  const router = useRouter();
  const allAssignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const assignments = allAssignments.filter((assignment) => assignment.course === courseId);
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role !== "STUDENT";
  const pendingTitle = assignments.find((a) => a._id === pendingDelete)?.title ?? "";
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border border-neutral-300 py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        {canEdit && (
          <div className="flex gap-2">
            <button
              id="wd-add-assignment-group"
              type="button"
              className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm"
            >
              <FaPlus /> Group
            </button>
            <button
              id="wd-add-assignment"
              type="button"
              onClick={() => router.push(`/courses/${courseId}/assignments/new`)}
              className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              <FaPlus /> Assignment
            </button>
          </div>
        )}
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg font-semibold"
      >
        <span>ASSIGNMENTS</span>
        <span className="flex items-center gap-2">
          <span className="rounded-full border border-neutral-400 px-3 py-0.5 text-sm font-normal">
            40% of Total
          </span>
          <button
            type="button"
            className="rounded border border-neutral-300 bg-white px-2 py-0.5 text-sm"
          >
            <FaPlus />
          </button>
        </span>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={courseId}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            onDelete={canEdit ? () => setPendingDelete(assignment._id) : undefined}
          />
        ))}
      </ul>
      {pendingDelete && (
        <DeleteAssignmentDialog
          title={pendingTitle}
          onConfirm={() => {
            deleteAssignment(pendingDelete);
            setPendingDelete(null);
          }}
          onCancel={() => setPendingDelete(null)}
        />
      )}
    </div>
  );
}
