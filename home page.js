// Function to toggle the display of chapters dropdown
function toggleChapters() {
    const chapters = document.getElementById('chaptersName');
    if (chapters.style.display === 'inline-block') {
      chapters.style.display = 'none';
    } else {
      chapters.style.display = 'inline-block';
    }
  }
  
  // Function to toggle the password visibility
  function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  
  // Function to handle bookmarking (changing the icon)
  function bookfunction() {
    const bookmarkIcon = document.getElementById("booking");
    if (bookmarkIcon.classList.contains('far')) {
      bookmarkIcon.classList.remove('far');
      bookmarkIcon.classList.add('fas');
      alert('Saved!');
    } else {
      bookmarkIcon.classList.remove('fas');
      bookmarkIcon.classList.add('far');
      alert('Unsaved!');
    }
  }
  
  // Color Picker to change navbar background color
  document.getElementById("navcolor").addEventListener("input", function() {
    const color = this.value;
    document.querySelector(".navbar").style.backgroundColor = color;
  });

  const canvas = document.getElementById('canvasi');
  const ctx = canvas.getContext("2d")

  ctx.beginPath();
  ctx.arc(100, 60, 50, 0, 2 * Math.PI)
  ctx.stroke()