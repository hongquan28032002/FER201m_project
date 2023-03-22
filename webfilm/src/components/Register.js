import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  //tp store value in localstorage
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lấy danh sách người dùng từ local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Kiểm tra xem email đã tồn tại trong danh sách người dùng hay chưa
    const emailExists = users.some((user) => user.email === input.email);
    // Nếu email đã tồn tại, hiển thị thông báo lỗi
    if (emailExists) {
      setErrorMsg("Email already exists. Please choose another email.");
      return;
    }
    // Nếu email không tồn tại, lưu thông tin người dùng mới vào local storage
    users.push(input);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(input));
    // Chuyển hướng đến trang đăng nhập
    navigate("/login");
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
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Examplelcg">
                        Your full name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id="form3Examplelcg"
                        className="form-control form-control-lg"
                        placeholder="Enter name"
                        required
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Examplelcg">
                        Your email:
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
                        Your password:
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
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-while"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      You already have an account?
                      <a href="/login" className="fw-bold text-body">
                        <u>Login here</u>
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

export default Register;
