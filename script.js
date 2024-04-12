// Initialize canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set initial state
let captionText = "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs";
let ctaText = "Shop Now";
let bgColor = "#0369A1";

// Function to draw canvas elements
function drawCanvas() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background color
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw caption text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(captionText, canvas.width / 2, 100);

  // Draw call to action text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 30px Arial';
  ctx.fillText(ctaText, canvas.width / 2, canvas.height - 50);
}

// Event listeners for input changes
document.getElementById('captionInput').addEventListener('input', function() {
  captionText = this.value;
  drawCanvas();
});

document.getElementById('ctaInput').addEventListener('input', function() {
  ctaText = this.value;
  drawCanvas();
});

document.getElementById('bgColorInput').addEventListener('input', function() {
  bgColor = this.value;
  drawCanvas();
});

// Initial drawing
drawCanvas();
