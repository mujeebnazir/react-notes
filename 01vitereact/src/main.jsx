/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Hi MyApp</h1>
    </div>
  );
}

// const reactEle = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click here",
// };

const reactEle = React.createElement(
  "a",
  { href: "http:google.com", target: "_blank" },
  "click me to visit google"
);

const anotherElement = (
  // eslint-disable-next-line react/jsx-no-target-blank
  <a href="http://google.com" target="_blank">
    visit
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
