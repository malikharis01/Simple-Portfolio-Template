import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { ArrowUpRightSquare } from "lucide-react";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });
export default function Navbar() {
  return (
    <div className=" w-full h-min  fixed z-[1] bg-white border-b-8 ">
      <div>
        <nav className=" pl-12 flex flex-wrap   justify-between items-center p-5 text-md  ">
          <div className=" flex space-x-16">
            <div className=" flex">
              <button
                className={`${mont.className} text-2xl text-purple-950  py-2 px-4 font-bold `}
              >
                <Link href={"./Home"}>My Portfolio</Link>
              </button>
            </div>
            <div className=" flex">
              <button
                className={`${mont.className} text-xl text-blue-900  py-2 px-4 font-bold `}
              >
                <Link href={"./#"}>Home</Link>
              </button>
              <button
                className={`${mont.className} text-xl text-blue-900  py-2 px-4 font-bold `}
              >
                Blogs
              </button>
              {/* <DropdownMenuCheckboxes/> */}
              <button
                className={`${mont.className} text-xl text-blue-900  py-2 px-4 font-bold `}
              >
                <Link href={"./#"}>Projects</Link>
              </button>
              <button
                className={`${mont.className} text-xl text-blue-900  py-2 px-4 font-bold `}
              >
                Contact
              </button>
            </div>
          </div>
          <div className=" flex space-x-4">
            <div className=" flex space-x-4 items-center">
              <button
                className={`${dm.className}  transition duration-500 ease-in-out   text-black py-2 px-3 rounded-md font-semibold `}
              >
                <Link href={"https://github.com/panaverse"}>
                  {" "}
                  <h1 className=" flex">
                    Github <ArrowUpRightSquare />
                  </h1>
                </Link>
              </button>

              <button
                className={`${dm.className}  transition duration-500 ease-in-out bg-blue-900 border-blue-600 text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-3 rounded-md font-semibold `}
              >
                <Link href={"./#"}>Resume</Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
