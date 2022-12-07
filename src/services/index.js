const baseURL = "https://ddawalabs1516-production.up.railway.app";

export const get = async (url) => {
  try {
    const response = await fetch(`${baseURL}/${url}`);
    console.log(response)
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};