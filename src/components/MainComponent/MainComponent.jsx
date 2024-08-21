import React from "react";
import { useState } from "react";
import Posts from "./Posts/Posts";

export default function MainComponent() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [filter, setFilter] = useState("all");
  let content = "";

  const toggleComplete = (postId) => {
    setPosts((prev) => {
      return prev.map((post) => {
        if (post.id === postId) {
          return { ...post, completed: !post.completed };
        } else {
          return post;
        }
      });
    });

    setFilteredPosts((prev) => {
      return prev.map((post) => {
        if (post.id === postId) {
          return { ...post, completed: !post.completed };
        } else {
          return post;
        }
      });
    });
  };

  const deletePost = (postId) => {
    setPosts((prev) => {
      return prev.filter((post) => {
        return post.id != postId;
      });
    });

    setFilteredPosts((prev) => {
      return prev.filter((post) => {
        return post.id != postId;
      });
    });
  };

  const handleItems = (posts) => {
    let counter = 0;
    posts.map((post) => {
      !post.completed ? counter++ : "";
    });
    return counter + " ";
  };

  return (
    <div className=" w-[90%] absolute left-[50%] translate-x-[-50%] top-[12%] border-none rounded-lg flex flex-col gap-4 max-w-[540px]">
      <div className=" bg-white dark:bg-[#25273D] w-[100%] h-[50px] rounded-lg overflow-hidden flex items-center">
        <div className=" px-4 py-4">
          <span className=" border border-[#E3E4F1] h-6 w-6 rounded-[50%] block bg-white dark:bg-[#25273D]   hover:bg-gradient-to-br hover:from-[#55DDFF] hover:to-[#C058F3] cursor-pointer"></span>
        </div>
        <input
          maxLength={40}
          onKeyDown={(e) => {
            if (content.trim() != "" && e.key === "Enter") {
              setPosts([
                ...posts,
                { content, completed: false, id: Math.random() },
              ]);
              e.target.value = "";
            }
          }}
          onChange={(e) => {
            content = e.target.value;
          }}
          placeholder="Create a new todo..."
          type="text"
          className=" w-[100%] h-[100%] focus:outline-none pl-4 placeholder-[#9495A5] dark:placeholder-[#767992] bg-white dark:bg-[#25273D] dark:text-[#C8CBE7]"
        />
      </div>
      {posts.length > 0 && (
        <div className=" flex flex-col rounded-lg overflow-hidden">
          <Posts
            posts={filter === "all" ? posts : filteredPosts}
            deletePost={deletePost}
            toggleComplete={toggleComplete}
          />
          <div className="flex h-[50px] w-[100%] justify-between items-center px-5 rounded-bl-lg rounded-br-lg text-[12px] text-[#9495A5] bg-white dark:bg-[#25273D]">
            <span className=" hover:text-[#797a83] cursor-pointer">
              {handleItems(posts)}
              items left
            </span>
            <span
              onClick={() => {
                setPosts(
                  posts.filter((post) => {
                    return post.completed === false;
                  })
                );
                setFilteredPosts(
                  filteredPosts.filter((post) => {
                    return post.completed === false;
                  })
                );
              }}
              className=" hover:text-[#797a83] cursor-pointer"
            >
              Clear Completed
            </span>
          </div>
        </div>
      )}
      <div className=" flex justify-center items-center bg-white dark:bg-[#25273D] h-[50px] w-[100%] border-none rounded-lg mb-10">
        <div className="flex gap-6 font-bold text-[14px] text-[#9495A5] dark:text-[#5B5E7E]">
          <span
            onClick={() => setFilter("all")}
            className={` hover:text-[#3A7CFD] cursor-pointer ${
              filter === "all" ? "text-[#3A7CFD]" : ""
            }`}
          >
            All
          </span>
          <span
            onClick={() => {
              setFilter("active");
              setFilteredPosts(
                posts.filter((post) => post.completed === false)
              );
            }}
            className={` hover:text-[#3A7CFD] cursor-pointer ${
              filter === "active" ? "text-[#3A7CFD]" : ""
            }`}
          >
            Active
          </span>
          <span
            onClick={() => {
              setFilter("completed");
              setFilteredPosts(posts.filter((post) => post.completed === true));
            }}
            className={` hover:text-[#3A7CFD] cursor-pointer
              ${filter === "completed" ? "text-[#3A7CFD]" : ""}`}
          >
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}
