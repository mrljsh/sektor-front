async function fetchData(): Promise<string> {
  const response = await fetch(
    "https://sektor-api.azurewebsites.net/authentication/authenticate",
    {
      method: "POST",
      body: JSON.stringify({ username: "stefanjovicevic", password: "stefan" }),
      headers: { Accept: "*/*", "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const stream = response.body;
  const reader = stream.getReader();
  let result = "";
  const { value } = await reader.read();
  result += new TextDecoder().decode(value);
  return result;
}

export default fetchData;
