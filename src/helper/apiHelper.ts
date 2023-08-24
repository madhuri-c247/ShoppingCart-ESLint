import axios from "axios";

export default async function fetchData(url: string) {
  return await axios.get(url).then((res) => res.data);
}
