import React, { useState, useEffect } from "react";
import Education from "./Education";
import Experiences from "./Experiences";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";
import Extras from "./Extras";
import Template from "./Template";
import axios from "axios";
import { saveAs } from "file-saver";
import Success from "./Success";
import { Link, useLocation } from "react-router-dom";
import img1 from "../image/images/LOGO.jpg";

// console.log(queryParams);
let data = "";
// console.log("this is", name, last);
const Form = () => {
  // const queryParams = new URLSearchParams(window.location.search);
  const [valid, setValid] = useState(false);
  // const name = queryParams.get("name");
  // const last = queryParams.get("last");
  // const data = queryParams.get("cv");
  // console.log("this is existing data", data);
  const { state } = useLocation();

  console.log("this is state", state);
  const name = state.data.name;
  const last = state.data.last;
  console.log("this is state cv", state.data.cv);
  if (state.data.cv != undefined) {
    data = state.data.cv;
  }
  console.log("this is data2", data);
  console.log("this is state with name", name);

  const ShowForm = async () => {
    try {
      const res = await axios.get("/task", {
        withCredentials: true,
      });

      if (res) {
        setValid(true);
      }
      // if (res.status === 200) {
      //   const error = new Error(res.error);
      //   throw error;
      // }
    } catch (error) {
      console.log(`${error}`);
    }
  };
  useEffect(() => {
    ShowForm();
  }, []);

  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(
    state.data.cv && {
      id: data.id == "" ? "" : data.id,
      fname: data.fname == "" ? "" : data.fname,
      lname: data.lname == "" ? "" : data.lname,
      email: data.email == "" ? "" : data.email,
      phone: data.phone == "" ? "" : data.phone,
      linkedin: data.linkedin == "" ? "" : data.linkedin,
      github: data.github == "" ? "" : data.github,
      skills: data.skills == "" ? "" : data.skills,

      exp1_org: data.org == "" ? "" : data.org,
      exp1_pos: data.pos == "" ? "" : data.pos,
      exp1_desc: data.desc == "" ? "" : data.desc,
      exp1_dur: data.dur == "" ? "" : data.dur,

      proj1_title: data.proj1_title == "" ? "" : data.proj1_title,
      proj1_link: data.proj1_link == "" ? "" : data.proj1_link,
      proj1_desc: data.proj1_desc == "" ? "" : data.proj1_desc,
      proj2_title: data.proj2_title == "" ? "" : data.proj2_title,
      proj2_link: data.proj2_link == "" ? "" : data.proj2_link,
      proj2_desc: data.proj2_desc == "" ? "" : data.proj2_desc,

      edu1_school: data.edu1_school == "" ? "" : data.edu1_school,
      edu1_year: data.edu1_year == "" ? "" : data.edu1_year,
      edu1_qualification:
        data.edu1_qualification == "" ? "" : data.edu1_qualification,
      edu1_desc: data.edu1_desc == "" ? "" : data.edu1_desc,
      senderemail: data.senderemail == "" ? "" : data.senderemail,

      existData: { data },
    }
  );

  const [page, setPage] = useState(0);
  const FormTitle = [
    "Select Template",
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Template formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
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
              <li class="nav-item">
                <Link to="/TotalResume" className="nav-link" state={state}>
                  {name}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {valid && name && last && (
        <div className="bg-lvnder">
          {/* <h1>${name</h1> */}
          <h1 className="text-center">
            Let's generate your Resume! Mr {name} {last}.
            {/* console.log(data) */}
          </h1>
          <div className="d-flex justify-content-center">
            <h1 className="text-center">{FormTitle[page]}</h1>
          </div>
          <div className="progressbar">
            <div
              style={{
                width:
                  page === 0
                    ? "20%"
                    : page === 1
                    ? "40%"
                    : page === 2
                    ? "60%"
                    : page === 3
                    ? "80%"
                    : "100%",
              }}
            ></div>
          </div>
          <div>{PageDisplay()}</div>
          <div className="d-flex justify-content-center gap-3 py-5 ">
            <button
              className="btn btn-dark"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="btn btn-primary"
              onClick={async () => {
                if (page === FormTitle.length - 1) {
                  console.log("form data", formData.id);
                  await axios
                    .post(
                      `/task/create-pdf/${formData.id}`,
                      formData,

                      { withCredentials: true }
                    )
                    .then(() =>
                      axios.get(
                        "/task/fetch-pdf",
                        {
                          responseType: "blob",
                        },
                        { withCredentials: true }
                      )
                    )
                    .then((res) => {
                      console.log(res);
                      console.log(res.data);
                      const pdfBlob = new Blob([res.data], {
                        type: "application/pdf",
                      });
                      setSuccess(true && res.status === 200);
                      saveAs(pdfBlob, "Resume.pdf");
                    });
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
            </button>

            <>
              {page === FormTitle.length - 1 && (
                // <button
                //   className="btn btn-primary"
                //   onClick={() => {
                //     axios.get("/email/email");
                //   }}
                // >
                //   Send Email
                // </button>
                <>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Send Email
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div class="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleFormControlInput1"
                              placeholder="name@example.com"
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  senderemail: e.target.value,
                                });
                              }}
                            ></input>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={async () => {
                              await axios.get(
                                `/email/email/${formData.senderemail}`
                              );
                            }}
                            data-bs-dismiss="modal"
                          >
                            Send Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
          {success && <Success />}
        </div>
      )}
    </>
  );
};

export default Form;
