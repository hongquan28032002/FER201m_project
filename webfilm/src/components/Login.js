import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./User.json";
const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggedesuer = JSON.parse(localStorage.getItem("user"));
    console.log(localStorage.getItem("user"));
    if (loggedesuer && loggedesuer.email && loggedesuer.password) {
      if (
        input.email === loggedesuer.email &&
        input.password === loggedesuer.password
      ) {
        localStorage.setItem("loggedin", true);
        navigate("/logout");
      } else {
        setErrorMsg("Wrong email or password!");
      }
    } else {
      setErrorMsg("User not found!");
    }
  };

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://st.quantrimang.com/photos/image/2020/07/14/Hinh-Nen-Nhe-Nhang-QTM-7.jpg')",
      }}
    >
      <div className="mask d-flex align-item-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>
                  <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Examplelcg">
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id="form3Examplelcg"
                        className="form-control form-control-lg"
                        placeholder="Enter email*"
                        required
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Examplelcg">
                        Password:
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id="form3Examplelcg"
                        className="form-control form-control-lg"
                        placeholder="Enter password*"
                        required
                      />
                    </div>
                    {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
                    {/* {errorMsg1 && <p style={{ color: "red" }}>{errorMsg1}</p>} */}
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-while"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      You don't have an account yet?
                      <a href="/register" className="fw-bold text-body">
                        <u>Register here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
