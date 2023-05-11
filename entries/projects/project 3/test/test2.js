$(document).ready(function() {
	$(document).on('mousemove', function(e) {
	  $('#cursor').css({
		left: e.pageX,
		top: e.pageY
	  });
	})
  });


const numShapes = 350;
		const shapesContainer = document.createElement('div');
		shapesContainer.classList.add('shapes-container');
		document.body.appendChild(shapesContainer);

		for (let i = 0; i < numShapes; i++) {
			const shape = document.createElement('div');
			shape.classList.add('shape');
			if (i % 2 == 0) {
				shape.classList.add('triangle');
			} else {
				shape.classList.add('circle');
			}
			shapesContainer.appendChild(shape);

			// Generate random animation properties for each shape
			const duration = Math.floor(Math.random() * 3) + 15; // 4 to 9 seconds
			const timingFunction = ['linear', 'ease-in', 'ease-out', 'ease-in-out'][Math.floor(Math.random() * 6)];
			const x1 = Math.floor(Math.random() * window.innerWidth * 2) - window.innerWidth; // -viewportWidth to viewportWidth
			const y1 = Math.floor(Math.random() * window.innerHeight * 2) - window.innerHeight; // -viewportHeight to viewportHeight
			const x2 = Math.floor(Math.random() * window.innerWidth * 2) - window.innerWidth; // -viewportWidth to viewportWidth
			const y2 = Math.floor(Math.random() * window.innerHeight * 2) - window.innerHeight; // -viewportHeight to viewportHeight

			shape.style.animationName = `shape-${i}-float`;
			shape.style.animationDuration = `${duration}s`;
			shape.style.animationTimingFunction = timingFunction;
			shape.style.animationDirection = 'alternate';
			shape.style.animationIterationCount = 'infinite';

			// Define keyframes for each shape's animation
			const keyframes = `from { transform: translate(${x1}px, ${y1}px) }
				to { transform: translate(${x2}px, ${y2}px) }`;
			const styleSheet = document.createElement('style');
			styleSheet.innerHTML = `@keyframes shape-${i}-float { ${keyframes} }`;
			document.head.appendChild(styleSheet);
		}