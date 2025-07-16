import { useParams } from "react-router-dom";


const SingleBlogPage = () => {
    const {blogId}= useParams();
    return (
        <div className="p-10">
            <p>{blogId}</p>
        </div>
    );
};

export default SingleBlogPage;