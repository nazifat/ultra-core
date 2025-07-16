import { useParams } from "react-router-dom";


const SingleBlogPage = () => {

    const {id}= useParams();
    console.log({id})


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

    return (
        <div className="p-10 text-red-400">
            <p>{id}</p>
        </div>
    );
};

export default SingleBlogPage;