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
                setBlogdata(data.data)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div>
            <HeaderBanner img="https://i.ibb.co/sp1dtCTK/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg" title="Blog"></HeaderBanner>
            {/* <p className='text-red-900'>{blogData.length}</p> */}

            <div>
                {blogData.map((data)=><BlogCard key={_data.id} data={data}></BlogCard>)}
            </div>
            {/* <BlogCard></BlogCard> */}
        </div>
    );
};

export default Blog;