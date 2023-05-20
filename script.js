let toggle = document.getElementById('toggle');
let mobileNav = document.getElementById('mobile-nav');

let visible = false;
let toggleBar = () => {
    if(visible) {
        mobileNav.classList.remove('opacity-1')
        mobileNav.classList.add('opacity-0');
        toggle.children[0].classList.remove('absolute', 'top-1/2', 'rotate-45');
        toggle.children[1].classList.remove('opacity-0');
        toggle.children[2].classList.add('w-6')
        toggle.children[2].classList.remove('w-10','absolute', 'top-1/2', '-rotate-45');
        visible = false;
    }
    else {
        mobileNav.classList.remove('opacity-0')
        mobileNav.classList.add('opacity-1');
        toggle.children[0].classList.add('absolute', 'top-1/2', 'rotate-45');
        toggle.children[1].classList.add('opacity-0');
        toggle.children[2].classList.remove('w-6')
        toggle.children[2].classList.add('w-10','absolute', 'top-1/2', '-rotate-45');
        visible = true;
    }
}