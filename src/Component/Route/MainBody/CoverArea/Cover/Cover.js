import React, { useEffect } from "react";
import "./Cover.css";
import CoverHead from "./CoverHead";
import team from "./Data";

const Cover = () => {
  useEffect(() => {
    Filter();
  });

  function Filter() {
    let search = document.getElementById("search").value.toUpperCase();

    let TeamFind = team.filter((item) => item.name.toUpperCase() == search);

    let service = "";
    let town = "";
    let pri = "";
    for (var i = 0; i < TeamFind.length; i++) {
      service += `<h3>${TeamFind[i].Services}</h3> `;
      town += `<h3>${TeamFind[i].location} </h3>`;
      pri += `<h3>${TeamFind[i].price} </h3>`;
    }

    document.getElementById("service").innerHTML = service;
    document.getElementById("towns").innerHTML = town;
    document.getElementById("price").innerHTML = pri;

    // document.getElementById('heading').innerHTML = heading;
  }

  return (
    <div className="setCoverMain">
      <CoverHead title={'Coverage Area'} home={"Home"} Pkg={'Packages'} />

      <br />
      <div id="setCover">
        <h1>Search City Name....</h1>
        <input
          type="text"
          name=""
          autoComplete="off"
          id="search"
          placeholder="Searching by city name...."
          onChange={Filter}
        />
      </div>

      <table id="tableCover" className="container">
        <thead>
          <tr>
            <th>Town</th>
            <th>Services</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span id="towns"></span>
            </td>
            <td>
              <span id="service"></span>
            </td>
            <td>
              <span id="price"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cover;
