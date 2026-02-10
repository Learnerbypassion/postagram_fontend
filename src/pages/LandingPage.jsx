import React from 'react'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
  const navigate = useNavigate()
  const submitHandler = (e)=>{
    navigate("/create-post")
  }
  const postPageProvider = (e)=>{
    navigate("/posts")
  }
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
		<h1 className='font-extrabold text-5xl border-2 p-2 m-10'>Postagram</h1>
		<div className="relative inline-flex  group">
        <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <div className='flex flex-col gap-2'>
          <button
        onClick={submitHandler}
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">Upload image
        </button>
        <button
        onClick={postPageProvider}
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">Posts
        </button>
        </div>
    </div>
	</div>
  )
}

export default LandingPage