import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreatepostPage() {
	const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null);
  const API_URL =import.meta.env.VITE_API_URL;
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.entries.value);
	axios.post(`${API_URL}/create-post`, formData)
	.then((res)=>{
		alert("Post created successfully")
		e.target.reset()
		navigate("/posts")
	})
	.catch((err)=>{
		console.log(err);
		
	})
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-5 w-full">
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-5xl font-semibold p-3 border-2 rounded-2xl">
          Create Post
        </h1>
        <form
          onSubmit={submitHandler}
          className="w-full h-1/2 flex flex-col justify-center items-center bg-gray-50 shadow-2xl"
        >
          <div className="relative border-dotted h-48 w-96 rounded-lg border-2 border-blue-700 cursor-pointer bg-gray-100 flex justify-center items-center overflow-hidden">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="absolute flex flex-col justify-center items-center">
                <i className="fa fa-folder-open fa-4x text-blue-700"></i>
                <span className="text-gray-400 mt-2">
                  Attach your files here
                </span>
              </div>
            )}

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={fileChangeHandler}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
          <textarea
            name="caption"
            className="w-74 rounded-lg mt-3 relative bg-gray-100 border-2 p-1"
            placeholder="Enter a caption"
            required
            id="caption"
          ></textarea>
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              type="submit"
              className="relative m-2 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-75 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer  focus:ring-gray-900"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatepostPage;
