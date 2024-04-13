// Initialize canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set initial state
let captionText = "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs";
let ctaText = "Shop Now";
let bgColor = "#0369A1";
let customColor = "#ffffff";
let recentColors = ['#0369A1', '#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

// Function to draw canvas elements
function drawCanvas() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background color
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw custom color
  ctx.fillStyle = customColor;
  ctx.fillRect(50, 50, 100, 100);

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

// Function to update recent colors
function updateRecentColors() {
  const recentColorsContainer = document.getElementById('recentColors');
  recentColorsContainer.innerHTML = '';
  recentColors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('recent-color');
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener('click', function() {
      bgColor = color;
      drawCanvas();
    });
    recentColorsContainer.appendChild(colorDiv);
  });
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

document.getElementById('customColorInput').addEventListener('input', function() {
  customColor = this.value;
  drawCanvas();
});

document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    img.src = e.target.result;
  }
  reader.readAsDataURL(file);
});

// Initial drawing and recent colors update
drawCanvas();
updateRecentColors();
