import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';


async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/arikxl/${name}`);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const repo = await response.json();
    return repo;
}

const Repo = async ({ name }) => {

    const repo = await fetchRepo(name);

    return (
            <div  className=''>
                    <h2 className='font-bold text-xl text-black'> {repo.name}</h2>
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
            </div>
    )
}

export default Repo