import Link from "next/link";


export default function Home() {
  return (
    <div className=" ">
      <h1>Welcome to Next Github</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
