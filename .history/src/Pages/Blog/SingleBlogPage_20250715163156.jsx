import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleBlogPage = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => {
                // data is an array of blogs
                const foundBlog = data.find(post => post._id === id);
                setBlog(foundBlog);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching blog data:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!blog) return <p>Blog not found.</p>;


    return (
        <div className="max-w-3xl mx-auto p-6">
            <img src={blog.imgUrl} alt={blog.blogTitle} className="mb-6 w-full rounded" />
            <h1 className="text-3xl font-bold mb-4 text-gray-600">{blog.blogTitle}</h1>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <p className="text-sm text-gray-500 text-justify">By {blog.author} on {blog.date}</p>
        </div>

    );
};

export default SingleBlogPage;