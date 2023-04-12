'use client';



import Link from "next/link";
import Courses from "./components/Courses";
import { useEffect, useState } from "react";
import Loader from "./loading";
import Search from "./components/Search";


const  Home = ()=> {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, [])
  
  if (loading) {
    return <Loader />
  }

  return (
    <div className=" ">
      <h1 className="text-2xl">Welcome to Next Github</h1>
      <Search getSearchResults={ (results) => setCourses(results)} />
      <Courses courses={courses } />
    </div>
  )
}

export default Home;