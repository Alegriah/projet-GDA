import React, { useState, useEffect } from "react";
import axios from 'axios'


function Home() {
  const [data, setData] = useState();
  // useEffect(() => {
  //   async function getApiData() {
  //     const response = await fetch(
  //        "http://localhost:3001/db-demo"
  //     );
  //     const responseData = await response.json();
  //     setData(responseData);
  //   }
  //   getApiData();
  // }, []);

  const fetchData = () => {
    return axios.get("http://localhost:3001/db-demo")
          .then((response) => setData(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (

  
    // <div>
    //   <h1>Google App Engine Demo Application</h1>
    //   <div>Below some hello world data will appear from your API: {console.log(data)}</div>
    //   <div>{data !== undefined && data.map((d) => <div>{d.Label}</div>)}</div>
    // </div>
  );
}

export default Home;