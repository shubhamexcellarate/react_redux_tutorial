import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

    

    // const [name, setName] = useState("Shubham");
    // const[age,setAge]=useState(21);
    // const handleClick = () => {
    //     setName("Rane");
    // }
    // const handleClickAgain = (name) => {
    //     console.log("Hey", name);
    // }
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}


            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="rane")} title="All Blogs"/> */}
            {/* <h2>HomePage</h2> */}
            {/* <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click</button> */}
            {/* <button onClick={() => handleClickAgain("Shubham")}>Click Me</button> */}
        </div>
    );
}
export default Home;