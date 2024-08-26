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

// class ApiClient<T> {
//   endpoint: string;
//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   getAll = (config: AxiosRequestConfig) => {
//     return axiosInstance
//       .get<FetchResponse<T>>(this.endpoint, config)
//       .then((res) => res.data);
//   };

//   get = (id: string | number) =>
//     axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
// }

// export default ApiClient;
