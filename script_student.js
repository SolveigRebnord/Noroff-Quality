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

const hostListe = document.getElementById("liste");


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








// Mangler noe som får listen tom når alle er unchecked

// mangler kategori alene

function listRoller() {


  let filteredList = ""; // Gir [] det samme som "" ved arrays? Det funker jo med "" her


  if (rapporterevalueringerCheck.checked) {
    let filteredList = products.filter(filterByKatInfunction);
      listPosts(filteredList);
  }

  if (arrangementerCheck.checked) {
    let filteredList = products.filter(filterByKatInfunction);
      listPosts(filteredList);
  }

  if (valgdeltakelseCheck.checked) {
    let filteredList = products.filter(filterByKatInfunction);
      listPosts(filteredList);
  }

  if (kontaktmednareingslivetCheck.checked) {
    let filteredList = products.filter(filterByKatInfunction);
      listPosts(filteredList);
  }

  if (viktigedatoerCheck.checked) {
    let filteredList = products.filter(filterByKatInfunction);
      listPosts(filteredList);
  }
  
  if (velgalleCheck.checked) {
    let filteredList = products.filter(filterByKatInfunction);
      listPosts(filteredList);
  }



  if (studentCCheck.checked) {
    let filteredList = products.filter((item) => {
      return item.product_cat.includes(24);
      });

      if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
        let finalList = filteredList.filter(filterByKatInfunction);
      
      listPosts(finalList);
      //console.log(finalList);
      }

      else {listPosts(filteredList);}
  }



  if (studentOCheck.checked) {
    let filteredList = products.filter((item) => {
      return item.product_cat.includes(23);
      });

      if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
        let finalList = filteredList.filter(filterByKatInfunction);
      
      listPosts(finalList);
      //console.log(finalList);
      }

      else {listPosts(filteredList);}
  }


  if (nystudentCheck.checked) {
    let filteredList = products.filter((item) => {
      return item.product_cat.includes(22);
      });

      if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
        let finalList = filteredList.filter(filterByKatInfunction);
      
      listPosts(finalList);
      //console.log(finalList);
      }

      else {listPosts(filteredList);}
  }





  if (hostCheck.checked) {

    let filteredListHost = products.filter(filterByHost);
    console.log(filteredListHost);
    let filteredList = filteredListHost;


    if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
      let finalList = filteredList.filter(filterByKatInfunction);
    
    listPosts(finalList);
    //console.log(finalList);
    }
  
    else {listPosts(filteredList);}


  
  if (studentCCheck.checked && hostCheck.checked) {
      let filteredList = filteredListHost.filter((item) => {
        for (var ting of products) {
        return item.product_cat.includes(24);
        }});

          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
            let finalList = filteredList.filter(filterByKatInfunction);
          
          listPosts(finalList);
          //console.log(finalList);
          }
  
        else {listPosts(filteredList);}
        
  }

    
    if (studentOCheck.checked && hostCheck.checked) {
      let filteredList = filteredListHost.filter((item) => {
        for (var ting of products) {
        return item.product_cat.includes(23);
        }});
     
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
      }
  
    
  
    if (nystudentCheck.checked && hostCheck.checked) {
      let filteredList = filteredListHost.filter((item) => {
        for (var ting of products) {
        return item.product_cat.includes(22);
        }});
        
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
      }
    

      if (nystudentCheck.checked && studentCCheck.checked && hostCheck.checked) {
        let filteredList = filteredListHost.filter((item) => {
          for (var ting of products) {
            var values = [24, 22]; 
          return item.product_cat.some(i => values.includes(i));
          }});
       
          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
            let finalList = filteredList.filter(filterByKatInfunction);
          
          listPosts(finalList);
          //console.log(finalList);
          }
  
        else {listPosts(filteredList);}
        }
      
    
    
  
    if (nystudentCheck.checked && studentOCheck.checked && hostCheck.checked) {
      let filteredList = filteredListHost.filter((item) => {
        for (var ting of products) {
          var values = [23, 22]; 
        return item.product_cat.some(i => values.includes(i));
        }});
     
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
      }
   
    
  
    if (studentCCheck.checked && studentOCheck.checked && hostCheck.checked) {
        let filteredList = filteredListHost.filter((item) => {
          for (var ting of products) {
            var values = [24, 23]; 
          return item.product_cat.some(i => values.includes(i));
          }});
        
          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
            let finalList = filteredList.filter(filterByKatInfunction);
          
          listPosts(finalList);
          //console.log(finalList);
          }
  
        else {listPosts(filteredList);}
        }


  if (studentCCheck.checked && studentOCheck.checked && nystudentCheck.checked && hostCheck.checked) {
        let filteredList = filteredListHost;
       
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
        }

   }
      
  // slutt høst checked------------------------------------------------



  if (vaarCheck.checked) {

    let filteredListVaar = products.filter(filterByVaar);
    let filteredList = filteredListVaar;
    //listTime (filteredList);


    if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
      let finalList = filteredList.filter(filterByKatInfunction);
    
    listPosts(finalList);
    //console.log(finalList);
    }

  else {listPosts(filteredList);}
  
  
    if (studentCCheck.checked && vaarCheck.checked) {
      let filteredList = filteredListVaar.filter((item) => {
        for (var ting of products) {
        return item.product_cat.includes(24);
        }});
       
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
  }
  
    if (studentOCheck.checked && vaarCheck.checked) {
      let filteredList = filteredListVaar.filter((item) => {
        for (var ting of products) {
        return item.product_cat.includes(23);
        }});
      
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
      }
  
  
    if (nystudentCheck.checked && vaarCheck.checked) {
      let filteredList = filteredListVaar.filter((item) => {
        for (var ting of products) {
        return item.product_cat.includes(22);
        }});
        
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
      }
  
    if (nystudentCheck.checked && studentCCheck && vaarCheck.checked) {
      let filteredList = filteredListVaar.filter((item) => {
        for (var ting of products) {
          var values = [24, 22]; 
        return item.product_cat.some(i => values.includes(i));
        }});
    
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
      }
  
    if (nystudentCheck.checked && studentOCheck && vaarCheck.checked) {
      let filteredList = filteredListVaar.filter((item) => {
        for (var ting of products) {
          var values = [23, 22]; 
        return item.product_cat.some(i => values.includes(i));
        }});
 
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
      }



    if (studentCCheck.checked && studentOCheck && vaarCheck.checked) {
      let filteredList = filteredListVaar.filter((item) => {
        for (var ting of products) {
          var values = [24, 23]; 
        return item.product_cat.some(i => values.includes(i));
        }});
  
          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
            let finalList = filteredList.filter(filterByKatInfunction);
          
          listPosts(finalList);
          //console.log(finalList);
          }
  
        else {listPosts(filteredList);}
      }



      if (studentCCheck.checked && studentOCheck.checked && nystudentCheck.checked && vaarCheck.checked) {
        let filteredList = filteredListVaar;

          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
            let finalList = filteredList.filter(filterByKatInfunction);
          
          listPosts(finalList);
          //console.log(finalList);
          }
  
        else {listPosts(filteredList);}
        }
  
  } // slutt vår checked --------------------





  if (studentCCheck.checked && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter((item) => {
      for (var ting of products) {
      return item.product_cat.includes(24);
      }});
  
      if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
        let finalList = filteredList.filter(filterByKatInfunction);
      
      listPosts(finalList);
      //console.log(finalList);
      }

    else {listPosts(filteredList);}
  }


  if (studentOCheck.checked && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter((item) => {
      for (var ting of products) {
        return item.product_cat.includes(23);
        }});

          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
            let finalList = filteredList.filter(filterByKatInfunction);
          
          listPosts(finalList);
          //console.log(finalList);
          }
  
        else {listPosts(filteredList);}
  }


  if (nystudentCheck.checked && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter((item) => {
      for (var ting of products) {
        return item.product_cat.includes(22);
        }});
  
        if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
          let finalList = filteredList.filter(filterByKatInfunction);
        
        listPosts(finalList);
        //console.log(finalList);
        }

      else {listPosts(filteredList);}
  }

  if (nystudentCheck.checked && studentCCheck && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter((item) => {
    for (var ting of products) {
      var values = [22, 24]; 
    return item.product_cat.some(i => values.includes(i));
    }});
 
    if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
      let finalList = filteredList.filter(filterByKatInfunction);
    
    listPosts(finalList);
    //console.log(finalList);
    }

  else {listPosts(filteredList);}
  }

  if (nystudentCheck.checked && studentOCheck && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter((item) => {
      for (var ting of products) {
        var values = [22, 23]; 
      return item.product_cat.some(i => values.includes(i));
      }});

      if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
        let finalList = filteredList.filter(filterByKatInfunction);
      
      listPosts(finalList);
      //console.log(finalList);
      }

    else {listPosts(filteredList);}
  }

  if (studentCCheck.checked && studentOCheck && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products.filter((item) => {
      for (var ting of products) {
        var values = [23, 24]; 
      return item.product_cat.some(i => values.includes(i));
      }});

      if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
        let finalList = filteredList.filter(filterByKatInfunction);
      
      listPosts(finalList);
      //console.log(finalList);
      }

    else {listPosts(filteredList);}
  }



  if (studentCCheck.checked && studentOCheck && nystudentCheck.checked && vaarCheck.checked && hostCheck.checked) {
    let filteredList = products;

          if (rapporterevalueringerCheck.checked || arrangementerCheck.checked || valgdeltakelseCheck.checked || kontaktmednareingslivetCheck.checked || viktigedatoerCheck.checked || velgalleCheck.checked) {
            let finalList = filteredList.filter(filterByKatInfunction);
          
          listPosts(finalList);
          //console.log(finalList);
          }
  
        else {listPosts(filteredList);}
  }







} //hele list roller








 // må vel ha nye filter her? Tenker på om det er mulig å gi en liste inn som er filtrert alt, men da må jo denne if`en nøstes inn i de forrige, og vi får ikke en frittsåtende if som kan behandle checkene selvstendig og frem og tilbake. Ja mer kode åga nye filtre for alle, men sparer på nøstede koder hvor vi må lage muligheten for alle kombinasjoner
    
    
function filterByKatInfunction (item) {

  // kategorier-----------------------------------------------------------------------------------------------------------
  
// Alle

if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
  return products;
  //console.log(filteredList);
}



   // 5 valg 
  
   //12345
   if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
    return products;
  }


//12346
  
if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
  return products.filter(filterByVelgalle);
  };


//12356
if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
  return products.filter(filterByVelgalle);
}

//12456
if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
  return products.filter(filterByVelgalle);
}


//13456
if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
  return products.filter(filterByVelgalle);
}


//23456
if (arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
  return products.filter(filterByVelgalle);
}




// 4 valg
  
  
  //1234
  if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked) {
    for (var ting of products) {
        var values = [21, 27, 29, 26]; 
      return item.product_tag.some(i => values.includes(i));
    };
  }
  
  //1235
  if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked && viktigedatoerCheck.checked) {
    for (var ting of products) {
        var values = [21, 27, 29, 30]; 
      return item.product_tag.some(i => values.includes(i));
    };
  }
  
  //1236
  if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }
  

   //1245
   if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
    for (var ting of products) {
        var values = [21, 27, 26, 30]; 
      return item.product_tag.some(i => values.includes(i));
    };
  }

   //1246
   if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

   //1256
   if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

    //1345
    if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
      for (var ting of products) {
          var values = [21, 29, 26, 30]; 
        return item.product_tag.some(i => values.includes(i));
      };
    }

     //1346
   if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

   //1356
   if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

   //1456
   if (rapporterevalueringerCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

    //2345
    if (arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
      for (var ting of products) {
          var values = [27, 29, 26, 30]; 
        return item.product_tag.some(i => values.includes(i));
      };
    }

    //2346
    if (arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
    }

    //2356
    if (arrangementerCheck.checked && valgdeltakelseCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
      return products.filter(filterByVelgalle);
    }

     //2456
     if (arrangementerCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
      return products.filter(filterByVelgalle);
    }

     //3456
     if (valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
      return products.filter(filterByVelgalle);
    }


// 3 valg

//123
  if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && valgdeltakelseCheck.checked) {
    for (var ting of products) {
        var values = [21, 27, 29]; 
      return item.product_tag.some(i => values.includes(i));
    };
}

//124
if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && kontaktmednareingslivetCheck.checked) {
  for (var ting of products) {
      var values = [21, 27, 26]; 
    return item.product_tag.some(i => values.includes(i));
  };
}

//125
if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && viktigedatoerCheck.checked) {
  for (var ting of products) {
      var values = [21, 27, 30]; 
    return item.product_tag.some(i => values.includes(i));
  };
}

 //126
 if (rapporterevalueringerCheck.checked && arrangementerCheck.checked && velgalleCheck.checked) {
  return products.filter(filterByVelgalle);
}

//134
if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked) {
  for (var ting of products) {
      var values = [21, 29, 26]; 
    return item.product_tag.some(i => values.includes(i));
  };
}

//135
if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && viktigedatoerCheck.checked) {
for (var ting of products) {
    var values = [21, 29, 30]; 
  return item.product_tag.some(i => values.includes(i));
};
}

//136
if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked && velgalleCheck.checked) {
  return products.filter(filterByVelgalle);
}

//145
if (rapporterevalueringerCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
  for (var ting of products) {
      var values = [21, 26, 30]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //146
  if (rapporterevalueringerCheck.checked && kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

   //156
   if (rapporterevalueringerCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }


//234
if (arrangementerCheck.checked && valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked) {
  for (var ting of products) {
      var values = [27, 29, 26]; 
    return item.product_tag.some(i => values.includes(i));
  };
}

//235
if (arrangementerCheck.checked && valgdeltakelseCheck.checked && viktigedatoerCheck.checked) {
for (var ting of products) {
    var values = [27, 29, 30]; 
  return item.product_tag.some(i => values.includes(i));
};
}

//236
if (arrangementerCheck.checked && valgdeltakelseCheck.checked && velgalleCheck.checked) {
  return products.filter(filterByVelgalle);
}

//245
if (arrangementerCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
  for (var ting of products) {
      var values = [27, 26, 30]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //246
  if (arrangementerCheck.checked && kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

   //256
   if (arrangementerCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

  //345
  if (valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
  for (var ting of products) {
      var values = [29, 26, 30]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //346
  if (valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

    //456
    if (kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
      return products.filter(filterByVelgalle);
    }

    //356
  if (valgdeltakelseCheck.checked && viktigedatoerCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

// 2 valg

//12
if (rapporterevalueringerCheck.checked && arrangementerCheck.checked) {
  for (var ting of products) {
      var values = [21, 27]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //13
if (rapporterevalueringerCheck.checked && valgdeltakelseCheck.checked) {
  for (var ting of products) {
      var values = [21, 29]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //14
if (rapporterevalueringerCheck.checked && kontaktmednareingslivetCheck.checked) {
  for (var ting of products) {
      var values = [21, 26]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //15
if (rapporterevalueringerCheck.checked && viktigedatoerCheck.checked) {
  for (var ting of products) {
      var values = [21, 30]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //16
  if (rapporterevalueringerCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

    //23
if (arrangementerCheck.checked && valgdeltakelseCheck.checked) {
  for (var ting of products) {
      var values = [27, 29]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //24
if (arrangementerCheck.checked && kontaktmednareingslivetCheck.checked) {
  for (var ting of products) {
      var values = [27, 26]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //25
if (arrangementerCheck.checked && viktigedatoerCheck.checked) {
  for (var ting of products) {
      var values = [27, 30]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //26
  if (arrangementerCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

    
  //34
if (valgdeltakelseCheck.checked && kontaktmednareingslivetCheck.checked) {
  for (var ting of products) {
      var values = [29, 26]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //35
if (valgdeltakelseCheck.checked && viktigedatoerCheck.checked) {
  for (var ting of products) {
      var values = [29, 30]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //36
  if (valgdeltakelseCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

  //45
if (kontaktmednareingslivetCheck.checked && viktigedatoerCheck.checked) {
  for (var ting of products) {
      var values = [26, 30]; 
    return item.product_tag.some(i => values.includes(i));
  };
  }
  
  //46
  if (kontaktmednareingslivetCheck.checked && velgalleCheck.checked) {
    return products.filter(filterByVelgalle);
  }

    //56
    if (viktigedatoerCheck.checked && velgalleCheck.checked) {
      return products.filter(filterByVelgalle);
    }


    // 1 valg

     //1
  if (rapporterevalueringerCheck.checked) {
    return item.product_tag.includes(21);
  }

  //2
  if (arrangementerCheck.checked) {
    return item.product_tag.includes(27);
  }

  //3
  if (valgdeltakelseCheck.checked) {
    return item.product_tag.includes(29);
  }

  //4
  if (kontaktmednareingslivetCheck.checked) {
    return item.product_tag.includes(26);
  }

  //5
  if (viktigedatoerCheck.checked) {
    return item.product_tag.includes(30);
  }

    //6
    if (velgalleCheck.checked) {
      return products.filter(filterByVelgalle);
    }

  
} // slutt listfunctoinkat
  //-----------------------------------------------------------------------------------------------------------------------------
  
  
  



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
