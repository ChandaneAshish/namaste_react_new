import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);

    console.log(this.props.name + "  Constructor called");

    this.state = {
      //count: 0,
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    //console.log(this.props.name + "  component did mount called");
    const data = await fetch("https://api.github.com/users/ChandaneAshish");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + "  Component Did Updatec called");
  }

  componentWillUnmount() {
    console.log(this.props.name + "  Component Will Unamount called");
  }
  render() {
    console.log(this.props.name + "  render called");
    //const { name, location } = this.props;

    const { name, location } = this.state.userInfo;

    //const { count } = this.state;
    return (
      <div className="user-card">
        {/* <h2>Name: Ashish</h2> */}
        {/* NEVER UPDATE STATE VARIABLE DIRECTLY */}
        {/* <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          Increase Count
        </button> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: 9876543210</h3>
      </div>
    );
  }
}

export default UserClass;
