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

addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
    
    generateTriangles(true);
    
    setInterval(() => { 
      generateTriangles();
    }, 6000);
    
  });
  
  const generateTriangles = (firstLoad = false) => {
     for (let i = 0; i < 25; i++) { 
        var triangle = document.createElement('div');
  
        triangle.classList.add('triangle');
        if (firstLoad)
          triangle.style.top = 'calc(75% + ' + randomIntFromInterval(1, 75) + '%)';
        else 
          triangle.style.top = 'calc(100% + ' + randomIntFromInterval(1, 100) + '%)';
        
        triangle.style.left = randomIntFromInterval(1, 100) + '%';
  
        document.getElementById("triangles").appendChild(triangle);
  
        animateTriangle(triangle); 
      }
  };
  
  const animateTriangle = (el) => {
    Velocity(el, { 
      top: '-60px' 
    }, {
      delay: 0,
      duration: randomIntFromInterval(18000, 24000),
      easing: 'swing',
      complete: () => {
        el.remove();
      }
    });
  };
  
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
