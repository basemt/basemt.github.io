$(document).ready(function() {alert("To search for a slice, use the sliding scale at the top for your preferred price range between $1 and $7. \n \nYou now officially have access to NYC's ultimate pizza slice search engine, happy searching! \n \nI dare you to go try the first slice of pizza that you click on in your time here! Or don't, I really can't force you to do anything you don't want to. Enjoy! - Basem :)"); })


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
      console.log('myRange value: ',myRange.value)
      let allSlices = document.querySelectorAll("#slice");

      // console.log(map(myRange.value, 0, 100, 1, 7))
      let mappedValue = map(myRange.value, 0, 100, 1, 7);
      if (mappedValue === 2.5 || mappedValue === 4 || mappedValue === 3.25 ) {
        jsonData.style.height = '175vh'
        
      } else {
        jsonData.style.height = '85vh'
      }
      
      for(let i=0; i<data.length; i++){
        if (mappedValue >= 4.75 &&  mappedValue <= 7 ) {
          
          if(data[i].Price>= 4.75 && data[i].Price<= 7){
            allSlices[i].style.display="block";
          } else {
            allSlices[i].style.display="none";
          }
        } else if (data[i].Price>mappedValue-.375&&data[i].Price<mappedValue+.375){
          allSlices[i].style.display="block";
          parentHeight = jsonData.offsetHeight-window.innerHeight*.26;
          let randomTop = Math.random()*(parentHeight);
          let randomLeft = Math.random()*(parentWidth);

          allSlices[i].style.top = `${randomTop}px`
          allSlices[i].style.left = `${randomLeft}px`
        }else{
          allSlices[i].style.display="none";
        }
      }
    }
    let rowPosition = 0;
    let columnPosition = 0;
    data.forEach(pizza => {
      if (rowPosition === 6) {
        rowPosition = 0;
        columnPosition++
      }

      if (columnPosition === 9) {
        columnPosition = 0;
      }
    let slice = document.createElement("div")
    slice.innerHTML = `
    <div class='inner-slice slice-1'></div>
    <div class='inner-slice slice-2'></div>
    `
    slice.id = "slice"
    //map(n, min1, max1, min2, max2);
    let sliceHeight = map(pizza.Price, 1, 7, 5, 25);
    let sliceWidth = map(pizza.Price, 1, 7, 4.9, 24.9);
    slice.style.height= `${sliceHeight}vh`
    slice.style.width=`${sliceWidth}vh`
    let randomTop = Math.random()*(parentHeight/8)+ ((parentHeight/8) * columnPosition);
    let randomLeft = Math.random()*(parentWidth/6)+((parentWidth/6) * rowPosition);
    rowPosition++;
    slice.style.top = `${randomTop}px`
    slice.style.left = `${randomLeft}px`
    slice.classList.add("shape", "triangle")
    if(pizza.Price>3.25&&pizza.Price<4.75){
      slice.style.display = "block";
    }else{
      slice.style.display = "none";
    }
    const modalContainer = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")
   slice.addEventListener("click", ()=>{
            sliceData = `
      <p class ='modal-details' id='modal-name'><b>${pizza.Name}</b><br></p>
      <p class ='modal-details' id='modal-style'><b>${pizza.Style} Slice</b><br><br></p>
      <p class ='modal-details' id='modal-consumptiondate'><b>Consumed on ${pizza['Consumption Date']}</b><br></p>
      <p class ='modal-details' id='modal-price'><b>Total: $${pizza.Price.toFixed(2)}</b><br></p>
      `;
      modalContent.innerHTML = sliceData;
      modalContainer.style.visibility = 'visible'
    })

    const modalClose = document.getElementById("modal-close")
    modalClose.addEventListener('click', () => {
      if (modalContainer.style.visibility = 'visible') {
        modalContainer.style.visibility = 'hidden'
      }
    })
 
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

