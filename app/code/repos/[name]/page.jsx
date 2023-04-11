import Repo from '@/app/components/Repo'
import Link from 'next/link'

const RepoNamePage = ({params:{name}}) => {
    return (
        <div>
            <Link href='/code/repos' className='mb-4'>Back to repositories</Link>
            <Repo name={name}/>
        </div>
    )
}

export default RepoNamePage