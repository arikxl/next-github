import Link from "next/link";


export default function Home() {
  return (
    <div className=" ">
      <h1 className="text-2xl">Welcome to Next Github</h1>
      <ul className="pl-3">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  )
}
