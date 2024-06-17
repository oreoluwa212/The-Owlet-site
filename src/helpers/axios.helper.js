import axios from "axios";

let http = axios.create({
  baseURL: "https://theowletapp.com/server/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url) => {
  try {
    let response = await http.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err; // Rethrow the error to handle it in the calling function
  }
};

export const post = async (url, data) => {
  try {
    let response = await http.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err; // Rethrow the error to handle it in the calling function
  }
};

export const postFormData = async (url, data) => {
  try {
    const response = await http.post(url, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
