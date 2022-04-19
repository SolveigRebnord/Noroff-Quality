console.log("hei");


const hostCheck = document.querySelector("input#host");
const vaarCheck = document.querySelector("input#vaar");



const overordnetACheck = document.querySelector("input#OverordnetA"); //StudentC
const adminCheck = document.querySelector("input#admin");
const fagligACheck = document.querySelector("input#fagligA");


const rapporterevalueringerCheck = document.querySelector("input#rapporterevalueringer");
const arrangementerCheck = document.querySelector("input#arrangementer");
const valgdeltakelseCheck = document.querySelector("input#valgdeltakelse");
const soknaderbeslutningerCheck = document.querySelector("input#soknaderbeslutninger");
const viktigedatoerCheck = document.querySelector("input#viktigedatoer");
const velgalleCheck = document.querySelector("input#velgalle");

const hostListe = document.getElementById("liste");


var products = [];

var dates = [];

const url2 = "https://www.sunroad.no/cms/wp-json/wp/v2/product?per_page=50"; // gir alle products
fetch(url2)
.then(response => response.json())
.then(data => {
  //listTime(data);
  //console.log('Success:', data);
  console.log(data);
  //listPosts(data);

  products = data;
 
  overordnetACheck.disabled=false;
  adminCheck.disabled=false; // først når product list er loadet, får vi trykke
  fagligACheck.disabled=false;
  //console.log(products);
})
.catch((error) => {
  console.error('Error:', error);
});

// display og display none





const outTime = document.querySelector("#time");
function listTime (array) {
    let myTime = [];
    
    for (let item of array) {
        let time = new Date(item.date);
        //console.log(time);
        myTime.push(time);
}
    outTime.innerHTML = myTime;
    console.log(myTime);
}




const output = document.querySelector("#posts");
function listPosts (posts) {

    let myList = "";

    for (let post of posts) {
      //console.log(post);

        if (post.title.rendered) {

              myList += `<div class="divenmin"><h3>${post.title.rendered}</h3>
                        ${(post.content.rendered)?post.content.rendered:'<p>&nbsp;</p>'}
                        ${post.excerpt.rendered}</div>`;
          }

    else {
      console.log("missing element" + post);
    }

  }
    output.innerHTML = myList;
   
}



hostCheck.addEventListener('change', listRoller); //ikke bli forvirret av roller, dette er den generelle list med eller uten filter
vaarCheck.addEventListener('change', listRoller);



//er et element, kan ikke si === true
overordnetACheck.addEventListener('change', listRoller);
adminCheck.addEventListener('change', listRoller);
fagligACheck.addEventListener('change', listRoller);



rapporterevalueringerCheck.addEventListener('change', listRoller);
arrangementerCheck.addEventListener('change', listRoller);
valgdeltakelseCheck.addEventListener('change', listRoller);
soknaderbeslutningerCheck.addEventListener('change', listRoller);
viktigedatoerCheck.addEventListener('change', listRoller);
velgalleCheck.addEventListener('change', listRoller);







// Mangler noe som får listen tom når alle er unchecked

// mangler kategori alene

function listRoller() {

  let katList = [];

  if (rapporterevalueringerCheck.checked) {
    katList.push(21);
  }

  if (arrangementerCheck.checked) {
    katList.push(27);
  }

  if (valgdeltakelseCheck.checked) {
    katList.push(29);
  }

  if (soknaderbeslutningerCheck.checked) {
    katList.push(33);
  }

  if (viktigedatoerCheck.checked) {
    katList.push(30);
  }

  console.log(katList);
  //console.log(products.product_tag);



  let filteredList = products.filter((kat) => {

    console.log(kat.product_tag);
    return katList.includes(kat.product_tag);
  });

console.log(filteredList);
  listPosts(filteredList);
}
  
    
    
