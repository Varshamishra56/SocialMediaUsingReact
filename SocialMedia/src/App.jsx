import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";
import Settings from "./Components/Settings";
import Notifications from "./Components/Notifications";
import React from "react";
import ReactDOM from "react-dom";
import BlogPost from "./Components/BlogPost";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  return (
    <PostListProvider>
      <div className="appContainer">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
        

          {selectedTab === "Home" && <BlogPost />}
          {selectedTab === "Create Post" && <CreatePost></CreatePost>}
          {selectedTab === "Notification" && <Notifications></Notifications>}
          {selectedTab === "Settings" && <Settings></Settings>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
