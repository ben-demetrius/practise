import React, { useEffect, useState } from "react";
import { get } from "../js/httpRequests.js";

const Get = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const fetchdata = await get();
    setData(fetchdata.items[fetchdata.items.length - 1].firstname);
    console.log("Triggered");
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div div className="get">
      Hello {data}
    </div>
  );
};

export default Get;
