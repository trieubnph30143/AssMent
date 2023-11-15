
import Header from "../header/Header"
import "./profile.css" ;
import profile from "./img/anh2.jpg"
import Footer from "../footer/Footer";


export default function Profile() {
  return (
   <>
   <Header />
   <div className="profile">

   <div className="sumAll">
  <div className="icon">
  <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
  </div>
  <img  src={profile} />
  <h2>Bùi Nhất Triêu</h2>
  <p>Thanh Hóa </p>
  <p>Lập Trình Web</p>
  <div className="bnt-sumAll">
    <button>Liên Hệ</button>
    <button>Kết Bạn</button>
  </div>
</div>

   </div>

    <Footer />
    </>
  )
}