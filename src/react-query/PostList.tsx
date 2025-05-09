import { useState } from "react";
import usePost from "./hooks/usePost";
import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  // const[userId, setUserId] = useState<number>()
  const pageSize = 10;
  // const [page, setPage] = useState(1);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePost(
    { pageSize }
  );
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select 
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}

    className="form-select mb-3">
      <option value=""></option>
      <option value="1">User 1</option>
      <option value="2">User 2</option>
      <option value="3">User 3</option>
    </select> */}
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
