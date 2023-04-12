import Link from "next/link";
import Courses from "./components/Courses";


export default function Home() {
  return (
    <div className=" ">
      <h1 className="text-2xl">Welcome to Next Github</h1>
      <Courses />
    </div>
  )
}
