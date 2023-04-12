import Link from "next/link";

// async function fetchCourses() {
//     const response = await fetch(`http://localhost:3000/api/courses`);

//     const courses = response.json();
//     return courses;
// }

const Courses = ({ courses }) => {
    
    // const courses = await fetchCourses();
  
    return (
        <>
            <h2>Courses</h2>
            {courses?.map((course) => (
                <div key={course.id} className='card border mb-2'>
                    <h3>{course.title} </h3>
                    <small>Level: {course.level} </small>
                    <p>{course.description }</p>
                    <Link href={ course.link} target='_blank' className='btn'>
                        Go To Course
                    </Link>
                </div>
          ))}
    </>
  )
}

export default Courses