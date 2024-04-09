import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FullName from "./Components/FullName";
import ComplexComment from "./Components/ComplexComment";
import Comment from "./Components/Comment";
import FancyBox from "./FancyBox.jsx";

function App() {
  const [count, setCount] = useState(0);

  const invalidJSX = (
    <div>
      <p>It &apos s Javascript</p>
      <p>it &apos s HTML,</p>
    </div>
  );

  const validJSX = (
    <>
      <p>It &apos s Javascript</p>
      <p>It &apos s HTML,</p>
    </>
  );

  const spiderman = {
    name: "Peter Parker",
    age: 17,
    superpowers: ["web-slinging", "wall-crawling"],
  };

  const SpideyJSX = (
    <div>
      <h3> {spiderman.name}</h3>
      <h4>{spiderman.age}</h4>
    </div>
  );

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  <ComplexComment
    author={comment.author}
    date={comment.date}
    text={comment.text}
  />;

// checked, completion receipt for exercise 1 
  return (
    <>
      <FullName first="Dale" last="Lambert" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {invalidJSX}
        {validJSX}
        {SpideyJSX}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />

      <FancyBox>
        <h2> Welcome to React</h2>
        <h3> {spiderman.name}</h3>
        <h4>{spiderman.age}</h4>
        <h5>{spiderman.superpowers.join(", ")}</h5>
      </FancyBox>
    </>
  );
}

export default App;
