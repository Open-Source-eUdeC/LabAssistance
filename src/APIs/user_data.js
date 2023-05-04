import axios from 'axios';

const endpoint = "https://api.kenobi.dev/labAssistance";
// const endpoint = "http://127.0.0.1:8000/labAssistance"; // local

export async function postUserData({ data }) {
  let request = {
    method: "POST",
    baseURL: endpoint,
    url: "/user_data",
    data: data
  };

  try {
    const response = await axios(request);
    return response.data;
  
  } catch (error) {
    console.error("Error saving email:", error);
    return null;
  }
}

export async function getUserIpAddress() {
  let request = {
    method: "GET",
    baseURL: 'https://api.ipify.org',
    url: "/",
    params: {
      format: "json"
    }
  };

  try {
    const response = await axios(request);
    return response;
  } catch (err) {
    console.error("Error in /getUserIpAddress", {
      message: err.message,
      error: err
    });

    if (err.message === "The URI is malformed." || err.message === "Network Error") {
      return {
        data: { status: null }
      }
    } else {
      return err.response;
    }
  }
}
