import { localInstance } from ".././axios.config.js";

/**
 * Tv shows api
 * @param {*} searchText 
 * @returns tv show records
 */
export async function getShows(searchText) {
  return await GetDataAPI(`/search/shows?q=${searchText}`, searchText);
}

/**
 * 
 * @param {*} id  show'd id
 * @returns  Seasons for show record with id = id
 */

export async function getSeasons(id) {
  return await GetDataAPI(`/shows/${id}/seasons`, id);
}


/**
 * 
 * @param {*} id Season's id
 * @returns Episodes for Season with id = id
 */

export async function getEpisodes(id) {
  return await GetDataAPI(`/seasons/${id}/episodes`, id);
}

/**
 * 
 * @param {* global endpoint} endpoint 
 * @param {* global id} id 
 * @returns 
 */

async function GetDataAPI(endpoint, id) {
  const reqConfig = {};
  if (id != null) reqConfig["id"] = id;
  const res = await localInstance(endpoint, { params: reqConfig });
  return res.data;
}



  
  