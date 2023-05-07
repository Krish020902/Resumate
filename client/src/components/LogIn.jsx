import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "../image/images/LOGO.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

// import Alert from "react-bootstrap-validation/lib/";

function LogIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });
  const onClickHandler = async (e) => {
    e.preventDefault();
    // try {
    // console.log(formData);
    await axios.post("/user/login", formData, { withCredentials: true }).then(
      (res) => {
        // console.log("asd", res);
        // console.log("this i s cv");
        // console.log(res);
        // console.log(res.data);
        // console.log("name is", res.data.user.f_name);
        // window.alert(res.data.user.f_name, res.data.user.l_name);
        // console.log("if ", res.data.user.cv[0]);
        let data = "";
        // let data1 = "";
        if (res.data.exists == true) {
          if (res.data.user.cv[0] == undefined) {
            data = {
              name: res.data.user.f_name,
              last: res.data.user.l_name,
            };
          }
          data = {
            name: res.data.user.f_name,
            last: res.data.user.l_name,
            cv: res.data.user.cv[res.data.user.cv.length - 1],
            allcv: res.data.user.cv,
          };
          // data1 = {
          //   name: res.data.user.f_name,
          //   last: res.data.user.l_name,
          //   cv: res.data.user.cv,
          // };

          // const param = new URLSearchParams(data).toString();
          // console.log("this is data with 1 cv", data);
          navigate(`/Form`, { state: { data } });
          // console.log(res.data.user.f_name, res.data.user.l_name);
          // <h1>${res.data.user.f_name}</h1>;
        }
        if (res.data.exists == false) {
          window.alert(res.data.msg);
        }
      },
      (error) => {
        window.alert(`Sorry! ${error.response.data.msg}`);
      }
    );
    // } catch (error) {
    //   console.log(`kjsdbnf ${error}`);
    // }
  };
  return (
    <section className="text-center text-lg-start bg-lvnder ">
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
      <div className="container py-4 ">
        <div className="row g-0 align-items-center ">
          <div className="col-lg-6 mb-5 mb-lg-0 ">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div className="card-body p-5 shadow-5  text-center">
                <h2 className="fw-bold mb-5">Log In</h2>
                <form onSubmit={onClickHandler}>
                  {/* 2 column grid layout with text inputs for the first and last names */}

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

                  {/* Checkbox */}

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    onClick={onClickHandler}
                  >
                    Log In
                  </button>
                  <div className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? &nbsp;
                    <Link to="/Signin" className="text-decoration-none">
                      SignUp
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default LogIn;
