import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import CoursePaid from "./components/CoursePaid";
// import Course from "./components/Course";
import Courses from "./course/Courses";
import Contactus from "./Contactus/Contactus";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";


function App() {
  return (
    <div className=" dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/Courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/components/AboutPage" element={<AboutPage />} />
      </Routes>
    </div>

    // <>
    //   <Home />
    //   <CoursePaid />
    // </>
  );
}

export default App;
