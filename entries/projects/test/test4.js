// Fetch the JSON data
fetch("pizza_data.json")
  .then((response) => response.json())
  .then((data) => {
    // Set up the canvas
    const canvas = document.getElementById("pizzaCanvas");
    const ctx = canvas.getContext("2d");

    // Set the canvas dimensions
    canvas.width = 800;
    canvas.height = 600;

    // Draw the triangles
    data.forEach((pizza) => {
      const size = pizza.Price * 50; // Determine size based on price
      ctx.beginPath();
      ctx.moveTo(400, 300); // Center of the canvas
      ctx.lineTo(400 + size, 300 + size); // Upper right corner
      ctx.lineTo(400 - size, 300 + size); // Upper left corner
      ctx.fillStyle = "orange";
      ctx.fill();
    });
  })
  .catch((error) => console.error(error));
