import { useState } from "react";
import data1 from "../data";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TotalResume() {
  const navigate = useNavigate();

  const edit = useLocation();
  //   const edit = state;
  let data = "";
  //   console.log("this is edit", edit);
  //   console.log("this is particular cv", edit.state.data.cv);
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
      <h1>
        Total resumes of {edit.state.data.name} {edit.state.data.last} are{" "}
        {edit.state.data.allcv.length}
      </h1>
      {edit.state.data.allcv.map((data, index) => {
        return (
          <>
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
          </>
        );
      })}

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
              {/* <div class="mb-3"></div> */}
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
    </>
  );
  //   console.log("cool ", state);
}

export default TotalResume;
