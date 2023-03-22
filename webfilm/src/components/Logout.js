import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
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
                  <h2 className="text-uppercase text-center mb-5">Homepage</h2>
                  <p className="text-center">Welcome {userName.name}</p>
                  <button
                    onClick={handleLogout}
                    type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-while"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
