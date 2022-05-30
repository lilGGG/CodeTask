import { localInstance } from ".././axios.config.js";

export async function getShows(searchText) {
  return await GetDataAPI(`/search/shows?q=${searchText}`, searchText);
}

export async function getSeasons(id) {
  return await GetDataAPI(`/shows/${id}/seasons`, id);
}

export async function getEpisodes(id) {
  return await GetDataAPI(`/seasons/${id}/episodes`, id);
}


async function GetDataAPI(endpoint, id) {
  const reqConfig = {};
  if (id != null) reqConfig["id"] = id;
  const res = await localInstance(endpoint, { params: reqConfig });
  return res.data;
}



  
  