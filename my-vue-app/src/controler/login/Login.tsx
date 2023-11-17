import { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./login.css";

type typeLogin = {
  username: string;
  password: string;
};
let initLogin: typeLogin = {
  username: "",
  password: "",
};

export default function Login() {
  const [login, setLogin] = useState<typeLogin>(initLogin);

  let handleChange =
    (name: keyof typeLogin) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLogin((prev) => ({ ...prev, [name]: event.target.value }));
    };
    //lấy nhữngg gì mà input nhập vào

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    let user = await res.json();
    if (user && user.token) {
      localStorage.setItem("check", JSON.stringify(user.token));
      location.replace("/profile");
    }
  }

  return (
    <div>
      <Header />
      <div className='login' style={{ height: "450px" }}>
        <>
          <div className='container' style={{ marginTop: "30px" }}>
            <section id='content'>
              <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div>
                  <input
                    type='text'
                    value={login.username}
                    onChange={handleChange("username")}
                    placeholder='Username'
                    required={true}
                    id='username'
                  />
                </div>
                <div>
                  <input
                    type='password'
                    placeholder='Password'
                    value={login.password}
                    onChange={handleChange("password")}
                    required={true}
                    id='password'
                  />
                </div>
                <div>
                  <input type='submit' defaultValue='Log in' />
                  <a href='#'>Lost your password?</a>
                  <a href='#'>Register</a>
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
      <Footer />
    </div>
  );
}
