import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./layouts/Layout";
class App extends React.Component{
  render(){
    return (
      <MainLayout/>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));