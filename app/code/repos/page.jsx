import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/arikxl/repos');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const repos = await response.json();
    return repos;
}

const ReposPage = async () => {

    const repos = await fetchRepos();


    return (
        <div className=' '>
            <h2 className='text-2xl mb-4 bg'>Repositories</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id} className='rounded-md border mb-2 p-2 bg-gray-200 text-gray-600 max-w-sm'>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3 className='font-bold text-xl text-black'> {repo.name}</h3>
                            <p>Description: {repo.description}</p>
                            <div className=' flex justify-between items-center py-2'>
                                <div className='flex items-center'>
                                    <span className='flex '>
                                        <FaStar className='flex self-center mr-2' />
                                        {repo.stargazers_count}
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='flex'>
                                        <FaCodeBranch className='flex self-center mr-2' />
                                        {repo.forks_count}
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='flex '>
                                        <FaEye className='flex self-center mr-2' />
                                        {repo.watchers_count}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposPage