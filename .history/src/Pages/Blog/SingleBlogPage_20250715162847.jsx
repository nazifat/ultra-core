import { useParams } from "react-router-dom";


const SingleBlogPage = () => {
    const {id}= useParams();
    console.log({id})
    return (
        <div className="p-10 text-red-400">
            <p>{id}</p>
        </div>
    );
};

export default SingleBlogPage;