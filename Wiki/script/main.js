async function searchTerm() {
  let searchInput = document.getElementById("searchInput");
  let output = document.getElementById("output");
  let queryTerm = searchInput.value;

  //validation
  if (searchInput.value == "") {
    alert("you have to search for a term");
    return false;
  }
  //outputing the query
  let queryContentContainer = document.createElement("div");
  queryContentContainer.innerHTML = `<p> ${searchInput.value}<p>`;
  queryContentContainer.classList.add("query-div");
  output.appendChild(queryContentContainer);
  searchInput.value = "";

  //query for the api
  queryTerm = queryTerm.split(" ").join("_");
  const url =
    "http://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=%27" +
    queryTerm;

  //fetch data
  const query = await fetch(url);
  const data = await query.json();
  console.log(data);
  let result = document.createElement("div");
  result.innerHTML = `  
      <span class='id'>01</span>
    <h3> ${data.query.search[0].title} </h3>
    <p>${data.query.search[0].snippet}</p>
      <br/> <hr/> <br/>
    <span class='id'>02</span>
    <h3> ${data.query.search[1].title} </h3>
    <p>${data.query.search[1].snippet}
  `;
  result.classList.add("result-div");
  output.appendChild(result);
}
