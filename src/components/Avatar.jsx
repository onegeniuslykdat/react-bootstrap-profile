import React, { Component } from "react";

let Avatar = (props) => {
  return (
    <>
      <div className="col-12">
        <img
          className="img img-thumbnail myCenterImg"
          src={props.src}
          alt="Profile Pic"
        />
      </div>
      <div className="col-12">
        <h1 className="text-center">Anthony</h1>
      </div>
    </>
  );
};

// extends Component {
//   super() {

//   }
//   render() {
//     return (
//       <React.Fragment>

//       </React.Fragment>
//     );
//   }
// }

export default Avatar;
