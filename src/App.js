import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,Routes,
  Route,
} from "react-router-dom";
import Home from "./Page/Home";
export default function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                {/* <Route  path="/" element={<Land/>}/> */}
                {/* <Route  path="/about" element={<About/>}/>
                <Route  path="/blogs" element={<Blogs/>}/>
                <Route  path="/services" element={<Services/>}/>
                <Route  path="/contactus" element={<Contact/>}/> */}
                {/* <Route path="*" element={<NotFound/>} /> */}
                    {/* <AnimatedRoutes/> */}
            </Routes>
        </Router>
    </div>
  )
}

