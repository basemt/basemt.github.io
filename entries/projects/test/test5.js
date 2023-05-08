$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#cursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
});

let jsonData = document.getElementById("json-data");
let parentHeight = jsonData.offsetHeight-window.innerHeight*.26;
let parentWidth = jsonData.offsetWidth-window.innerWidth*.12;

// define our variables
  let toggleMenu = document.querySelector(".mobile-menu");
  let headerStatus = document.querySelector(".header");
  
  // when user clicks on "menu", open and close the mobile navigation
  toggleMenu.addEventListener( "click", () => {
      if (headerStatus.classList.contains("open")) {
        headerStatus.classList.remove("open");
      } else {
        headerStatus.classList.add("open");
      }
    },
    false
  );

  

//the JSON data
fetch('pizza_data.json')
  .then(response => response.json())
  .then(data => {
    //range input
    let myRange = document.querySelector("#myRange");
    myRange.onchange= function (){
      let allSlices = document.querySelectorAll("#slice");

      // console.log(map(myRange.value, 0, 100, 1, 7))
      let mappedValue = map(myRange.value, 0, 100, 1, 7);
      for(let i=0; i<data.length; i++){
        if(data[i].Price>mappedValue-.75&&data[i].Price<mappedValue+.75){
          allSlices[i].style.display="block";
        }else{
          allSlices[i].style.display="none";
        }
      }
    }
    
    data.forEach(pizza => {

    let slice = document.createElement("div")
    slice.id = "slice"
    //map(n, min1, max1, min2, max2);
    let sliceHeight = map(pizza.Price, 1, 7, 5, 25);
    let sliceWidth = map(pizza.Price, 1, 7, 4.9, 24.9);
    slice.style.height= `${sliceHeight}vh`
    slice.style.width=`${sliceWidth}vh`
    let randomTop = Math.random()*(parentHeight-0)+0;
    let randomLeft = Math.random()*(parentWidth-0)+0;
    slice.style.top = `${randomTop}px`
    slice.style.left = `${randomLeft}px`
    slice.classList.add("shape", "triangle")
    if(pizza.Price>3.25&&pizza.Price<4.75){
      slice.style.display = "block";
    }else{
      slice.style.display = "none";
    }

    slice.addEventListener("click", ()=>{
            jsonData = `
      <b>Name:</b> ${pizza.Name}<br>
      <b>Latitude:</b> ${pizza.Latitude}<br>
      <b>Longitude:</b> ${pizza.Longitude}<br>
      <b>Consumption Date:</b> ${pizza['Consumption Date']}<br>
      <b>Year:</b> ${pizza.Year}<br>
      <b>Price:</b> $${pizza.Price.toFixed(2)}<br>
      <b>Style:</b> ${pizza.Style}<br><br>
      `;
    document.getElementById("modal").innerHTML = jsonData;
    })
    
    // console.log(pizza.Price)
    jsonData.append(slice)


    });


  })
  .catch(error => console.log(error));

//map and constrain function from p5
let map = function(n, start1, stop1, start2, stop2, withinBounds) {
  const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
};
let constrain = function(n, low, high) {
  return Math.max(Math.min(n, high), low);
};

