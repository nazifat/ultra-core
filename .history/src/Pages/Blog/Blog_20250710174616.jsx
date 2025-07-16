import { useEffect, useState } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import BlogCard from './BlogCard';


const Blog = () => {
    const [blogData, setBlogdata] = useState('')

    useEffect(() => {
        fetch('blog.json')
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
        <div>
            <HeaderBanner img="https://i.ibb.co/sp1dtCTK/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg" title="Blog"></HeaderBanner>
            {blogData.replace.length}
            <BlogCard></BlogCard>
        </div>
    );
};

export default Blog;