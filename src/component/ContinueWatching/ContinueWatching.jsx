"use client";
import React, { useState, useEffect } from "react";
import "./continueWatching.css";
import Card from "../Card/Card";
import { FaHistory } from "react-icons/fa";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const datal = [];
  const arr = localStorage.getItem("Recent-animes").split(",");
  arr.map((ii) => {
    let obj = {}; // Create a new object for each iteration
    let newObj = {}; // Create a new object for each iteration

    const id = ii;
    obj.id = id;
    obj.poster = localStorage.getItem(`imgUra-${id}`);
    obj.duration = localStorage.getItem(`duran-${id}`);
    obj.rating = localStorage.getItem(`ratUra-${id}`);
    newObj.sub = localStorage.getItem(`subEp-${id}`);
    newObj.dub = localStorage.getItem(`dubEp-${id}`);
    obj.episodes = newObj;
    obj.Secds = JSON.parse(localStorage.getItem("artplayer_settings")).times[
      localStorage.getItem(`newW-${localStorage.getItem(`Rewo-${id}`)}`)
    ];
    obj.name = localStorage.getItem(`nameUra-${id}`);
    obj.episodeId = localStorage.getItem(`Rewo-${id}`);
    obj.epNo = localStorage.getItem(`epNumo-${id}`);
    datal.push(obj); // Add each obj to the datal array
    console.log(obj);
  });
  useEffect(() => {
    console.log(datal);
    setData(datal);
  }, []);
  const cards = data?.map((data, idx) => {
    return (
      <Card key={data.id} data={data} delay={idx * 0.05} keepIt={"true"} />
    );
  });
  return (
    <div className="contiAll">
      <div className="conticFa">
        <div className="contic">
          {" "}
          <FaHistory />
          Continue Watching
        </div>
      </div>

      <div className="midd">
        <div className="crd-col">
          <div className="carg d-flex a-center j-center">{cards}</div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
