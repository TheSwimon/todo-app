import React from "react";
import cross from "/images/icon-cross.svg";
import check from "/images/icon-check.svg";

export default function Posts({ posts, toggleComplete, deletePost }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className=" group bg-white dark:bg-[#25273D] w-[100%] h-[50px] md:h-[55px] overflow-hidden flex items-center border-b border-[#E3E4F1] dark:border-[#393A4B]"
          >
            <div className=" px-4 py-4">
              <span
                onClick={() => toggleComplete(post.id)}
                className={` border border-[#E3E4F1] group-hover:border-[#C058F3] transition-all duration-200 dark:border-[#393A4B] h-6 w-6 rounded-[50%] flex justify-center items-center bg-white dark:bg-[#25273D] ${
                  post.completed
                    ? "bg-gradient-to-br from-[#55DDFF] to-[#C058F3]"
                    : "bg-white"
                } bg-white  cursor-pointer`}
              >
                <img
                  className={`select-none ${
                    post.completed ? "scale-100" : "invisible scale-50"
                  } transition-all duration-200`}
                  src={check}
                  alt="check symbol"
                />
              </span>
            </div>
            <div className=" bg-white w-[100%] dark:bg-[#25273D]">
              <p
                className={`${
                  post.completed
                    ? "text-[#D1D2DA] line-through"
                    : "text-[black] dark:text-[#C8CBE7]"
                }`}
              >
                {post.content}
              </p>
            </div>
            <div
              onClick={() => deletePost(post.id)}
              className="flex justify-center items-center mr-4 cursor-pointer scale-50 group-hover:scale-100 transition-all invisible group-hover:visible duration-200"
            >
              <img className="block" src={cross} alt="delete cross symbol" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
