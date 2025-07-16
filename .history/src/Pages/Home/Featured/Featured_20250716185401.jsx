import React, { useEffect, useState } from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import ArrowButton from '../../../Components/ArrowButton/ArrowButton';
import { Link } from 'react-router-dom';



const Featured = () => {

  const [blogData, setBlogdata] = useState([])

  useEffect(() => {
    fetch('/blog.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBlogdata(data)
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <div className='lg:my-10'>
      <CustomHeader heading='Featured' subHeading='Resources' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6'>
        {blogData.map(blog => (
          <div
            key={blog._id}
            className="max-w-sm w-full h-full mx-auto shadow-sm border rounded-lg overflow-hidden flex flex-col"
          >
            {/* Fixed height image container */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={blog.imgUrl}
                alt={blog.blogTitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content below image fills remaining space */}
            <div className="flex flex-col justify-between flex-grow px-3 py-4">
              <Link to={`/blogs/${blog._id}`}>
                <h2 className="text-left mb-4 text-[#2D3748] font-semibold hover:underline line-clamp-3">
                  {blog.blogTitle}
                </h2>
              </Link>
              <div className="flex justify-end mt-auto">
                <ArrowButton btnText="Read More" className="m-0 p-0" url={`/blog/${blog._id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
