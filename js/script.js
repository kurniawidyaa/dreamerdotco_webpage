document.addEventListener('DOMContentLoaded', function() {
    
    // animation on refresh new page
   const about = document.querySelectorAll(".animation_right");
   const grid = document.querySelectorAll(".animation_left");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    })

    about.forEach(element => {
        observer.observe(element)
    })
    grid.forEach(grid => {
        observer.observe(grid)
    })

});
