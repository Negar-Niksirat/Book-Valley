function themeToggle() {
    const body = document.body;
    const themeToggleIcon = document.getElementById("theme-toggle-id");

    if (body.classList.contains("dark-mode")) {
     
        body.classList.remove("dark-mode");
        body.style.backgroundColor = "#f5f5f5"; 
        document.getElementById("containerHeader1").style.color = "#000000";
        document.getElementById("containerHeader2").style.color = "#000000";
        themeToggleIcon.src = "Photo/light-mode.png"; 
    } else {
  
        body.classList.add("dark-mode");
        body.style.backgroundColor = "#1E1E1E"; 
        document.getElementById("containerHeader1").style.color = "#ffffff";
        document.getElementById("containerHeader2").style.color = "#ffffff";
        themeToggleIcon.src = "Photo/dark-mode.png"; 
    }
}
