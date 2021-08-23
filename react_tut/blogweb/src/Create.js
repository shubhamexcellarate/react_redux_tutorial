import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("shubh");
    const [isPending,setIsPending]=useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New Blog Added...");
            setIsPending(false);
        })
        // history.go(-1);
        history.push('/');
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form action="" onSubmit={ handleSubmit }>
                <label htmlFor="">Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }} />

                <label htmlFor="">Blog Body</label>
                <textarea cols="30" rows="10" required
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                ></textarea>

                <label htmlFor="">Blog Author</label>
                <select value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }}>
                    <option value="shubh">Shubh</option>
                    <option value="rane">Rane</option>
                    <option value="tydeus">Tydeus</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}


            </form>
        </div>
    );
}

export default Create;