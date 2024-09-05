import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9cb27d142dba4ad4a1caa5a44195f0b2",
  },
});
