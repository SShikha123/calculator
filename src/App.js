import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const[value,setValue]=useState("");
  const[result,setResult]=useState("Result");
  const OnEnterValueHandler=(e)=>{
    let values=e.target.name;
    let input= value+values ;
    // let newinput=input+" " 
    setValue(input);
    console.log(e.target.name)
  }
  const OnCalculateHandler=()=>{
    const resul=eval(value);
    setResult(resul);
    console.log(resul);
  }
  const OnResetHandler=()=>{
setValue("enter value");
  }

  return (
    <div className="App">
      <div className="results">
        <h2>{result}</h2>
        <h4>{value}</h4>
      </div>
      <div className="buttons">
        <div>
          <button name="7" className="perbutton" onClick={OnEnterValueHandler}>7</button>
          <button name="8" className="perbutton" onClick={OnEnterValueHandler}>8</button>
          <button name="9" className="perbutton" onClick={OnEnterValueHandler}>9</button>
          <button name="/" className="perbutton" onClick={OnEnterValueHandler}>/</button>
        </div>
        <div>
          <button name="4" className="perbutton" onClick={OnEnterValueHandler}>4</button>
          <button name="5" className="perbutton" onClick={OnEnterValueHandler}>5</button>
          <button name="6" className="perbutton" onClick={OnEnterValueHandler}>6</button>
          <button name="*" className="perbutton" onClick={OnEnterValueHandler}>*</button>
        </div>
        <div>
          <button name="1" className="perbutton" onClick={OnEnterValueHandler}>1</button>
          <button name="2" className="perbutton" onClick={OnEnterValueHandler}>2</button>
          <button name="3" className="perbutton" onClick={OnEnterValueHandler}>3</button>
          <button name="-" className="perbutton" onClick={OnEnterValueHandler}>-</button>
        </div>
        <div>
          <button name="." className="perbutton" onClick={OnEnterValueHandler}>.</button>
          <button name="0" className="perbutton" onClick={OnEnterValueHandler}>0</button>
          <button name="=" className="perbutton" onClick={OnCalculateHandler}>=</button>
          <button name ="+" className="perbutton" onClick={OnEnterValueHandler}>+</button>
        </div>
        <div>
          <button className="perbutton" onClick={OnResetHandler}>Reset</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
