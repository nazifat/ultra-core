import { useParams } from "react-router-dom";


const SingleBlogPage = () => {
    const {blogId}= useParams();
    return (
        <div>
            <p>{blogId}</p>
        </div>
    );
};

export default SingleBlogPage;