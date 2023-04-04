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
  
  // Load the JSON file named elastic2.json
  fetch('elastic2.json')
  .then(response => response.json())
  .then(data => {

    // Access the div element
    const celebs = document.getElementById('celebs');
    const btnBouba = document.getElementById('btnBouba');
    const btnKiki = document.getElementById('btnKiki');
    const btnMusic = document.getElementById('btnMusic');
    const btnTv = document.getElementById('btnTv');
    const btnSports = document.getElementById('btnSports');
    const btnPolitics = document.getElementById('btnPolitics');
    const btnMisc = document.getElementById('btnMisc');

    // Function to filter data based on verdict
    function filterData(filter, verdict, sort = 'desc') {
      // Clear the current contents of the div
      celebs.innerHTML = '';
      let filteredData;
      //default 
      filteredData = data;
        shuffle(filteredData);

      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

      // Filter the data based on the verdict
      if(filter==="verdict"){
          filteredData = data.filter(item => item.Verdict.includes(verdict))
        .sort((a, b) => b.Percentage - a.Percentage);
      }else if(filter==="category"){
        filteredData = data.filter(item => item.Category.includes(verdict))
        .sort((a, b) => b.Percentage - a.Percentage);
      }

      // Loop through the filtered data and add each item to the div
      filteredData.forEach(item => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const img = document.createElement('img');
        const a = document.createElement('a');
        // Set the text content and href attributes for the link
        p.textContent = item.Name;
        p2.textContent = item.Verdict;
        p3.textContent = item.Percentage + "%";
        img.src = "img/faces/" + item.Img;
        let currentHref = item.Name.replace(/\s+/g, '');
        a.href = currentHref + '.html'
        // Add the HTML tags to webpage
        a.appendChild(p);
        a.appendChild(img);
        a.appendChild(p2);
        a.appendChild(p3);
        div.appendChild(a)
        celebs.appendChild(div);
      });
    }

    // Add event listeners to the buttons
    btnBouba.addEventListener('click', () => filterData("verdict", 'Bouba', 'asc'));
    btnKiki.addEventListener('click', () => filterData("verdict", 'Kiki', 'asc'));
    btnMusic.addEventListener('click', () => filterData("category", 'Music', 'asc'));
    btnTv.addEventListener('click', () => filterData("category",'Tv/Film', 'asc'));
    btnSports.addEventListener('click', () => filterData("category",'Sports', 'asc'));
    btnPolitics.addEventListener('click', () => filterData("category",'Politics', 'asc'));
    btnMisc.addEventListener('click', () => filterData("category",'Misc.', 'asc'));
    
    // Display all data initially
    filterData('');
  })
  .catch(error => console.error(error));
