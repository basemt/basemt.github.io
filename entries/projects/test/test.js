// Load the pizza data from your JSON file
fetch('pizza_data.json')
  .then(response => response.json())
  .then(data => {

    // Get the canvas element and context
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Set the canvas dimensions
    canvas.width = 800;
    canvas.height = 600;

    // Loop through each pizza slice in the data
    data.forEach(pizza => {

      // Calculate triangle size based on pizza price
      let triangleSize = map(pizza.price, 1, 7, 10, 50);

      // Create triangle vertices based on pizza latitude and longitude
      let x1 = map(pizza.longitude, -74.2019284, -74.168236903774, 0, canvas.width);
      let y1 = map(pizza.latitude, 40.559621484234, 40.9036613, 0, canvas.height);
      let x2 = x1 + triangleSize;
      let y2 = y1 + triangleSize;
      let x3 = x1 - triangleSize;
      let y3 = y1 + triangleSize;

      // Set triangle fill and stroke colors
      ctx.fillStyle = pizza.style.color;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;

      // Draw triangle
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    });
  });

// Helper function for mapping values from one range to another
function map(value, min1, max1, min2, max2) {
  return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
}
