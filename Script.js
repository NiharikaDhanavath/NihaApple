// Smooth Scroll for 'Explore My Products'
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.getElementById("products");
    window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust for sticky navbar
        behavior: "smooth",
    });
});

// Update Footer Year Dynamically
document.getElementById("year").textContent = new Date().getFullYear();
