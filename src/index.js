import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// main app for rendering to dom
class Base extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Article />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Mr. Newton</h1>
        <h2>The man who trained thousands</h2>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return <img src="https://pbs.twimg.com/media/DQpuEelXkAAPjqU.jpg" />;
  }
}

class Article extends React.Component {
  render() {
    return (
      <div>
        <blockquote>
          It's nice to be great. But it's far greater to be nice
        </blockquote>
        <a
          href="https://www.runnersworld.com/obituary/legendary-cross-country-coach-joe-newton-dies-at-88"
          target="_blank"
        >
          Read more about his life
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  // Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components, for the props)
  <Base />,
  document.getElementById("root")
);
