import "./App.css";
import Header from "./components/generic/header/Header";
import Footer from "./components/generic/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Post from "./components/pages/posts/Post";
import Profile from "./components/pages/profile/Profile";
import FullPost from "./components/pages/fullPost/FullPost";
import ThemeContext, { theme } from "./components/context/ThemeContext";
import { useState } from "react";
function App() {
   const [themes , setThemes] = useState(theme.light)
  return (
    <div>
      <BrowserRouter>
        <ThemeContext.Provider value={themes}>
        <div>
              {/* {themes === theme.light ? (
                <button onClick={() => setThemes(theme.dark)}>dark</button>
              ) : (
                <button onClick={() => setThemes(theme.light)}>light</button>
              )} */}
            </div>
          <section>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Post />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<FullPost />} />
            </Routes>
          </section>
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
