// // const heading = React.createElement(
// //   "h1",
// //   {id: "heading",
// //   class:"cool"
// // },
// //   "Hello React buddies"
// // );
// /*
//         React.createElement is used to create a javascript object and it is react element
//         which is used to render the js object over the browser screen and the attribut id heading is come under its child as
//         it is used as a props.
//         */
// /**
//  *
//  * ReactElement(object) ==>HTML(Browser Understands)
//  * Render usd to convert object into Html Dom Tag
//  *
//  *
//  * */
// // console.log(heading); //object

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);

// // This render tag is used to take object and convert it into h1 tag and pt it over DOM browser screen

// // Through js
// // const heading1 = document.createElement("h1");
// // heading1.innerHTML="hello through js";
// // const root1=document.getElementById("root");
// // root1.appendChild(heading1);

// /**
//  *
//  * <div id="parent">
//  *      <div id="child">
//  *          <h1>I am h1 tag</h1>
//  *          <h2>I am h2 tag</h2>
//  *      </div>
//  *      <div id="child2">
//  *          <h1>I am h1 tag</h1>
//  *          <h2>I am h2 tag</h2>
//  *      </div>
//  */

// // const parent=React.createElement(
// //     "div",
// //     {id:"parent"},
// //    [ React.createElement(
// //     "div",
// //     {id:'child'},
// // [
// //     React.createElement("h1",{},"I am h1 tag"),
// //     React.createElement("h2",{},"I am h2 tag")
// // ]
// //    )],
// // [
// //     React.createElement(
// //         "div",
// //         {id:'child2'},
// //     [
// //         React.createElement("h1",{},"I am h1 tag"),
// //         React.createElement("h2",{},"I am h2 tag")
// //     ]
// // )],
// // );
// // console.log(parent);
// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(parent);

// /***
//  * React is a librarry it work over small portion of code over header,footer or over main section
//  * React is bearbone minimal js library
//  * developed by facebook devloper
//  * ReactDom createRoot is responsible to create root assign root in react
//  * framework comes with alots of fullfledge legit
//  */

//  import React from "react";
//  import ReactDOM from "react-dom/client";
//  // const heading=React.createElement("h1" , {id:"heading"} , "Hello Js");
//  const Title = () =>  {return <h1>Hello Js</h1>};
//  const num=1200;
//  const abc=(
//      <p>hello</p>
//  );
//  // using curely braces you can use javascript here
//  const Title1=()=>
//  {
//      return (
//      <div>
//          <h1>{num}</h1>
//          {abc}
//      <Title />
//      <h1>Hello Title</h1>
//      </div>
//      )
//  };
 
//  const Title2=()=>
//   (
//      <div>
//      <Title />
//      <h1>Hello Title</h1>
//      </div>
//      );
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(<Title1 />)
//  // React Element
//  // const jsxHeading = (
//  //     //react fragment
//  //     <>
//  //     <h1 id="heading">Hello Hees</h1>
//  //     <h2>Hii</h2>
//  //     </>
//  // );
//  // root.render(jsxHeading);
 