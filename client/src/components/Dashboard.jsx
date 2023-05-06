import React from "react";
import "../image/CSS/newcss.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ChatGPT from "./ChatGPT";
import img1 from "../image/images/LOGO.jpg";
import img2 from "../image/images/Group171.svg";
import img3 from "../image/images/p1.png";
import img4 from "../image/images/p2.png";
import img5 from "../image/images/p3.png";
import img6 from "../image/images/p4.png";
import img7 from "../image/images/img1.png";
import img8 from "../image/images/img2.png";
import img9 from "../image/images/img3.png";
// import "@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   TypingIndicator,
// } from "@chatscope/chat-ui-kit-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const onclickhandler = () => {
    navigate("/Login");
  };
  const onClicking = () => {
    navigate("/ChatGPT");
  };
  return (
    <>
      <body id="body" data-spy="scroll" data-target=".navbar" data-offset="100">
        <header id="header-section">
          <nav class="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
            <div class="container">
              <div class="navbar-brand-wrapper d-flex w-100">
                <img style={{ height: "45px" }} src={img1} alt="" />
              </div>
              <div
                class="collapse navbar-collapse navbar-menu-wrapper"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav align-items-lg-center align-items-start ml-auto">
                  <li class="nav-item">
                    <Link to="/Login" className="nav-link">
                      LogIn
                    </Link>
                    {/* <a class="nav-link" href="#"> */}
                    {/* Login */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    <Link to="/Signin" className="nav-link">
                      SignIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div class="banner">
          <div class="container">
            <h1 class="font-weight-semibold">
              The Best Free Online <br />
              Resume Builder
            </h1>
            <h6 class="font-weight-normal text-muted pb-3">
              Create a professional resume with ease. Our builder features 30+
              templates, step-by-step guidance and endless customizable content
              options.
            </h6>
            <div>
              <button
                class="btn btn-opacity-light mr-1"
                onClick={onclickhandler}
              >
                Create resume
              </button>
            </div>
            <img src={img2} alt="" class="img-fluid" />
          </div>
        </div>
        <div class="content-wrapper">
          <div class="container">
            <section class="features-overview" id="features-section">
              <div class="content-header">
                <h2>How does it works</h2>
                <h6 class="section-subtitle text-muted">
                  Our online resume builder was created by career experts to
                  simplify the writing process and help give you a professional
                  edge.
                </h6>
              </div>
              <div class="d-md-flex justify-content-between">
                <div class="grid-margin d-flex justify-content-start">
                  <div class="features-width">
                    <img
                      src={img3}
                      alt=""
                      class="img-icons"
                      width="176"
                      height="235"
                    />
                    <h5 class="py-3">Pick a template.</h5>
                    <p class="text-muted">
                      Browse 30+ professionally designed resume templates to
                      find the one that speaks to your style and experience.
                    </p>
                  </div>
                </div>
                <div class="grid-margin d-flex justify-content-center">
                  <div class="features-width">
                    <img
                      src={img4}
                      alt=""
                      class="img-icons"
                      width="176"
                      height="235"
                    />
                    <h5 class="py-3">Fill in the blanks using expert tips.</h5>
                    <p class="text-muted">
                      Follow our screen-by-screen prompts as we offer guidance
                      specific to the job to which you’re applying.
                    </p>
                  </div>
                </div>
                <div class="grid-margin d-flex justify-content-end">
                  <div class="features-width">
                    <img
                      src={img5}
                      alt=""
                      class="img-icons"
                      width="176"
                      height="235"
                    />
                    <h5 class="py-3">Personalise your document.</h5>
                    <p class="text-muted">
                      Choose from our prewritten phrases: thousands of
                      customizable bullet points by job title, industry and
                      experience level.
                    </p>
                  </div>
                </div>
                <div class="grid-margin d-flex justify-content-end">
                  <div class="features-width">
                    <img
                      src={img6}
                      alt=""
                      class="img-icons"
                      width="156"
                      height="235"
                    />
                    <h5 class="py-3">And download in PDF or send via email.</h5>
                    <p class="text-muted">
                      Once you've created your resume, you can easily export it
                      in various formats, including PDF and Word. This makes it
                      easy to share your resume with potential employers and to
                      apply for jobs online
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="digital-marketing-service"
              id="digital-marketing-section"
            >
              <div class="row align-items-center">
                <div
                  class="col-12 col-lg-7 grid-margin grid-margin-lg-0"
                  data-aos="fade-right"
                >
                  <h3 class="m-0">
                    We Offer a Full Range of
                    <br />
                    Professinally designed templates!
                  </h3>
                  <div class="col-lg-7 col-xl-6 p-0">
                    <p class="py-4 m-0 text-muted"></p>
                    <p class="font-weight-medium text-muted">
                      Templates that are easy to customize and make your own.
                      Whether you're applying for a job in finance, marketing,
                      or another field, our templates are designed to help you
                      make a great impression.
                    </p>
                  </div>
                </div>
                <div
                  class="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0"
                  data-aos="fade-left"
                >
                  <img
                    src={img7}
                    alt=""
                    class="img-fluid"
                    height="300"
                    width="300"
                  />
                </div>
              </div>
              <div class="row align-items-center">
                <div
                  class="col-12 col-lg-7 text-center flex-item grid-margin"
                  data-aos="fade-right"
                >
                  <img
                    src={img8}
                    alt=""
                    class="img-fluid"
                    height="300"
                    width="300"
                  />
                </div>
                <div
                  class="col-12 col-lg-5 flex-item grid-margin"
                  data-aos="fade-left"
                >
                  <h3 class="m-0">
                    Leading Resume building
                    <br />
                    website for Career Solution.
                  </h3>
                  <div class="col-lg-9 col-xl-8 p-0">
                    <p class="py-4 m-0 text-muted"></p>
                    <p class="pb-2 font-weight-medium text-muted">
                      Our resume builder allows you to easily add sections to
                      highlight your strengths and accomplishments. You can add
                      sections such as education, work experience, skills,
                      certifications, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div
                  class="col-12 col-lg-7 grid-margin grid-margin-lg-0"
                  data-aos="fade-right"
                >
                  <h3 class="m-0">
                    We Offer a Full Range
                    <br />
                    of Security Services!
                  </h3>
                  <div class="col-lg-7 col-xl-6 p-0">
                    <p class="py-4 m-0 text-muted"></p>
                    <p class="font-weight-medium text-muted">
                      We understand the importance of keeping your personal
                      information safe and secure. That's why we offer secure
                      storage for your resume, ensuring that your data is
                      protected at all times.
                    </p>
                  </div>
                </div>
                <div
                  class="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0"
                  data-aos="fade-left"
                >
                  <img
                    src={img9}
                    alt=""
                    class="img-fluid"
                    height="300"
                    width="300"
                  />
                </div>
              </div>
            </section>

            <section class="contact-us" id="contact-section">
              <div class="contact-us-bgimage grid-margin">
                <div class="pb-4">
                  <h4 class="px-3 px-md-0 m-0" data-aos="fade-down">
                    Do you have any questions?
                  </h4>
                  <h4 class="pt-1" data-aos="fade-down">
                    Chat with us.
                  </h4>
                </div>
                <div data-aos="fade-up">
                  {/* <button
                    class="btn btn-rounded btn-outline-danger"
                    onClick={onClicking}
                  >
                    Contact us
                  </button> */}
                  <button
                    type="button"
                    class="btn btn-rounded btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Chat
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class=" modal-dialog modal-xsm ">
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
                        {/* </div> */}
                        <ChatGPT></ChatGPT>
                        <div class="modal-body">
                          {/* <div class="mb-3"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <footer class="border-top">
              <p class="text-center text-muted pt-4">
                Copyright © 2023{" "}
                <a href="#" class="px-1">
                  Resumate
                </a>
                All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </body>
    </>
  );
}
