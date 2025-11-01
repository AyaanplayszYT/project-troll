document.getElementById("trollButton").addEventListener("click", () => {
    // Hide main content and show loading screen
    document.querySelector(".centered").classList.add("hidden");
    document.getElementById("loadingScreen").style.display = "block";

    // Redirect to the video after a delay
    setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
    }, 3000);  // 3-second delay
});
