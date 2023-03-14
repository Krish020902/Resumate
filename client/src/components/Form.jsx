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

const Form = () => {
  const [valid, setValid] = useState(false);
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
  const [formData, setFormData] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
  });

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
      {valid && (
        <div>
          <h1 className="text-center">Let's generate your Resume!</h1>
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
          <div className="d-flex justify-content-center gap-3 py-5">
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
          </div>
          {success && <Success />}
        </div>
      )}
    </>
  );
};

export default Form;
