// import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

import React from "react";
// const About = () => {

//   return (
//     <div>
//       <h1> Hye i am the About Us page</h1>
//       <Profile />
//       <ProfileClass />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent componentDidMount");
  }

  render() {
    // console.log("parent render");
    console.log("in the about us component");
    return (
      <div>
        <h1>this is the about us class based Component</h1>
        <ProfileClass />
      </div>
    );
  }
}

export default About;
