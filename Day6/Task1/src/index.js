import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const orderedList = React.createElement(
  "h1",
  {},
  "Order-List",
  React.createElement("ol", {}, [
    React.createElement("li", {}, "Ram"),
    React.createElement("li", {}, "jay"),
    React.createElement("li", {}, "shree"),
  ])
);

const unorderedList = React.createElement(
  "h1",
  {},
  "Unorder-List",
  React.createElement("ul", {}, [
    React.createElement("li", {}, "Bhushan"),
    React.createElement("li", {}, "vicky"),
    React.createElement("li", {}, "Om"),
  ])
);
const mainDiv = React.createElement("div", {}, [
  orderedList,
  unorderedList
]);

const inpEle = React.createElement("input", {
  type: "text",
  placeholder: "Enter value",
  id: "inp",
});

var inpval;
var txtBox;
let isChecked = true;
let radioBox = React.createElement("input", {
  id: "inpDiv1",
  type: "checkbox",
  onClick: isCheck,
});

txtBox = React.createElement(
  "p",
  { id: "inpDiv", style: { border: "1px solid black" ,width:"200px",height:"20px",marginTop:"20px"} }
);


function isCheck(inpval) {

  var data = document.getElementById("inp").value;
  var inp_div = document.getElementById("inpDiv");
  console.log('data:', data)
  inp_div.innerText = data;
  if (isChecked == true) {
    isChecked = false;
    inp_div.style.display = "block";
  } else {
    inp_div.style.display = "none";
    isChecked = true;
  }
}

const parDiv = React.createElement("div", {}, [mainDiv, inpEle, radioBox]);
const txtBoxDiv = React.createElement("div", {}, [parDiv, txtBox]);
ReactDOM.render(
  txtBoxDiv, //what
  document.getElementById("root")
);