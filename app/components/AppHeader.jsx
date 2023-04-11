import Link from 'next/link'

const AppHeader = () => {
    return (
        <header className='bg-black/100 py-4 items-center justify-between flex flex-col border-white border-b-4'>
                <div className='text-3xl font-bold font-sans decoration-blue-500 underline decoration-from-font'>
                    <Link href='/'>
                        Nxt<span className='font-thin text-blue-500 underline decoration-white'>Github</span>
                    </Link>
                </div>
                <div className='flex gap-4 pt-2'>
                    <Link href='/about'>About</Link>
                    <Link href='/about/team'>Our Team</Link>
                    <Link href='/code/repos'>Code</Link>
                </div>
        </header>
    )
}

export default AppHeader