import { useEffect, useState } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import BlogCard from './BlogCard';
const [blogData, setBlogdata] = useState('')


const Blog = () => {

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogdata(data))
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div>
            <HeaderBanner img="https://i.ibb.co/sp1dtCTK/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg" title="Blog"></HeaderBanner>
            <BlogCard></BlogCard>
        </div>
    );
};

export default Blog;