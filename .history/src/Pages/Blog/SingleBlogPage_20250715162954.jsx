import { useParams } from "react-router-dom";


const SingleBlogPage = () => {

    const { id } = useParams();
    console.log({ id })


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
        <div className="p-10 text-red-400">
            <p>{id}</p>
        </div>
    );
};

export default SingleBlogPage;