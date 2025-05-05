import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}


interface PostQuery {
    // page: number,
    pageSize: number
}

const usePost = (query: PostQuery) =>
    useInfiniteQuery<Post[],Error>({
      queryKey: ['posts', query],
      queryFn: ({pageParam = 1}) =>
        axios
  
          .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
              params: {
                  _start: (pageParam-1) * query.pageSize,
                  _limit: query.pageSize
              }
          })
          .then((res) => res.data),
          keepPreviousData: true,  //keeps previous data, page wont jump up and down
          getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length +1 : undefined
          }
    });
  
  export default usePost;
  



// const usePost = (userId: number | undefined) =>
//   useQuery<Post[],Error>({
//     queryKey: userId ? ["users", userId,"posts"] :['posts'],
//     queryFn: () =>
//       axios

//         .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
//             params: {
//                 userId
//             }
//         })
//         .then((res) => res.data),
//   });

// export default usePost;
