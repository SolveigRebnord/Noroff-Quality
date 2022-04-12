


const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "index.html"; }

const url100 = `https://www.sunroad.no/cms/wp-json/wp/v2/product/${id}`;
fetch(url100)
.then(response => response.json())
.then(data => {
  //console.log('Success:', data);
  displayPost(data);
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});



const output1 = document.querySelector("#post");
function displayPost (data) {
  
  const title = data.title.rendered;
 
  const link = data.link;
  let content = `
  <h1>${title}</h1>
  `;
  output1.innerHTML = content;
  document.title = title;
}







