window.addEventListener("load", function(event) {
    let $links = document.getElementsByClassName('index__topic');

    Array.from($links).forEach(function(link) {
        link.addEventListener('click', function(e){
            e.preventDefault();

            let hash = e.target.hash;
            let baseScroll = window.scrollY;
            let offset = document.getElementById(hash.slice(1)).getBoundingClientRect().top + baseScroll;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });
});
