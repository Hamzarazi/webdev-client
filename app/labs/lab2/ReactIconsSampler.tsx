import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { SiDocker } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";
export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <h3 className="mt-2 text-base font-semibold">My icons</h3>
      <div className="flex gap-3">
        <SiDocker className="text-4xl text-sky-600" title="Docker" />
        <BsDatabase className="text-4xl text-emerald-600" title="Database" />
      </div>
      <h3 className="mt-2 text-base font-semibold">Sample icons</h3>
      <div id="wd-ai-icons" className="flex gap-3">
        <MdDashboard className="text-4xl text-blue-600" />
        <HiSparkles className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
