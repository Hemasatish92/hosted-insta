import logo from "./logo.svg";
import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profie from "./screens/Profie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createpost from "./screens/Createpost";
import { LoginContext } from "./context/LoginContext";
import Modal from "./components/Modal";
import UserProfie from "./components/UserProfile";
import MyFolliwngPost from "./screens/MyFollowingPost";
import { GoogleOAuthProvider } from '@react-oauth/google';
import PostFeed from "./components/PostFeed";
import posts from "./data/posts";

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <GoogleOAuthProvider clientId="852972554695-d2h4p1s3mqdn7ojl61ue21c9melgnjc5.apps.googleusercontent.com">
          <LoginContext.Provider value={{ setUserLogin, setModalOpen }}>
            <Navbar login={userLogin} />
            <Routes>
              {/* Render PostFeed only on the Home page */}
              <Route path="/" element={<Home><PostFeed posts={posts} /></Home>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route exact path="/profile" element={<Profie />} />
              <Route path="/createPost" element={<Createpost />} />
              <Route path="/profile/:userid" element={<UserProfie />} />
              <Route path="/followingpost" element={<MyFolliwngPost />} />
            </Routes>
            <ToastContainer theme="dark" />
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
          </LoginContext.Provider>
        </GoogleOAuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
