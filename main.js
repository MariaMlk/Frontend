const FEATURES__NAVS = document.querySelectorAll('.features__nav-item');
const FEATURES__TABS = document.querySelectorAll('.features__item');

FEATURES__NAVS.forEach((nav, index) => nav.addEventListener('click', event => {
    FEATURES__NAVS.forEach(el => {
        el.classList.remove('active');
    });

    FEATURES__TABS.forEach(el => {
        el.classList.remove('active');
    });

    nav.classList.add('active');
    FEATURES__TABS[index].classList.add('active');
}));



const HE__DOTS = document.querySelectorAll('.he__dot');
const HE__IMAGE = document.querySelector('.he__image');


HE__DOTS.forEach((dot, index) => dot.addEventListener('click', () => {
    HE__DOTS.forEach(item => {
        item.classList.remove('active');
});

dot.classList.add('active');

HE__IMAGE.src = 'img/frame' + (index+1) + '.png';

}));