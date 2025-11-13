import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";


function App() {
  return (
   
    <div>
      <Toaster/>{/*toast messages */}
      <Navbar/>
      <Outlet/> {/*all components will render here */}
    </div>
  );
}

export default App;
