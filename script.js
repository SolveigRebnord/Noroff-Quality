console.log("hei");


const hostCheck = document.querySelector("input#host");
const vaarCheck = document.querySelector("input#vaar");



const studentCCheck = document.querySelector("input#studentC");
const studentOCheck = document.querySelector("input#studentO");
const nystudentCheck = document.querySelector("input#nystudent");


const rapporterevalueringerCheck = document.querySelector("input#rapporterevalueringer");
const arrangementerCheck = document.querySelector("input#arrangementer");
const valgdeltakelseCheck = document.querySelector("input#valgdeltakelse");
const kontaktmednareingslivetCheck = document.querySelector("input#kontaktmednaeringslivet");
const viktigedatoerCheck = document.querySelector("input#viktigedatoer");
const velgalleCheck = document.querySelector("input#velgalle");




var products = [];

var dates = [];

const url2 = "https://www.sunroad.no/cms/wp-json/wp/v2/product?per_page=30"; // gir alle products
fetch(url2)
.then(response => response.json())
.then(data => {
  //listTime(data);
  //console.log('Success:', data);
  console.log(data);
  //listPosts(data);

  products = data;
 
  studentCCheck.disabled=false;
  studentOCheck.disabled=false; // først når product list er loadet, får vi trykke
  nystudentCheck.disabled=false;
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
    
        myList += `${post.title.rendered} <br>`;
}
    output.innerHTML = myList;
   
}



hostCheck.addEventListener('change', listRoller); //ikke bli forvirret av roller, dette er den generelle list med eller uten filter
vaarCheck.addEventListener('change', listRoller);





//er et element, kan ikke si === true
studentCCheck.addEventListener('change', listRoller);
studentOCheck.addEventListener('change', listRoller);
nystudentCheck.addEventListener('change', listRoller);



rapporterevalueringerCheck.addEventListener('change', listRoller);
arrangementerCheck.addEventListener('change', listRoller);
valgdeltakelseCheck.addEventListener('change', listRoller);
kontaktmednareingslivetCheck.addEventListener('change', listRoller);
viktigedatoerCheck.addEventListener('change', listRoller);
velgalleCheck.addEventListener('change', listRoller);










function listRoller() {


  let filteredList = ""; // Gir [] det samme som "" ved arrays? Det funker jo med "" her


  

if (studentCCheck.checked) {
    let filteredList = products.filter(filterByStudentC); 
    listPosts(filteredList);
    //console.log(filteredList);
}

if (studentOCheck.checked) {
  let filteredList = products.filter(filterByStudentO); 
  listPosts(filteredList);
  //console.log(filteredList);
}

if (nystudentCheck.checked) {
  let filteredList = products.filter(filterByNystudent); 
  listPosts(filteredList);
  //console.log(filteredList);
}

if (studentCCheck.checked && studentOCheck.checked) {
  let filteredList = products.filter(filterByStudentCStudentO); 
  listPosts(filteredList);
  //console.log(filteredList);
}

if (studentCCheck.checked && nystudentCheck.checked) {
  let filteredList = products.filter(filterByNystudentStudentC); 
  listPosts(filteredList);
  //console.log(filteredList);
}

if (studentOCheck.checked && nystudentCheck.checked) {
  let filteredList = products.filter(filterByNystudentStudentO); 
  listPosts(filteredList);
  //console.log(filteredList);
}


if (studentCCheck.checked && studentOCheck.checked && nystudentCheck.checked) {
  let filteredList = products;
  listPosts(filteredList);
  //console.log(filteredList);
}


// kategorier

if (rapporterevalueringerCheck.checked) {
  let filteredList = products.filter(filterByRapporterevalueringer);
  listPosts(filteredList);
  //onsole.log(filteredList);
}

if (arrangementerCheck.checked) {
  let filteredList = products.filter(filterByArrangementer);
  listPosts(filteredList);
}

if (valgdeltakelseCheck.checked) {
  let filteredList = products.filter(filterByValgdeltakelse);
  listPosts(filteredList);
}

if (kontaktmednareingslivetCheck.checked) {
  let filteredList = products.filter(filterByKontaktmednaeringslivet);
  listPosts(filteredList);
}

if (viktigedatoerCheck.checked) {
  let filteredList = products.filter(filterByViktigedatoer);
  listPosts(filteredList);
}

if (velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}

//kombinasjoner

// må vel ha nye filter her? Tenker på om det er mulig å gi en liste inn som er filtrert alt, men da må jo denne if`en nøstes inn i de forrige, og vi får ikke en frittsåtende if som kan behandle checkene selvstendig og frem og tilbake. Ja mer kode åga nye filtre for alle, men sparer på nøstede koder hvor vi må lage muligheten for alle kombinasjoner



//rapporter/evalueringer ++
if (rapporterevalueringerCheck.checked && arrangementerCheck.checked) {
  let filteredList = products.filter((item) => {
  for (var ting of products) {
    var values = [21, 27]; 
  return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked) {
  let filteredList = products.filter((item) => {
  for (var ting of products) {
    var values = [21, 29]; 
  return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && kontaktmednareingslivetCheck.checked) {
  let filteredList = products.filter((item) => {
  for (var ting of products) {
    var values = [21, 26]; 
  return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [21, 30]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}




//arrangemnet ++

if (arrangementerCheck.checked && valgdeltakelseCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [27, 29]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (arrangementerCheck.checked && kontaktmednareingslivetCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [27, 26]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (arrangementerCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [27, 30]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (arrangementerCheck.checked && velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}









// valg/deltakelse ++

if (valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [29, 26]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (valgdeltakelseCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [29, 30]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}


if (valgdeltakelseCheck.checked && velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}

// kontakt med næringslivet ++

if (kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [26, 30]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}



if (kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}

if (viktigedatoerCheck.checked && velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}







// 3 valg
// rapport ++

if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [21, 27, 29]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}


if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && kontaktmednareingslivetCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [21, 27, 26]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}


if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [21, 27, 30]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}


if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [21, 29, 26]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [21, 30, 29]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [21, 26, 30]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (rapporterevalueringerCheck.checked && kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}


// arrangement


if (arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [27, 29, 26]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (arrangementerCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [27, 30, 26]; 
    return item.product_tag.some(i => values.includes(i));
  }});
  listPosts(filteredList);
}

if (arrangementerCheck.checked && velgalleCheck.checked && viktigedatoerCheck.checked) {
  let filteredList = products.filter(filterByVelgalle);
  listPosts(filteredList);
}















//-----------------------------------------------høst og vår hver for seg med rollene------------------------------------------



if (hostCheck.checked) {

  let filteredListHost = products.filter(filterByHost);
  let filteredList = filteredListHost;
  //listTime (filteredList);


  if (studentCCheck.checked && hostCheck.checked) {
    let filteredList = filteredListHost.filter(filterByStudentC);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (studentOCheck.checked && hostCheck.checked) {
    let filteredList = filteredListHost.filter(filterByStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }


  if (nystudentCheck.checked && hostCheck.checked) {
    let filteredList = filteredListHost.filter(filterByNystudent);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (nystudentCheck.checked && studentCCheck && hostCheck.checked) {
    let filteredList = filteredListHost.filter(filterByNystudentStudentC);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (nystudentCheck.checked && studentOCheck && hostCheck.checked) {
    let filteredList = filteredListHost.filter(filterByNystudentStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (studentCCheck.checked && studentOCheck && hostCheck.checked) {
    let filteredList = filteredListHost.filter(filterByStudentCStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }


} // slutt høst checked------------------------------------------------



if (vaarCheck.checked) {

  let filteredListVaar = products.filter(filterByVaar);
  let filteredList = filteredListVaar;
  //listTime (filteredList);


  if (studentCCheck.checked && vaarCheck.checked) {
    let filteredList = filteredListVaar.filter(filterByStudentC);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (studentOCheck.checked && vaarCheck.checked) {
    let filteredList = filteredListVaar.filter(filterByStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }


  if (nystudentCheck.checked && vaarCheck.checked) {
    let filteredList = filteredListVaar.filter(filterByNystudent);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (nystudentCheck.checked && studentCCheck && vaarCheck.checked) {
    let filteredList = filteredListVaar.filter(filterByNystudentStudentC);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (nystudentCheck.checked && studentOCheck && vaarCheck.checked) {
    let filteredList = filteredListVaar.filter(filterByNystudentStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (studentCCheck.checked && studentOCheck && vaarCheck.checked) {
    let filteredList = filteredListVaar.filter(filterByStudentCStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }

} // slutt vår checked --------------------




  if (studentCCheck.checked && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter(filterByStudentC);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (studentOCheck.checked && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter(filterByStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }


  if (nystudentCheck.checked && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter(filterByNystudent);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (nystudentCheck.checked && studentCCheck && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter(filterByNystudentStudentC);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (nystudentCheck.checked && studentOCheck && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter(filterByNystudentStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (studentCCheck.checked && studentOCheck && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter(filterByStudentCStudentO);
    listPosts(filteredList);
    //console.log(filteredList);
  }

  if (studentCCheck.checked && studentOCheck && nystudentCheck.checked && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products;
    listPosts(filteredList);
    //console.log(filteredList);
  }








} //hele list roller




// Mangler noe som får listen tom når alle er unchecked
// legge inn else på slutten av listRoller eller på hver eneste if?



// Alle filter funksjoner -----------------------------------------------------------------

function filterByVelgalle (item) {
  let filteredList = products;
  valgdeltakelseCheck.checked = true;
  arrangementerCheck.checked = true;
  viktigedatoerCheck.checked = true;
  rapporterevalueringerCheck.checked = true;
  kontaktmednareingslivetCheck.checked = true;
  listPosts(filteredList);
}


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


function filterByStudentC (item) {
  //console.log(item.product_cat);
  return item.product_cat.includes(24);  // StudentC ID 24
}


function filterByStudentO (item) {
  //console.log(item.product_cat);
  return item.product_cat.includes(23);  // StudentO ID 23
}


function filterByNystudent (item) {
  //console.log(item.product_cat);
  return item.product_cat.includes(22);  // Ny student ID 22
}







function filterByRapporterevalueringer (item) {
  //console.log(item.product_tag);
  return item.product_tag.includes(21); // Rapporter/evalueringer ID 21
}

function filterByArrangementer (item) {
  return item.product_tag.includes(27); // arrangementer ID 27
}

function filterByValgdeltakelse (item) {
  return item.product_tag.includes(29); // valg/deltakelse ID 29
}

function filterByKontaktmednaeringslivet (item) {
  return item.product_tag.includes(26); // kontakt med næringslivet ID 26
}

function filterByViktigedatoer (item) {
  return item.product_tag.includes(30); // viktige datoer ID 30
}














function filterByNystudentStudentC (item) {
  //console.log(item.product_cat);
  for (var ting of products) {
    var values = [22, 24]; 
  return item.product_cat.some(i => values.includes(i));
  }
}

function filterByNystudentStudentO (item) {
  //console.log(item.product_cat);
  for (var ting of products) {
    var values = [22, 23]; 
  return item.product_cat.some(i => values.includes(i));
  }
}

function filterByStudentCStudentO (item) {
  //console.log(item.product_cat);
  for (var ting of products) {
    var values = [24, 23]; 
  return item.product_cat.some(i => values.includes(i));
  }
}












//---------------------------------------------------------------------------------------------


/*

if (rektorCheck.checked) {
  let filteredList = products.filter(filterByRektor);
  listPosts(filteredList);
  //console.log(filteredList);
}


if (laererCheck.checked && vaarCheck.checked && hostCheck.checked) {
  let filteredList = products.filter(filterByTeacher);
  listPosts(filteredList);
}

if (vaarCheck.checked && hostCheck.checked) {
  let filteredList = products;
  //console.log(filteredList);
} //trenger du denne egt..




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



*/





