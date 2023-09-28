import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("run all the time");
  useEffect(() => {
    console.log("run only once. call api");
  }, []);
  // const iRunOnlyOnce =()=>{
  //   console.log('run only once');
  // }
  // useEffect(iRunOnlyOnce, [])
  useEffect(() => {
    console.log("run when keyword changes", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("run when counter changes", keyword);
  }, [counter]);
  useEffect(() => {
    console.log("run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
