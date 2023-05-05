import React from "react";
import { useState } from "react";
import data from "../data";
// import img from "../image/img2.jpg";
import "../index.css";
export default function Template({ formData, setFormData }) {
  // useEffect(() => console.log(formData));
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  console.log(isActive);
  const handleClick = (e) => {
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  };
  const handleClick1 = (e) => {
    setIsActive(false);
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  };
  const handleClick2 = (e) => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
  };
  const handleClick3 = (e) => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
  };
  return (
    // <div>
    <ul className="template">
      {/* {data.map((item) => { */}
      {/* return ( */}
      <li className="select-template">
        <img
          src={data[0].img}
          width="250"
          height="350"
          className={isActive ? "image1" : ""}

          // style="border-width:2px ;"
        ></img>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleClick();
            setFormData({ ...formData, id: data[0].id });
          }}
        >
          Select
        </button>
      </li>
      <li className="select-template">
        <img
          src={data[1].img}
          width="250"
          height="350"
          className={isActive1 ? "image2" : ""}
          // style="border-width:2px ;"
        ></img>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleClick1();

            setFormData({ ...formData, id: data[1].id });
          }}
        >
          Select
        </button>
      </li>
      <li className="select-template">
        <img
          src={data[2].img}
          width="250"
          height="350"
          className={isActive2 ? "image3" : ""}
          // style="border-width:2px ;"
        ></img>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleClick2();

            setFormData({ ...formData, id: data[2].id });
          }}
        >
          Select
        </button>
      </li>
      <li className="select-template">
        <img
          src={data[3].img}
          width="250"
          height="350"
          className={isActive3 ? "image4" : ""}
          // style="border-width:2px ;"
        ></img>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleClick3();

            setFormData({ ...formData, id: data[3].id });
          }}
        >
          Select
        </button>
      </li>

      {/* ); */}
      {/* })} */}
    </ul>
  );
}
