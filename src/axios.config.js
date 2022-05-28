import axios from "axios";
import { GATEWAY_API } from "./config";

const localInstance = axios.create({
  baseURL: GATEWAY_API,
  timeout: 120000
});

export { localInstance };
