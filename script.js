window.addEventListener('load', function() {
    let loc = window.location.href;
    let navItems = document.querySelectorAll('.navbar li');

    navItems.forEach(function(item) {
        let link = item.querySelector('a').href;
        if (loc === link) {
            item.classList.add('active');
        }else{
            item.classList.remove('active')
        }
    });
});

