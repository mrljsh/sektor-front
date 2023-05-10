async function postAuth(values: {
  username: string;
  password: string;
}): Promise<string> {
  const response = await fetch(
    "https://sektor-api.azurewebsites.net/authentication/authenticate",
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: { Accept: "*/*", "Content-Type": "application/json" },
    }
  );

  if (response.status === 401) {
    throw new Error("Wrong username/password!");
  }

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

export default postAuth;
