import { localInstance } from ".././axios.config.js";
// import React, { useState, useEffect } from 'react';



export async function getSeasons(id) {
  // console.log("GetNerveData");
  return await GetDataAPI(`/shows/${id}/seasons`, id);
  // return await GetDataAPI(`/shows/ + ${id} + /seasons`, id)
}


async function GetDataAPI(endpoint, id) {
  const reqConfig = {};
  if (id != null) reqConfig["id"] = id;
  const res = await localInstance(endpoint, { params: reqConfig });
  return res.data;
}




// export async function getSeasons(id) {
//     const [error, setError] = useState(null);
//     const [seas, setSeas] = useState([]);

//     const url = `https://api.tvmaze.com/shows/${id}/seasons}`
    
//     // fetch("https://mocki.io/v1/a46cda09-2fab-4ba9-a278-9493b9ded3a8")
//     fetch(url)
//     .then(res => res.json())
//     .then(
//       (result) => {
//         // setIsLoaded(true);
//         setSeas(result);
//       },
//       (error) => {
//         // setIsLoaded(true);
//         setError(error);
//       }

//     // return await .get(`users/?email=${email}`);
//   },


  
  