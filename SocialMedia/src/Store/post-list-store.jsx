import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const DEFAULT_POST_LIST = [
    {
      id: "1",
      title: "Going to Mumbai",
      body: "Hi Friends! I am going to Mumbai to enjoy my vacations. I hope a lot of enjoyments and peace out!",
      reactions: 2,
      userId: "user-9",
      tags: ["vacation", "mumbai", "Enjoying"],
    },
    {
      id: "2",
      title: "Going to Kolkata",
      body: "Hi Friends! I am going to Kolkata to enjoy my vacations. I hope a lot of enjoyments and peace out!",
      reactions: 8,
      userId: "user-9",
      tags: ["vacation", "Kolkata", "Enjoying"],
    },
    {
      id: "3",
      title: "Going to Delhi",
      body: "Hi Friends! I am going to Delhi to enjoy my vacations. I hope a lot of enjoyments and peace out!",
      reactions: 5,
      userId: "user-9",
      tags: ["vacation", "Delhi", "Enjoying"],
    },
  ];

  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchpostList({
      type: "ADD_POST",
      payload:{
        id:Date.now(),
        title:postTitle,
        body:postBody,
        reactions:reactions,
        userId:userId,
        tags:tags,
      }
    })
  };
  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
