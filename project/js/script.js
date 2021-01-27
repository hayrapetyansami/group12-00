window.addEventListener('load', () => {
    const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
    const navMenu = document.querySelector('#nav_menu');
    const memberCount = document.querySelector('.member_count');
    const memberCountOptions = document.querySelector('.member_count_options');
    const adulsCounter = document.querySelector('#adulsCounter');
    const childCounter = document.querySelector('#childCounter');
    const roomCounter = document.querySelector('#roomCounter');

    const minutAdult = document.querySelector('[data-minus-adult]');
    const plusAdult = document.querySelector('[data-plus-adult]');

    const minuschild = document.querySelector('[data-minus-child]');
    const pluschild = document.querySelector('[data-plus-child]');

    const minusRoom = document.querySelector('[data-minus-room]');
    const plusRoom = document.querySelector('[data-plus-room]');

    let adult = 0;
    let child = 0;
    let room = 0;

    minutAdult.addEventListener ('click', () => {
        if (adulsCounter.innerHTML != 0) {
            adulsCounter.innerHTML = --adult;
        }
    });

    plusAdult.addEventListener ('click', () => {
        if (adulsCounter.innerHTML <= 9) {
            adulsCounter.innerHTML = ++adult;
        }
    });

    minuschild.addEventListener ('click', () => {
        childCounter.innerHTML = --child;
    });

    pluschild.addEventListener ('click', () => {
        childCounter.innerHTML = ++child;
    });

    minusRoom.addEventListener ('click', () => {
        roomCounter.innerHTML = --room;
    });

    plusRoom.addEventListener ('click', () => {
        roomCounter.innerHTML = ++room;
    });



    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('menu_active');
    });

    memberCount.addEventListener('click', () => {
        memberCountOptions.style.display = 'block';
    });

});