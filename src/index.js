import React, { Component } from "react";
import ReactDOM from "react-dom";
import Avatar from "./components/Avatar";
//import Y from "./components/Y.jsx";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Numbers = [1, 2, 3];

class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <Avatar src="https://lh3.googleusercontent.com/a-/AFdZucoI1d1n2y-W6M96pcaL9s0dkLF8trz9EmW0ebcx=s96-c" />
          </div>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
