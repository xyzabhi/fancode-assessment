import axios from "axios";

//Api call to get all genres
export async function fetchData(
  url: string,
  headers: { Authorization: string }
) {
  try {
    const response = await axios.get(url, {
      headers: headers,
    });

    if (response.status !== 200) {
      throw new Error("Request failed with status " + response.status);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
