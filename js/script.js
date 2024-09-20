document.addEventListener('DOMContentLoaded', function() {

   const about = document.querySelectorAll(".animation_right");
   const grid = document.querySelectorAll(".animation_left");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            setTimeout(() => {
                entry.target.classList.toggle("show", entry.isIntersecting)
            }, 500);
        })
    })

    about.forEach(element => {
        observer.observe(element)
    })

    grid.forEach(grid => {
        observer.observe(grid)
    })

    // carousel
    let index = 0;
    function showItem(n) {
        const items = document.querySelectorAll('.carousel');
        if (n >= items.length) index = 0;
        if (n < 0) index = items.length - 1;
        items.forEach(item => item.style.display = 'none');
        items[index].style.display = 'block';
    }
    function next() {
        console.log("next")
        showItem(++index);
    }
    function prev() {
        console.log("prev")
        showItem(--index);
    }
    showItem(index);

    // on clickcontentFrame
    // function toCatalog() {
    //     document.getElementById('f_animation').classList.toggle('open_up');
    // }

    // const iframe = document.getElementById('contentFrame');
    // iframe.onload = function() {
    // iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    // iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px';
    // };

});
