import { useParams } from "react-router-dom";


const SingleBlogPage = () => {
    const {blogId}= useParams();
    return (
        <div className="p-10 text-red-400">
            <p>{blogId}</p>
        </div>
    );
};

export default SingleBlogPage;