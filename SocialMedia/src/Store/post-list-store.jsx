import { createContext, useReducer } from "react";


const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  });

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
