import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./login.css"


export default function Login() {
  return (
   
    <div>
        <Header />
        <div className="login" style={{height:"450px"}}>
        <>
  <div className="container" style={{marginTop:"30px"}}>
    <section id="content">
      <form action="">
        <h1>Login Form</h1>
        <div>
          <input type="text" placeholder="Username" required={true} id="username" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required={true}
            id="password"
          />
        </div>
        <div>
          <input type="submit" defaultValue="Log in" />
          <a href="#">Lost your password?</a>
          <a href="#">Register</a>
        </div>
      </form>
      {/* form */}
     
      {/* button */}
    </section>
    {/* content */}
  </div>
  {/* container */}
</>


        </div>
        <Footer/>
    </div>
   

   

  )
}