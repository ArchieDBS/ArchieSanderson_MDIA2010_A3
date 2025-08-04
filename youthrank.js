// Hide login page when "Open File" is clicked
function revealFile() {
    document.getElementById('youthFile').style.display = 'block';
    playUISound();
    document.getElementById('accessInput').classList.add('hidden');
    document.getElementById('accessBtn').classList.add('hidden');
    document.getElementById('youthFile').style.display = 'block';
}

// Play the audio when "Open File" is clicked
function revealFile() {
  playUISound();

  // Hide access input and button, show the file
  document.getElementById('accessInput').classList.add('hidden');
  document.getElementById('accessBtn').classList.add('hidden');
  document.getElementById('youthFile').style.display = 'block';

  // Reveal columns 1 and 3, remove 'only' from column2
  document.querySelector('.column1').classList.remove('hidden');
  document.querySelector('.column3').classList.remove('hidden');
  document.querySelector('.column2').classList.remove('only');
}

// On page load, add 'only' class if columns 1 and 3 are hidden
window.addEventListener('DOMContentLoaded', function() {
  if (
    document.querySelector('.column1').classList.contains('hidden') &&
    document.querySelector('.column3').classList.contains('hidden')
  ) {
    document.querySelector('.column2').classList.add('only');
  }
});

// Play BG audio when "Open File" is clicked
function reveal(element) {
    element.classList.add('revealed');
    playUISound();
    }

function playUISound() {
  var sound = document.getElementById("soundtrack");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

// Create a magnifier on Image 1
document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById("img1");
  const magnifier = document.getElementById("magnifier");
  const zoom = 3; 

  img.addEventListener("mousemove", function(e) {
    magnifier.style.display = "block";
    const rect = img.getBoundingClientRect();
    const mx = magnifier.offsetWidth / 2;
    const my = magnifier.offsetHeight / 2;

    // Mouse position relative to image
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Keep the magnifier inside image
    x = Math.max(mx / zoom, Math.min(x, img.width - mx / zoom));
    y = Math.max(my / zoom, Math.min(y, img.height - my / zoom));

    // Position the magnifier
    magnifier.style.left = `${x - mx}px`;
    magnifier.style.top = `${y - my}px`;

    // Set background image and position
    magnifier.style.backgroundImage = `url('${img.src}')`;
    magnifier.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
    magnifier.style.backgroundPosition = `-${x * zoom - mx}px -${y * zoom - my}px`;
  });

  img.addEventListener("mouseleave", function() {
    magnifier.style.display = "none";
  });
});

// Modal popup for 'Full Audit' document
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Modals for Images 4 and 5
document.addEventListener("DOMContentLoaded", function() {
  // Image 4 modal
  const modal4 = document.getElementById("img4Modal");
  const img4Thumb = document.getElementById("img4Thumb");
  const closeBtn4 = document.getElementById("closeImg4Modal");

  if (img4Thumb) {
    img4Thumb.addEventListener("click", function() {
      modal4.style.display = "block";
    });
  }
  if (closeBtn4) {
    closeBtn4.onclick = function() {
      modal4.style.display = "none";
    };
  }

  // Image 5 modal
  const modal5 = document.getElementById("img5Modal");
  const img5Thumb = document.getElementById("img5Thumb");
  const closeBtn5 = document.getElementById("closeImg5Modal");

  if (img5Thumb) {
    img5Thumb.addEventListener("click", function() {
      modal5.style.display = "block";
    });
  }
  if (closeBtn5) {
    closeBtn5.onclick = function() {
      modal5.style.display = "none";
    };
  }

  // Single window.onclick handler for all modals
  window.onclick = function(event) {
    if (event.target === modal4) {
      modal4.style.display = "none";
    }
    if (event.target === modal5) {
      modal5.style.display = "none";
    }
  };
});