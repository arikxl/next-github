import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import { Suspense } from 'react'

const RepoNamePage = ({ params: { name } }) => {
    return (
        <div className=' rounded-md border mb-2 p-2 bg-gray-200 text-gray-600 w-[50%]' >
            <Link href='/code/repos' className='mb-4'>Back to repositories</Link>
            <Suspense fallback={<div>LOADING REPO... </div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>LOADING DIRS... </div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoNamePage