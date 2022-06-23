/**
 * Create a URL to search Jikan's API with Fetch
 *
 * @param query The string to query Jikan for
 * @param numResults The number of results you want to limit the response to
 * @returns A string used in fetch to search Jikan
 */
export function createSearchJikanURL(query, numResults) {
  // Parameter type checking
  if (typeof query != "string") {
    console.error("Bad query parameter, returning");
    return;
  }

  if (typeof numResults != "number") {
    console.error("Bad numResults parameter, returning");
    return;
  }

  // GET request using Fetch
  const apiCall =
    "https://api.jikan.moe/v4/anime?" +
    new URLSearchParams({
      q: query,
      limit: numResults,
    }).toString();

  return apiCall;
}

/**
 * Searches Jikan for a specific anime query
 *
 * @param query The string to query Jikan for
 * @param numResults The number of results you want to limit the response to
 * @returns An array with the anime data retrieved from Jikan
 */
export async function searchJikan(query, numResults) {
  // Parameter type checking
  if (typeof query != "string") {
    console.error("Bad query parameter, returning");
    return;
  }

  if (typeof numResults != "number") {
    console.error("Bad numResults parameter, returning");
    return;
  }

  // GET request using Fetch
  const apiGateway =
    "https://api.jikan.moe/v4/anime?" +
    new URLSearchParams({
      q: query,
      limit: numResults,
    }).toString();

  return fetch(apiGateway)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong with the request to Jikan.");
      }

      return response.json();
    })
    .then((json) => {
      console.log("Request successful", json);
      return json;
    })
    .catch((error) => {
      console.error("Request failed", error);
    });
}
