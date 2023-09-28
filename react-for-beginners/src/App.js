import { useState, useEffect } from "react";

/* function Hello() {
  //component를 없애고 만들고를 반복하기 때문에 showing이 true여서 hello가 생성될 때만 use effect가 실행됨.
  useEffect(() => {
    console.log("created");
    //clean up function. component가 destroyed 될 때 실행됨.
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
} */

function Hello() {
  /*  function byeFn() {
    console.log("destroyed");
  }
  function hiFn() {
    console.log("created");
    return byeFn;
  }
  */
  useEffect(() => {
    console.log("hihi");
    return () => console.log("bye");
  });

  /*  useEffect(function () {
    console.log("hihi");
    return function () {
      console.log("bye");
    };
  });*/
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;
