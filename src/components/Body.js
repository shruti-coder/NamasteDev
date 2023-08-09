import { ResturantCard } from "./Resturant";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "../../node_modules/react";

export const Body = () => {
  const [lisResList, setLisResList] = useState(resList);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const json = await data.json();
  //   console.log(json);
  //   setLisResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info);
  // };

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="btnfilter"
          onClick={() => {
            const filter = lisResList.filter(
              (res) => res.data.data.avgRating > 4
            );
            console.log(filter);
            setLisResList(filter);
          }}
        >
          {" "}
          Click to filter{" "}
        </button>
      </div>

      <div className="resturant-container">
        {console.log("listcard :", lisResList)}

        {lisResList.map((resturant) => (
          <ResturantCard key={resturant.data.data.id} resData={resturant} />
        ))}
        {/* <ResturantCard resData={resList[0]} /> */}
      </div>
    </div>
  );
};
