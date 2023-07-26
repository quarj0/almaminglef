import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`Sidebar-container ${toggle ? "w-5.8rem" : ""}`}>
      <div
        className={`position-absolute top-7 start-0 d-flex justify-content-center align-items-center w-10 h-10 bg-glass rounded-circle cursor-pointer ${
          toggle ? "left-5" : ""
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <i
          className={`bi bi-chevron-left text-3xl transition ${
            toggle ? "rotate-180" : ""
          }`}
          data-bs-toggle="tooltip"
          title="Toggle Sidebar"
          data-bs-placement="right"
        ></i>
      </div>
    </div>
  );
}

export default Sidebar