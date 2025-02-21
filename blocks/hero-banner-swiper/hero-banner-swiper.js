
export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const divEl = document.createElement('div');
    divEl.setAttribute('class', 'swiper cmp-carousel');
    divEl.setAttribute('role', 'group');
    divEl.setAttribute('aria-roledescription', 'carousel');
    divEl.setAttribute('data-cmp-is', 'carousel');
    divEl.setAttribute('data-cmp-delay', '5000');
    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'cmp-carousel__core-actions');
    divEl.append(divEl2);
    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', ' swiper-wrapper cmp-carousel__content');

    [...block.children].forEach((elem) => {
        console.log(elem);

        const divEl4 = document.createElement('div');
        divEl4.setAttribute('class', 'swiper-slide cmp-carousel__item');
        divEl4.setAttribute('role', 'tabpanel');
        divEl4.setAttribute('aria-label', 'Slide 1 of 3');
        divEl4.setAttribute('data-cmp-hook-carousel', 'item');
        const divEl5 = document.createElement('div');
        divEl5.setAttribute('class', 'homeherobanner');
        const sectionEl = document.createElement('section');
        sectionEl.setAttribute('class', 'hero-section');
        const pictureEl = document.createElement('picture');
        const sourceEl = document.createElement('source');
        sourceEl.setAttribute('media', '(max-width: 650px)');
        sourceEl.setAttribute('srcset', elem.querySelector("picture > img").src);
        pictureEl.append(sourceEl);
        const sourceEl2 = document.createElement('source');
        sourceEl2.setAttribute('media', '(min-width: 651px)');
        sourceEl2.setAttribute('srcset', elem.querySelector("picture > img").src);
        pictureEl.append(sourceEl2);
        const imgEl = document.createElement('img');
        imgEl.setAttribute('fetchpriority', 'high');
        imgEl.setAttribute('loading', 'eager');
        imgEl.setAttribute('class', 'banner-background-image');
        imgEl.setAttribute('src', elem.querySelector("picture > img").src);
        imgEl.setAttribute('alt', elem.querySelector("picture > img").src);
        imgEl.setAttribute('title', 'banner-background-image');
        pictureEl.append(imgEl);
        sectionEl.append(pictureEl);
        const divEl6 = document.createElement('div');
        divEl6.setAttribute('class', 'overlay');
        sectionEl.append(divEl6);
        const divEl7 = document.createElement('div');
        divEl7.setAttribute('class', 'hero-content');
        const imgEl2 = document.createElement('img');
        imgEl2.setAttribute('class', 'small-logo');
        imgEl2.setAttribute('src', '../../images/sm-logo-herobanner.png');
        imgEl2.setAttribute('alt', 'logo img');
        imgEl2.setAttribute('title', 'small-logo');
        divEl7.append(imgEl2);
        const divEl8 = document.createElement('div');
        divEl8.setAttribute('class', 'hero-title');
        const pEl = document.createElement('p');
        pEl.textContent = ('alt', elem.querySelector("div:nth-child(2) > p:nth-child(1)").innerText);
        divEl8.append(pEl);
        divEl7.append(divEl8);
        const divEl9 = document.createElement('div');
        divEl9.setAttribute('class', 'hero-description');
        divEl7.append(divEl9);
        const buttonEl = document.createElement('button');
        buttonEl.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
        buttonEl.setAttribute('redirection-type', 'open-in-browser');
        buttonEl.setAttribute('class', 'glass-button');
        buttonEl.setAttribute('title', 'redirectionTypeButton1');
        buttonEl.setAttribute('rel', 'nofollow');
        buttonEl.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
        buttonEl.textContent = ('alt', elem.querySelector("div:nth-child(2) > p:nth-child(2)").innerText);
        divEl7.append(buttonEl);
        sectionEl.append(divEl7);
        const divEl10 = document.createElement('div');
        divEl10.setAttribute('class', 'scroll-indicator');
        const divEl11 = document.createElement('div');
        divEl11.setAttribute('class', 'scroll-icon');
        const imgEl3 = document.createElement('img');
        imgEl3.setAttribute('src', '../../images/scroll_icon.png');
        imgEl3.setAttribute('alt', 'scroll icon');
        imgEl3.setAttribute('title', 'scroll-icon');
        divEl11.append(imgEl3);
        divEl10.append(divEl11);
        const pEl2 = document.createElement('p');
        pEl2.textContent = 'Scroll to explore';
        divEl10.append(pEl2);
        sectionEl.append(divEl10);
        divEl5.append(sectionEl);
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.setAttribute('href', '/etc.clientlibs/RE-Platform-Revamp/components/re-rides/royalEnfHero/clientlib-fancybox.min.6273cfb7c536e571916509ef02d26aa5.css');
        linkEl.setAttribute('type', 'text/css');
        divEl5.append(linkEl);
        const linkEl2 = document.createElement('link');
        linkEl2.setAttribute('rel', 'stylesheet');
        linkEl2.setAttribute('href', '/etc.clientlibs/RE-Platform-Revamp/components/re-rides/highlights/clientlib-fancybox.min.6273cfb7c536e571916509ef02d26aa5.css');
        linkEl2.setAttribute('type', 'text/css');
        divEl5.append(linkEl2);
        const scriptEl = document.createElement('script');
        scriptEl.setAttribute('src', '/etc.clientlibs/RE-Platform-Revamp/components/re-rides/royalEnfHero/clientlib-fancybox.min.f8a32763f0f09d30b74ec142b40cadcb.js');
        divEl5.append(scriptEl);
        const scriptEl2 = document.createElement('script');
        scriptEl2.setAttribute('src', '/etc.clientlibs/RE-Platform-Revamp/components/re-rides/highlights/clientlib-fancybox.min.f8a32763f0f09d30b74ec142b40cadcb.js');
        divEl5.append(scriptEl2);
        divEl4.append(divEl5);

        divEl3.append(divEl4);
    })



    const divEl30 = document.createElement('div');
    divEl30.setAttribute('class', 'cmp-carousel__actions');
    const buttonEl4 = document.createElement('button');
    buttonEl4.setAttribute('class', 'cmp-carousel__action cmp-carousel__action--previous');
    buttonEl4.setAttribute('role', 'button');
    buttonEl4.setAttribute('aria-label', 'Previous');
    buttonEl4.setAttribute('data-cmp-hook-carousel', 'previous');
    const spanEl = document.createElement('span');
    spanEl.setAttribute('class', 'cmp-carousel__action-icon');
    buttonEl4.append(spanEl);
    const spanEl2 = document.createElement('span');
    spanEl2.setAttribute('class', 'cmp-carousel__action-text');
    spanEl2.textContent = 'Previous';
    buttonEl4.append(spanEl2);
    divEl30.append(buttonEl4);
    const buttonEl5 = document.createElement('button');
    buttonEl5.setAttribute('class', 'cmp-carousel__action cmp-carousel__action--next');
    buttonEl5.setAttribute('role', 'button');
    buttonEl5.setAttribute('aria-label', 'Next');
    buttonEl5.setAttribute('data-cmp-hook-carousel', 'next');
    const spanEl3 = document.createElement('span');
    spanEl3.setAttribute('class', 'cmp-carousel__action-icon');
    buttonEl5.append(spanEl3);
    const spanEl4 = document.createElement('span');
    spanEl4.setAttribute('class', 'cmp-carousel__action-text');
    spanEl4.textContent = 'Next';
    buttonEl5.append(spanEl4);
    divEl30.append(buttonEl5);
    const olEl = document.createElement('ol');
    olEl.setAttribute('class', 'cmp-carousel__indicators');
    olEl.setAttribute('role', 'tablist');
    olEl.setAttribute('aria-label', 'Choose a slide to display');
    olEl.setAttribute('data-cmp-hook-carousel', 'indicators');
    const liEl = document.createElement('li');
    liEl.setAttribute('class', 'cmp-carousel__indicator cmp-carousel__indicator--active');
    liEl.setAttribute('role', 'tab');
    liEl.setAttribute('aria-label', 'Slide 1');
    liEl.setAttribute('data-cmp-hook-carousel', 'indicator');
    olEl.append(liEl);
    const liEl2 = document.createElement('li');
    liEl2.setAttribute('class', 'cmp-carousel__indicator');
    liEl2.setAttribute('role', 'tab');
    liEl2.setAttribute('aria-label', 'Slide 2');
    liEl2.setAttribute('data-cmp-hook-carousel', 'indicator');
    olEl.append(liEl2);
    const liEl3 = document.createElement('li');
    liEl3.setAttribute('class', 'cmp-carousel__indicator');
    liEl3.setAttribute('role', 'tab');
    liEl3.setAttribute('aria-label', 'Slide 3');
    liEl3.setAttribute('data-cmp-hook-carousel', 'indicator');
    olEl.append(liEl3);
    divEl30.append(olEl);
    divEl3.append(divEl30);
    divEl.append(divEl3);
    const divEl31 = document.createElement('div');
    divEl31.setAttribute('class', 'swiper-pagination');
    divEl.append(divEl31);
    const divEl32 = document.createElement('div');
    divEl32.setAttribute('class', 'swiper-button-prev');
    divEl.append(divEl32);
    const divEl33 = document.createElement('div');
    divEl33.setAttribute('class', 'swiper-button-next');
    divEl.append(divEl33);
    const divEl34 = document.createElement('div');
    divEl34.setAttribute('class', 'swiper-scrollbar');
    divEl.append(divEl34);
    container.append(divEl);
    block.textContent = '';
    block.append(container);

    startCarousel();
}

function startCarousel() {
    const waitForSwiper = (callback) => (function checkSwiper() { window.Swiper ? callback() : setTimeout(checkSwiper, 100); })();

    waitForSwiper(() => {
        // after here 

        new Swiper(".hero-banner-swiper .swiper", {
            direction: "horizontal",
            loop: true,
            clickable: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            speed: 2000,
            effect: "slide",
            slidesPerView: 1
        });

        document.querySelectorAll(".scroll-indicator").forEach((e) => {
            e.addEventListener("click", (t) => {
                t.preventDefault();
                const n = e.getAttribute("data-target");
                const o = n ? document.querySelector(n) : document.querySelector(".whatstrending");

                if (o) {
                    o.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                } else {
                    console.error(`Target element '${n || ".whatstrending"}' not found.`);
                }
            });
        });

        // above here
    });
}
