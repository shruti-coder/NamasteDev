/**
 * 
 * 
 * Header
    logo
    nav Items
Body
    searchbar
    resturantContainer
    resturantCard
        -image
        -name of resturant ,cuisine,star rating,delivery time
footer
    copyright
    links
    address
    contact
 * 
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body} from "./components/Body";

const AppLayout = () => {
  {
    /* //Header 
      //Body 
      //Footer */
  }
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
