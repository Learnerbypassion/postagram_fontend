import React ,{useState, useEffect} from 'react'
import axios from 'axios'
function ShowPost() {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(true)
    const API_URL =import.meta.env.VITE_API_URL;
    useEffect(() => {
        axios.get(`${API_URL}/posts`)
        .then((res)=>{
            setPosts(res.data.posts)
        })
        .finally(()=>{
            setLoader(false)
        })
    }, [])
    const removePost = (elem)=>{
        console.log(elem._id)
        axios.delete(`${API_URL}/posts/${elem._id}`)
        .then(() => {
            alert("Post deleted successfully");
            setPosts(prevPosts =>
            prevPosts.filter(post => post._id !== elem._id)
        .finally(()=>{
            setLoader(false);
        })
      );
    })
    .catch(err => console.error(err));
    }
     if (loader) {
    return (
      <div className="loader-container w-full flex-col h-screen flex justify-center items-center">
        <div className="spinner animate-spin text-4xl w-8 h-8 border-2 border-dotted rounded-full"></div>
        <p>Loading posts...</p>
      </div>
    );
  }
  return (
    <div>
        <header className='bg-neutral-800 text-amber-50 px-3 py-1'>
            <h1 className='font-bold text-2xl'>POS<span className='text-5xl'>T</span>S</h1>
        </header>
        <div className='w-full h-auto py-2 gap-5 flex flex-col items-center'>
        {
            posts.length > 0 ?
            (posts.map((e, idx)=>{ 
                return (
                    <div key={idx} className='flex rounded-2xl gap-2 px-2 py-5 shadow-2xl  flex-col w-1/2 h-1/3'>
                        <img className='  border rounded-2xl  overflow-hidden object-fill' src={e.image} alt="" />
                        <div className='flex flex-row justify-between items-center'>
                            <h1 className='text-sm px-1 font-light'>{e.caption}</h1>
                        <button
                        onClick={()=>{
                            removePost(e)
                        }}
                        className=' hover:shadow-xl border rounded-2xl bg-amber-600 cursor-pointer text-lg'>🗑️</button>
                        </div>
                    </div>
                )
            }))
            : <h1>There in no any posts to display</h1>
        }
    </div>
    </div>
  )
}

export default ShowPost