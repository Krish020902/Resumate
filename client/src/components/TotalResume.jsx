import { useState } from "react";

import { Link } from "react-router-dom";
import data1 from "../data";
import "../index.css";

import img1 from "../image/images/LOGO.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TotalResume() {
  const navigate = useNavigate();

  const edit = useLocation();
  //   const edit = state;
  let data = "";
  let image = "";
  //   console.log("this is edit", edit);
  //   console.log("this is particular cv", edit.state.data.cv);
  console.log("this is allcv", edit.state.data.allcv);
  const [Resume, setResume] = useState(0);
  data = {
    name: edit.state.data.name,
    last: edit.state.data.last,
    cv: edit.state.data.allcv[Resume],
    allcv: edit.state.data.allcv,
  };

  // data={...data,(data.state.data.cv[Resume])}
  //   console.log("this is inserted data", data);
  //   const { state } = data;
  const onClickhandler = () => {
    navigate("/Form", { state: { data } });
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg pl-3 pl-sm-0 bg-lvnder" id="navbar">
        <div class="container ">
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
              {/* <li class="nav-item">
                <Link to="/Login" className="nav-link">
                  LogIn
                </Link> */}
              {/* <a class="nav-link" href="#"> */}
              {/* Login */}
              {/* </a> */}
              {/* </li> */}
              <li class="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>
        Total resumes of {edit.state.data.name} {edit.state.data.last} are{" "}
        {edit.state.data.allcv.length}
      </h1>
      <ul className="template">
        {edit.state.data.allcv.map((data, index) => {
          return (
            edit.state.data.allcv.length !== 0 && (
              <>
                {data1.map((data) => {
                  // console.log(data.id);
                  // console.log("state id", edit.state.data.allcv[index].id);
                  if (data.id === edit.state.data.allcv[index].id) {
                    console.log("this is data id", data.id);
                    image = data.img;
                  }
                })}
                <li className="select-template">
                  <img
                    src={image}
                    width="250"
                    height="350"
                    // className={isActive1 ? "image2" : ""}
                    // style="border-width:2px ;"
                  ></img>
                  <button
                    type="button"
                    class="btn btn-rounded btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setResume(index);
                    }}
                  >
                    Resume
                    {index + 1}
                  </button>
                </li>
              </>
            )
          );
        })}
      </ul>
      {edit.state.data.allcv.length != 0 && (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              {/* <div class="modal-header"> */}
              {/* <h5 class="modal-title" id="exampleModalLabel">
                          Modal title
                      </h5> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-body">
                First name is : {edit.state.data.allcv[Resume].fname}
                <br></br>
                Last name is : {edit.state.data.allcv[Resume].lname}
                <br></br>
                Phone is : {edit.state.data.allcv[Resume].phone}
                <br></br>
                Email is : {edit.state.data.allcv[Resume].email}
                <br></br>
                Github is : {edit.state.data.allcv[Resume].github}
                <br></br>
                Linkedin is : {edit.state.data.allcv[Resume].linkedin}
                <br></br>
                Skills is : {edit.state.data.allcv[Resume].skills}
                <br></br>
              </div>
              <br></br>
              <button
                class="btn btn-rounded btn-outline-warning"
                data-bs-dismiss="modal"
                onClick={onClickhandler}
              >
                Edit
              </button>
              <br></br>
            </div>
          </div>
        </div>
      )}
    </>
  );
  //   console.log("cool ", state);
}

export default TotalResume;
