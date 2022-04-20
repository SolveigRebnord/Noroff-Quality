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



hostCheck.addEventListener('change', filterAnsatt); //ikke bli forvirret av roller, dette er den generelle list med eller uten filter
vaarCheck.addEventListener('change', filterAnsatt);



//er et element, kan ikke si === true
overordnetACheck.addEventListener('change', filterAnsatt);
adminCheck.addEventListener('change', filterAnsatt);
fagligACheck.addEventListener('change', filterAnsatt);



rapporterevalueringerCheck.addEventListener('change', filterAnsatt);
arrangementerCheck.addEventListener('change', filterAnsatt);
valgdeltakelseCheck.addEventListener('change', filterAnsatt);
soknaderbeslutningerCheck.addEventListener('change', filterAnsatt);
viktigedatoerCheck.addEventListener('change', filterAnsatt);
velgalleCheck.addEventListener('change', filterAnsatt);







// Mangler noe som får listen tom når alle er unchecked

// mangler kategori alene

function filterAnsatt() {

let filteredList = "";
  
  let ansattArray = products.filter((item) => {
    return item.product_cat.includes(25);
  });
  //console.log(ansattArray); // prøvde sette denne inni fetchen, men da klarte den ikke skjønne ansattArray



if (hostCheck.checked) {
  let filteredHostList = filterHost(ansattArray);
  console.log(filteredHostList);
  listPosts(filteredHostList);



  if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
    let filteredRolleList = listRolle(filteredHostList);
    console.log(filteredRolleList);
    listPosts(filteredRolleList);

        if (vaarCheck.checked) {
          let filteredListRolleVaar = listRolle(ansattArray);
          console.log(filteredListRolleVaar);
          listPosts(filteredListRolleVaar);

                if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
                let finalList = filterKat(filteredListRolleVaar);
                console.log(finalList);
                listPosts(finalList);
                }
        }

        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
          let filteredListRolleKat = filterKat(filteredRolleList);
          console.log(filteredListRolleKat);
          listPosts(filteredListRolleKat);

              if (vaarCheck.checked) {
                  let filteredListRolleVaar = listRolle(ansattArray);
                  let finalList = filterKat(filteredListRolleVaar);
                  console.log(filteredListRolleVaar);
                  listPosts(filteredListRolleVaar);
              }
        }
  } 

  
  else if (vaarCheck.checked) {
    let filteredList = ansattArray;
    console.log(filteredList);
    listPosts(filteredList);

          if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
            let filteredListRolle = listRolle(ansattArray);
            console.log(filteredListRolle);
            listPosts(filteredListRolle);

              if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
              let finalList = filterKat(filteredListRolle);
              }
          }

        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
          let filteredListKat = filterKat(ansattArray);
          console.log(filteredListKat);
            listPosts(filteredListKat);


            if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
              let finalList = listRolle(filteredListKat);
              console.log(finalList);
              listPosts(finalList);
            }
          }
  }



  else if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {

    let filteredList = filterKat(filteredHostList);
    console.log(filteredList);
    listPosts(filteredList);

        if (vaarCheck.checked) {
          let filteredListKatVaar = listKat(ansattArray);
          console.log(filteredListKatVaar);
          listPosts(filteredListKatVaar);

              if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
                let finalList = listRolle(filteredListKatVaar);
                console.log(finalList);
                listPosts(finalList);
              } 
        }


        if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
          let filteredListRolle = listRolle(filteredHostList);
          console.log(filteredListRolle);
          listPosts(filteredListRolle);

              if (vaarCheck.checked) {
                let filteredListKatVaar = listKat(ansattArray);
                let finalList = listRolle(filteredListKatVaar);
                console.log(finalList);
                listPosts(finalList);
               }
        }
  }


} //slutt høst



else if (vaarCheck.checked) {
  let filteredListVaar = filterVaar(ansattArray);
  console.log(filteredListVaar);
  listPosts(filteredListVaar);


  if (hostCheck.checked) {
  let filteredList = ansattArray;
  console.log(filteredList);
  listPosts(filteredList);

        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
        let filteredListKat = filterKat(ansattArray);
        console.log(filteredListKat);
        listPosts(filteredListKat);

            if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
              let finalList = listRolle(filteredListKat);
              console.log(finalList);
              listPosts(finalList);
            }
        }

        if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
          let filteredListRolle = listRolle(ansattArray);
          console.log(filteredListRolle);
          listPosts(filteredListRolle);

              if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
              let finalList = filterKat(filteredListRolle);
              console.log(finalList);
              listPosts(finalList);
              }
        }
  }

  else if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
    let filteredListRolle = listRolle(filteredListVaar);
    console.log(filteredListRolle);
    listPosts(filteredListRolle);

        if (hostCheck.checked) {
          let filteredListRolleVaar = listRolle(ansattArray);
          console.log(filteredListRolleVaar);
          listPosts(filteredListRolleVaar);

          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
            let finalList = filterKat(filteredListRolleVaar);
            console.log(finalList);
            listPosts(finalList);
          }
        }


        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
          let filteredListKatVaar = filterKat(filteredListVaar);
          console.log(filteredListKatVaar);
          listPosts(filteredListKatVaar); 

          if (hostCheck.checked) {
            let filteredListRolleVaar = listRolle(ansattArray);
            let finalList = filterKat(filteredListRolleVaar);
            console.log(finalList);
            listPosts(finalList);
          }

        }
  }


  else if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
    let filteredListKat = filterKat(filteredListVaar);
    console.log(filteredListKat);
    listPosts(filteredListKat);

        if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked)  {
          let filteredListKatRolle = listRolle(filteredListKat);
          console.log(filteredListKatRolle);
          listPosts(filteredListKatRolle);

              if (hostCheck.checked) {
                let filteredListKatAll = filterKat(ansattArray);
                let finalList = listRolle(filteredListKatAll);
                console.log(finalList);
                listPosts(finalList);
              }
        }

        if (hostCheck.checked) {
          let filteredListKatAll = filterKat(ansattArray);
          console.log(filteredListKatAll);
          listPosts(filteredListKatAll);

            if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked)  {
              let finalList = listRolle(filteredListKatAll);
              console.log(finalList);
              listPosts(finalList);
            }
        }
  }
}// vår





else if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
  let filteredListRolle = listRolle(ansattArray);
  console.log(filteredListRolle);
  listPosts(filteredListRolle);



  if (vaarCheck.checked) {
  let filteredList = filterVaar(filteredListRolle);
  console.log(filteredList);
  listPosts(filteredList);

        if (hostCheck.checked) {
          let filteredList = filteredListRolle;
          console.log(filteredList);
          listPosts(filteredList);
        
          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
            let filteredList = filterKat(filteredListRolle);
            console.log(filteredList);
            listPosts(filteredList)
          }
        }
  }

  else if (hostCheck.checked) {
    let filteredListRolleHost = filterHost(filteredListRolle);
    console.log(filteredListRolleHost);
    listPosts(filteredListRolleHost);
  
          if (vaarCheck.checked) {
            let filteredList = filteredListRolle;
            console.log(filteredList);
            listPosts(filteredList);
          
            if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
              let filteredList = filterKat(filteredListRolle);
              console.log(filteredList);
              listPosts(filteredList)
            }
          }

          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
            let filteredList = filterKat(filteredListRolleHost);
            console.log(filteredList);
            listPosts(filteredList)

            if (vaarCheck.checked) {
              let filteredList = filterKat(filteredListRolle);
              console.log(filteredList);
              listPosts(filteredList)
            }
          }


    }


    else if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
      let filteredListRolleKat = filterKat(filteredListRolle);
      console.log(filteredListRolleKat);
      listPosts(filteredListRolleKat);

          if (vaarCheck.checked) {
            let filteredList = filterVaar(filteredListRolleKat);
            console.log(filteredList);
            listPosts(filteredList);

            if (hostCheck.checked) {
              let filteredList = filteredListRolleKat;
              console.log(filteredList);
              listPosts(filteredList);
            }
          }

          if (hostCheck.checked) {
            let filteredList = filterHost(filteredListRolleKat);
            console.log(filteredList);
            listPosts(filteredList);

            if (vaarCheck.checked) {
              let filteredList = filteredListRolleKat;
              console.log(filteredList);
              listPosts(filteredList);
            }
          }
    }

} //rolle



else if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || soknaderbeslutningerCheck.checked || viktigedatoerCheck.checked) {
  let filteredListKat = filterKat(ansattArray);
  console.log(filteredListKat);
  listPosts(filteredListKat);



  if (vaarCheck.checked) {
    let filteredList = filterVaar(filteredListKat);
    console.log(filteredList);
    listPosts(filteredList);
  
          if (hostCheck.checked) {
            let filteredList = filteredListKat;
            console.log(filteredList);
            listPosts(filteredList);
            
              if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
                let filteredList = listRolle(filteredListKat);
                console.log(filteredList);
                listPosts(filteredList)
              }
          }
  }

  else if (hostCheck.checked) {
    let filteredListKatHost = filterHost(filteredListKat);
    console.log(filteredListKatHost);
    listPosts(filteredListKatHost);
  
          if (vaarCheck.checked) {
            let filteredList = filteredListKat;
            console.log(filteredList);
            listPosts(filteredList);
          
            if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
              let filteredList = listRolle(filteredListKat);
              console.log(filteredList);
              listPosts(filteredList)
            }
          }

          if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
            let filteredList = listRolle(filteredListKatHost);
            console.log(filteredList);
            listPosts(filteredList)

            if (vaarCheck.checked) {
              let filteredList = listRolle(filteredListKat);
              console.log(filteredList);
              listPosts(filteredList)
            }
          }
    }
  
    else if (overordnetACheck.checked || adminCheck.checked || fagligACheck.checked) {
      let filteredListRolleKat = listRolle(filteredListKat);
      console.log(filteredListRolleKat);
      listPosts(filteredListRolleKat);

          if (vaarCheck.checked) {
            let filteredList = filterVaar(filteredListRolleKat);
            console.log(filteredList);
            listPosts(filteredList);

            if (hostCheck.checked) {
              let filteredList = filteredListRolleKat;
              console.log(filteredList);
              listPosts(filteredList);
            }
          }

          if (hostCheck.checked) {
            let filteredList = filterHost(filteredListRolleKat);
            console.log(filteredList);
            listPosts(filteredList);

            if (vaarCheck.checked) {
              let filteredList = filteredListRolleKat;
              console.log(filteredList);
              listPosts(filteredList);
            }
          }
        
      }
} //kat


} //list roller





function filterHost (array) {

  filteredList = array.filter((item) => {

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
  });
  //console.log(filteredList);
  return filteredList;
  }



  function filterVaar (array) {

    filteredList = array.filter((item) => {

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
});
//console.log(filteredList);
return filteredList;
}
  
  



function listRolle (array) {

  let rolleList = [];

  if (overordnetACheck.checked) {
    rolleList.push(20);
  }

  if (adminCheck.checked) {
    rolleList.push(31);
  }

  if (fagligACheck.checked) {
    rolleList.push(32);
  }

  console.log(rolleList);

  filteredList = array.filter((rolle) => {
     
    return rolle.product_cat.some(i => rolleList.includes(i));
  });
  //console.log(filteredList);
  return filteredList;
}



function filterKat (array) {

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

  //console.log(katList);
  //console.log(products.product_tag);

  filteredList = array.filter((kat) => {

    //console.log(kat.product_tag);
     
    return kat.product_tag.some(i => katList.includes(i));
    //katList.includes(kat.product_tag);
  });

//console.log(filteredList);
  return filteredList;

} //list kat

