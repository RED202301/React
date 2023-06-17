import {useState, useEffect} from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function effectFn(){
    console.log('created :)');
    return byFn;
  }
  useEffect(() => {
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    };
  }, []);
  // 두코드 비교가 필요
  useEffect(function() {
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    };
  }, []);
  useEffect(effectFn, [])
  return <h1>Hello</h1>
}
function App() {
  const [showing, setShowing] =useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (<div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}>{showing ? "Hide"  : "Show"}</button>
  </div>
  );
}
export default App;