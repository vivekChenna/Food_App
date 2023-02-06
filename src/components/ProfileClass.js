import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    //   creating a state variable
    console.log("child constructor");
    this.state = {
      userInfo: {
        name: "bablu",
        location: "surat",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vivekChenna");

    const response = await data.json();

    this.setState({
      userInfo: response,
    });

    console.log("child component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will Unmount");
  }

  render() {
    console.log("child render");
    return (
      <>
        <p>{this.state.userInfo.login}</p>
        <p>{this.state.userInfo.type}</p>
        <img src={this.state.userInfo.avatar_url} alt="avatar" />
      </>
    );
  }
}

export default Profile;
