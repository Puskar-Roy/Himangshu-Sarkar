import { aboutYou } from "@/lib/data";
import Image from "next/image";
import dp from "../public/himangshu_01.jpg";
import { FaLinkedin, FaInstagram , FaGithub} from "react-icons/fa";
import { SiMedium } from "react-icons/si";
export default function Sidebar() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex gap-2 flex-col space-y-2 p-4 h-fit static md:sticky top-24">
      <Image
        src={dp}
        height={180}
        width={180}
        className="rounded-full border border-zinc-500 shadow-2xl"
        alt="main"
      />
      <p className="font-semibold leading-none text-center tracking-tight">
        {aboutYou.name}
      </p>
      <div className="flex flex-col gap-2">
        <p className="font-normal leading-none text-center tracking-tight">
          {aboutYou.email}
        </p>
        <p className="font-light text-sm leading-none text-center tracking-tight">
          {aboutYou.phone}
        </p>
      </div>
      <p className="text-sm text-muted-foreground tracking-tight">
        {aboutYou.description}
      </p>
      <div className="flex justify-center items-center gap-4">
        <FaInstagram className="h-4 w-4 cursor-pointer"/>
        <FaLinkedin className="h-4 w-4 cursor-pointer"/>
        <FaGithub className="h-4 w-4 cursor-pointer"/>
        <SiMedium className="h-4 w-4 cursor-pointer"/>
      </div>
    </div>
  );
}
