import { localInstance } from ".././axios.config.js";
// import React, { useState, useEffect } from 'react';



export async function getSeasons(id) {
  // console.log("GetNerveData");
  return await GetDataAPI(`/shows/${id}/seasons`, id);
  // return await GetDataAPI(`/shows/ + ${id} + /seasons`, id)
}

export async function getEpisodes(id) {
  // console.log("GetNerveData");
  return await GetDataAPI(`/seasons/${id}/episodes`, id);
  // return await GetDataAPI(`/shows/ + ${id} + /seasons`, id)
}


async function GetDataAPI(endpoint, id) {
  const reqConfig = {};
  if (id != null) reqConfig["id"] = id;
  const res = await localInstance(endpoint, { params: reqConfig });
  return res.data;
}



  
  