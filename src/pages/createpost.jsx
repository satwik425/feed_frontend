import React from "react";
import "./createpost.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Createpost = () => {

     const navigate = useNavigate()
    
        const handleSubmit = async (e) => {
            e.preventDefault()
    
    
            const formData = new FormData(e.target)
    
            axios.post("https://feed-backend-7qci.onrender.com/create_post", formData)
                .then((res) => {
    
                    navigate("/feed")
    
                })
                .catch((err) => {
                    console.log(err)
                    alert("Error creating post")
                })
    
    
        }
    
  return (
    <div className="create-post-section">
      <div className="create-post-container">
        <h1>Create Post</h1>

        <form  onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" />
          <input type="text" name="caption" placeholder="Enter caption" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Createpost;