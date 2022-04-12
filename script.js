console.log("hei");


const hostCheck = document.querySelector("input#host");
const vaarCheck = document.querySelector("input#vaar");



const laererCheck = document.querySelector("input#laerer");
const rektorCheck = document.querySelector("input#rektor");
const studentCampusCheck = document.querySelector("input#student_campus");


const arrangementCheck = document.querySelector("input#arrangement");
const rapporterevalueringerCheck = document.querySelector("input#rapporterevalueringer");
const soknaderbeslutningerCheck = document.querySelector("input#soknaderbeslutninger");

var products = [];

var dates = [];

const url2 = "https://www.sunroad.no/cms/wp-json/wp/v2/product"; // gir alle products
fetch(url2)
.then(response => response.json())
.then(data => {
  //listTime(data);
  //console.log('Success:', data);
  console.log(data);
  //listPosts(data);

  products = data;
 
  laererCheck.disabled=false;
  studentCampusCheck.disabled=false; // først når product list er loadet, får vi trykke
  rektorCheck.disabled=false;
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
        
        myList += `${post.title.rendered}`;
}
    output.innerHTML = myList;
}



hostCheck.addEventListener('change', listRoller); //ikke bli forvirret av roller, dette er den generelle list med eller uten filter
vaarCheck.addEventListener('change', listRoller);





//er et element, kan ikke si === true
laererCheck.addEventListener('change', listRoller);
rektorCheck.addEventListener('change', listRoller);
studentCampusCheck.addEventListener('change', listRoller);


function listRoller() {


  let filteredList = ""; // Gir [] det samme som "" ved arrays? Det funker jo med "" her


  

  

  if (laererCheck.checked) {
    let filteredList = products.filter(filterByTeacher);
    listPosts(filteredList);
    //console.log(filteredList);
}


if (rektorCheck.checked) {
  let filteredList = products.filter(filterByRektor);
  listPosts(filteredList);
  //console.log(filteredList);
}



if (studentCampusCheck.checked) {
  let filteredList = products.filter(filterByStudentCampus);
  listPosts(filteredList);
}

if (laererCheck.checked && vaarCheck.checked && hostCheck.checked) {
  let filteredList = products.filter(filterByTeacher);
  listPosts(filteredList);
}

if (vaarCheck.checked && hostCheck.checked) {
  let filteredList = products;
  //console.log(filteredList);
} //trenger du denne egt..


//-----------------------------------------------høst og vår hver for seg med rollene------------------------------------------

    if (hostCheck.checked) {

      let filteredListHost = products.filter(filterByHost);
      let filteredList = filteredListHost;
      //listTime (filteredList);

      if (laererCheck.checked && hostCheck.checked) {
        let filteredList = filteredListHost.filter(filterByTeacher);
        listPosts(filteredList);
        //console.log(filteredList);
      }

      if (rektorCheck.checked && hostCheck.checked) {
        let filteredList = filteredListHost.filter(filterByRektor);
        listPosts(filteredList);
        //console.log(filteredList);
      }


      if (studentCampusCheck.checked && hostCheck.checked) {
        let filteredList = filteredListHost.filter(filterByStudentCampus);
        listPosts(filteredList);
        //console.log(filteredList);
      }

    } // slutt if høst checked
    


    if (vaarCheck.checked) {
      let filteredListVaar = products.filter(filterByVaar);
      let filteredList = filteredListVaar;
      //listTime (filteredList);

      if (laererCheck.checked && vaarCheck.checked) {
        let filteredList = filteredListVaar.filter(filterByTeacher);
        listPosts(filteredList);
        //console.log(filteredList);
    }


    if (rektorCheck.checked && vaarCheck.checked) {
      let filteredList = filteredListVaar.filter(filterByRektor);
      listPosts(filteredList);
    }

    if (studentCampusCheck.checked && vaarCheck.checked) {
      let filteredList = filteredListVaar.filter(filterByStudentCampus);
      listPosts(filteredList);
      //console.log(filteredList);
    }

  } //slutt if vår checked

  



 


    //---------------------------------------------------------------------------------------------------------------


  if (laererCheck.checked && rektorCheck.checked) { 
    let filteredList = products.filter(filterByTeacherRektor);
    //console.log(filteredList)
    listPosts(filteredList);
  }

  if (laererCheck.checked && studentCampusCheck.checked) {
    let filteredList = products.filter(filterByTeacherStudentC);
    //console.log(filteredList)
    listPosts(filteredList);
  }

  if (rektorCheck.checked && studentCampusCheck.checked) {
    let filteredList = products.filter(filterByRektorStudentC);
    //console.log(filteredList);
    listPosts(filteredList);
  }

  if (rektorCheck.checked && studentCampusCheck.checked && laererCheck.checked) {
    filteredList = products;
    listPosts(filteredList);
    //console.log(filteredList);
  }




  // Høst + vår + rolle
  if (vaarCheck.checked && hostCheck.checked && laererCheck.checked) {
    let filteredList = products.filter(filterByTeacher);
    listPosts(filteredList);
  }

  if (vaarCheck.checked && hostCheck.checked && rektorCheck.checked) {
    let filteredList = products.filter(filterByRektor);
    listPosts(filteredList);
  }

  if (vaarCheck.checked && hostCheck.checked && studentCampusCheck.checked) {
    let filteredList = products.filter(filterByStudentCampus);
    listPosts(filteredList);
  }


// Høst + flere roller

if (hostCheck.checked && laererCheck.checked && rektorCheck.checked) {
  let listFilteredByHost = products.filter(filterByHost)
  let filteredList = listFilteredByHost.filter(filterByTeacherRektor);
  listPosts(filteredList);
}

if (hostCheck.checked && laererCheck.checked && studentCampusCheck.checked) {
  let listFilteredByHost = products.filter(filterByHost)
  let filteredList = listFilteredByHost.filter(filterByTeacherStudentC);
  listPosts(filteredList);
}

if (hostCheck.checked && rektorCheck.checked && studentCampusCheck.checked) {
  let listFilteredByHost = products.filter(filterByHost)
  let filteredList = listFilteredByHost.filter(filterByRektorStudentC);
  listPosts(filteredList);
}

if (hostCheck.checked && rektorCheck.checked && studentCampusCheck.checked && laererCheck.checked) {
  let filteredList = products.filter(filterByHost)
  listPosts(filteredList);
}


// Vår + flere roller

if (vaarCheck.checked && laererCheck.checked && rektorCheck.checked) {
  let listFilteredByVaar = products.filter(filterByVaar)
  let filteredList = listFilteredByVaar.filter(filterByTeacherRektor);
  listPosts(filteredList);
}

if (vaarCheck.checked && laererCheck.checked && studentCampusCheck.checked) {
  let listFilteredByVaar = products.filter(filterByVaar)
  let filteredList = listFilteredByVaar.filter(filterByTeacherStudentC);
  listPosts(filteredList);
}

if (vaarCheck.checked && rektorCheck.checked && studentCampusCheck.checked) {
  let listFilteredByVaar = products.filter(filterByVaar)
  let filteredList = listFilteredByVaar.filter(filterByRektorStudentC);
  listPosts(filteredList);
}

if (vaarCheck.checked && rektorCheck.checked && studentCampusCheck.checked && laererCheck.checked) {
  let filteredList = products.filter(filterByVaar)
  listPosts(filteredList);
}

// Høst + vår + flere roller

if (vaarCheck.checked && hostCheck.checked && laererCheck.checked && rektorCheck.checked) {
  let filteredList = products.filter(filterByTeacherRektor)
  listPosts(filteredList);
}

if (vaarCheck.checked && hostCheck.checked && laererCheck.checked && studentCampusCheck.checked) {
  let filteredList = products.filter(filterByTeacherStudentC)
  listPosts(filteredList);
}

if (vaarCheck.checked && hostCheck.checked && rektorCheck.checked && studentCampusCheck.checked) {
  let filteredList = products.filter(filterByRektorStudentC)
  listPosts(filteredList);
}

if (vaarCheck.checked && hostCheck.checked && rektorCheck.checked && studentCampusCheck.checked && laererCheck.checked) {
  let filteredList = products;
  listPosts(filteredList);
}















} //hele list roller


// Mangler noe som får listen tom når alle er unchecked





function filterByHost (item) {

  
  for (var ting of products) {
  //console.log(item.date);
  let dateFormat = new Date(item.date);
  //console.log(dateFormat);
  let month = dateFormat.getMonth();
  //console.log(month);
  var hostmaaned = [6,7,8,9,10,11]

    if (hostmaaned.includes(month)) {
      return item.date;
    }
}
}

function filterByVaar (item) {

  
  for (var ting of products) {
  //console.log(item.date);
  let dateFormat = new Date(item.date);
  //console.log(dateFormat);
  let month = dateFormat.getMonth();
  //console.log(month);
  var vaarmaaned = [0,1,2,3,4,5]

    if (vaarmaaned.includes(month)) {
      return item.date;
    }
}
}



function filterByTeacher (item) {
  console.log(item.product_cat); // Lærer ID 20
  return item.product_cat.includes(20);
}


function filterByRektor (item) {
  console.log(item.product_cat); // Rektor ID 25
  return item.product_cat.includes(25);
}


function filterByStudentCampus(item) {
  console.log(item.product_cat); // StudentC ID 24
  return item.product_cat.includes(24);
}

function filterByTeacherRektor (item) {
  console.log(item.product_cat);
  for (var ting of products ) {
    var values = [20, 25]; 
  return item.product_cat.some(i => values.includes(i));
  }
}

function filterByTeacherStudentC (item) {
  console.log(item.product_cat);
  for (var ting of products ) {
    var values = [20, 24]; 
  return item.product_cat.some(i => values.includes(i));
  }
}

function filterByRektorStudentC (item) {
  console.log(item.product_cat);
  for (var ting of products) {
    var values = [25, 24]; 
  return item.product_cat.some(i => values.includes(i));
  }
























arrangementCheck.addEventListener('change', listKat);
rapporterevalueringerCheck.addEventListener('change', listKat);
soknaderbeslutningerCheck.addEventListener('change', listKat);




function listKat() {
  console.log("test"+arrangementCheck.checked);
  if (arrangementCheck.checked) {
      if (rektorCheck.checked) {
      let filteredListArrangement = filteredListRektor.filter(filterByArrangement);
      console.log(filteredListArrangement);
      //listPosts(filteredListTeacher);
      }
      else {
        console.log("poop");
      }
  }

  if (rapporterevalueringerCheck.checked) {
    let filteredListRapporterevalueringer = products.filter(filterByRapporterevalueringer);
    //console.log(filteredListRapporterevalueringer)
    //listPosts(filteredListRektor);
  }

  if (soknaderbeslutningerCheck.checked) {
    let filteredListSoknaderbeslutninger = products.filter(filterBySoknaderbeslutninger);
    //console.log(filteredListSoknaderbeslutninger)
    //listPosts(filteredListSoknaderbeslutninger);
  }

}


function filterByArrangement(item) {
  //console.log(item.product_tag);
  return item.product_tag.includes(27); // Arrangement ID 27
}


function filterByRapporterevalueringer(item) {
  //console.log(item.product_tag);
  return item.product_tag.includes(21); // Rapport evaluering ID 21
}

function filterBySoknaderbeslutninger(item) {
  //console.log(item.product_tag);
  return item.product_tag.includes(26); // Søknader beslutninger ID 26
}

}






