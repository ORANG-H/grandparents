function revealSecret() {
    const message = document.getElementById("secret-message");
    message.style.display = "block";
    launchHearts(25); // Launch 25 hearts
  }
  
  function launchHearts(count) {
    const container = document.getElementById("heart-container");
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💖";
  
      // Random starting position
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
  
      // Random animation delay & size
      heart.style.animationDelay = Math.random() * 0.5 + "s";
      heart.style.fontSize = 1.5 + Math.random() * 2 + "rem";
  
      container.appendChild(heart);
  
      // Remove after animation
      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  }
  