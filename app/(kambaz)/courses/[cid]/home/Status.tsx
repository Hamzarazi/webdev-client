import type { ReactNode } from "react";
import { MdDoNotDisturbAlt, MdOutlineCloudDownload } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import {
  FaCheckCircle,
  FaHome,
  FaChartBar,
  FaBullhorn,
  FaChartLine,
  FaBell,
  FaStar,
} from "react-icons/fa";
function StatusButton({
  icon,
  label,
  id,
}: {
  icon: ReactNode;
  label: string;
  id?: string;
}) {
  return (
    <button
      type="button"
      id={id}
      className="mb-1 flex w-full items-center gap-2 rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
    >
      {icon}
      {label}
    </button>
  );
}
export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <div className="mt-3">
        <StatusButton icon={<BiImport />} label="Import Existing Content" />
        <StatusButton icon={<MdOutlineCloudDownload />} label="Import from Commons" />
        <StatusButton icon={<FaHome />} label="Choose Home Page" />
        <StatusButton icon={<FaChartBar />} label="View Course Stream" />
        <StatusButton icon={<FaBullhorn />} label="New Announcement" />
        <StatusButton icon={<FaChartLine />} label="New Analytics" />
        <StatusButton icon={<FaBell />} label="View Course Notifications" />
        <StatusButton icon={<FaStar />} label="Sample action" id="wd-ai-status" />
      </div>
    </div>
  );
}
