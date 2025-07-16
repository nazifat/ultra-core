import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import ArrowButton from '../../../Components/ArrowButton/ArrowButton';
import { Link } from 'react-router-dom';

// Sample blog data (You can also import this from a separate JSON or fetch it)
const blogs = [
  {
    _id: "1",
    blogTitle: "5 Reasons Your Business Needs Custom Software",
    description: "Off-the-shelf software can be limiting when your business has unique workflows or customer needs...",
    author: "Ayesha Rahman",
    date: "2025-06-15",
    imgUrl: "https://i.ibb.co.com/HffCkNmT/julian-hochgesang-ps-GV5-Khidl-Y-unsplash.jpg"
  },
  {
    _id: "2",
    blogTitle: "How to Choose the Right Tech Stack for Your Startup",
    description: "Selecting the right tech stack involves understanding your product vision...",
    author: "Tariq Hasan",
    date: "2025-06-22",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80"
  },
  {
    _id: "3",
    blogTitle: "Top 7 UI/UX Trends in 2025",
    description: "User expectations evolve rapidly, and 2025 brings a new wave of UI/UX trends...",
    author: "Farhana Islam",
    date: "2025-07-01",
    imgUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fit=crop&w=800&q=80"
  },
  {
    _id: "4",
    blogTitle: "Agile vs. Waterfall: Which Project Management Method Works Best?",
    description: "Agile and Waterfall offer different philosophies in project management...",
    author: "Rakibul Alam",
    date: "2025-07-08",
    imgUrl: "https://i.ibb.co.com/HffCkNmT/julian-hochgesang-ps-GV5-Khidl-Y-unsplash.jpg"
  },
  {
    _id: "5",
    blogTitle: "Why Cybersecurity Should Be a Priority in Your Software Projects",
    description: "Cybersecurity is no longer optional in modern software development...",
    author: "Meherun Nahar",
    date: "2025-07-10",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80"
  }
];

const Featured = () => {
  return (
    <div className='lg:my-10'>
      <CustomHeader heading='Featured' subHeading='Resources' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-6'>
        {blogs.map(blog => (
          <div
            key={blog._id}
            className="max-w-sm mx-auto shadow-sm border rounded-lg overflow-hidden"
          >
            <img
              src={blog.imgUrl}
              alt={blog.blogTitle}
              className="w-full h-48 object-cover"
            />
            <div className="px-3 py-4">
              <Link to={`/blogs/${blog._id}`}>
                <h2 className="text-left mb-4 text-[#2D3748] font-semibold hover:underline">
                  {blog.blogTitle}
                </h2>
              </Link>
              <div className="flex justify-end">
                <ArrowButton btnText="Read More" className="m-0 p-0" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
