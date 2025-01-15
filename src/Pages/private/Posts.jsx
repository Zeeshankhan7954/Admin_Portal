import React, {useEffect, useState} from "react";
import { GetToken, useNavigate } from "../../components";

function Posts() {

  const token = GetToken();

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const [PostsData, setPostsData] = useState([]) 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => {
        setPostsData(data);
      })
     .catch((error) => {
        "Error fetching posts:"
      });
  },[])
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 mt-14 bg-[#F2F5F7]">
          <h1 className="text-3xl mb-4">
            <b>Posts</b>
          </h1>
          <div className="grid grid-cols-3 gap-5">
          {PostsData.map((post) => (
          <a key={post.id}
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-1 2xl:col-span-1 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h5>
            <p className="font-normal text-gray-700 ">
              {post.body}
            </p>
          </a>
          ))}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Posts;
