import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement >> React element - JS Object >> HTMLElement(render)

//const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//  JSX - HTML-like or XML-like syntax
//  JSX >> Transpliled the code which JS engine understand with the help of Parcel >> Babel
//  JSX >> Babel transpiles it to React.createElement >> React element - JS Object >> HTMLElement(render)

// const heading = (
//   <h1
//     id="heading"
//     className="head"
//     tabIndex="5">
//     Namste React using JSX
//   </h1>
// );

const Title = () => (
  <h1
    id="heading"
    className="head"
    tabIndex="5">
    Namaste React using JSX
  </h1>
);

const elem = <span>React element</span>;

const title = (
  <h1
    id="heading"
    className="head"
    tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

// React Components
// CLass based components >> OLD
// Functional components >> NEW

//React functional components

const HeadingCompoent2 = () => {
  return <h1 className="heading">Namaste React Functional Conponents</h1>;
};

//Component composition
const HeadingCompoent = () => (
  <div id="container">
    {title}
    {Title()}
    <Title />
    <h1 className="heading">Namaste React Functional Components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompoent />);
