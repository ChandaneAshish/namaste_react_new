import { Component } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent constructor called");
  }

  componentDidMount() {
    //console.log("Parent Component did mount called");
  }

  render() {
    //console.log("Parent render called");
    return (
      <div className="about">
        <h1>About Us</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <h2>This is about u page of react webseries</h2>
        {/* <User name={"Ashish Chandane (functional component)"} /> */}
        <UserClass
          // name={"Ashish Chandane (class component)"}
          name={"First"}
          location={"Pune (class component)"}
        />
        {/* <UserClass
          name={"Second"}
          location={"US"}
        />
        <UserClass
          name={"Third"}
          location={"UK"}
        /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <h2>This is about u page of react webseries</h2>
//       {/* <User name={"Ashish Chandane (functional component)"} /> */}
//       <UserClass
//         name={"Ashish Chandane (class component)"}
//         location={"Pune (class component)"}
//       />
//     </div>
//   );
// };

/* 
Render phase >>
- Parent constructor called
- Parent render called
  -- First  constructor called
  -- First  render called
  -- Second  constructor called
  -- Second  render called
  -- Third  constructor called
  -- Third  render called

>> <DOM manupulation pase> Commit phase
  --First  component did mount called
  --Second  component did mount called
  --Third  component did mount called

- Parent Component did mount called

*/

/***
 * COMPONENT LIFECYCLE
 *
 * ---MOUNTING-----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML  dummy>
 * Component Did Mount
 *      <API call>
 *      <this.setState> -> State variable is updated
 *
 *
 * ---UPDATE----
 *
 * Render(API data)
 *      <HTML (new API data)>
 * Component Did Update
 *
 *   */

export default About;
