import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./controler/home/Home";
import Login from "./controler/login/Login";
import Profile from "./controler/profile/Profile";
import DetailProduct from "./controler/detailproduct/DetailProduct";

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detailproduct' element={<DetailProduct />} />
      </Routes>
    </div>
  );
}

export default App;
