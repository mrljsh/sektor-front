async function getUsers(path: string, token: string | null) {
  const response = await fetch(
    "https://sektor-api.azurewebsites.net/users" + path,
    {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // READS DATA FROM BODY (READABLESTREAM)
  const reader = response.body?.getReader();
  let data = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array, so we convert it to string
    data += new TextDecoder("utf-8").decode(value);
  }

  // GET PAGINATION VALUES FROM HEADER
  // NEEDS TO MODIFY BACKEND CORS POLICIES TO WORK
  // const paginationHeader = response.headers.get("X-Pagination");

  // if (paginationHeader) {
  //   const paginationObject = JSON.parse(paginationHeader);
  //   const totalPages = paginationObject.totalPages;
  //   console.log(totalPages);
  // } else {
  //   console.log("X-Pagination header is missing");
  // }

  return data;
}

export { getUsers };
