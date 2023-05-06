import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "../image/images/LOGO.jpg";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    pass: "",
    c_pass: "",
  });
  const onClickHandler = async (e) => {
    e.preventDefault();
    // console.log(res);
    try {
      await axios
        .post("http://localhost:4000/user/signin", formData)
        .then((res) => {
          if (res.data.exists === false) {
            window.alert(res.data.msg);
          } else {
            navigate("/Login");
          }
        });
    } catch (error) {
      console.log(`this is error${error}`);
    }
  };
  return (
    <section className="text-center text-lg-start">
      <style>
        {`
        .cascading-right {
          margin-right: -50px;
        }
  
        @media (max-width: 991.98px) {
          .cascading-right {
            margin-right: 0;
          }
        }
      `}
      </style>

      {/* Jumbotron */}
      <nav class="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
        <div class="container">
          {/* <div class="navbar-brand-wrapper d-flex w-100">
            <img src={img1} alt="" />
          </div> */}
          <div class="navbar-brand-wrapper d-flex w-100">
            <img style={{ height: "45px" }} src={img1} alt="" />
          </div>
          <div
            class="collapse navbar-collapse navbar-menu-wrapper"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav align-items-lg-center align-items-start ml-auto">
              <li class="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                {/* <a class="nav-link" href="#"> */}
                {/* Login */}
                {/* </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form onSubmit={onClickHandler}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              f_name: e.target.value,
                            });
                          }}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              l_name: e.target.value,
                            });
                          }}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          pass: e.target.value,
                        });
                      }}
                      // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])"
                      required
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          c_pass: e.target.value,
                        });
                      }}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Confirm Password
                    </label>
                  </div>

                  {/* Checkbox */}

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    // onClick={onClickHandler}
                  >
                    Sign up
                  </button>
                  <div className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account? &nbsp;
                    <Link to="/Login" className="text-decoration-none">
                      LOGIN
                    </Link>
                  </div>

                  {/* Register buttons */}
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignIn;
