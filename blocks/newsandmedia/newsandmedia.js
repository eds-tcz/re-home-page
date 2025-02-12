export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'container-55a89435f4');
    divEl.setAttribute('class', 'cmp-container');
    divEl.setAttribute('style', 'background-image:url()');
    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'newsandmedia');
    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', 'news-and-media-container');
    const h1El = document.createElement('h1');
    h1El.setAttribute('class', 'marquee-title');
    h1El.textContent = 'Buzz';
    divEl3.append(h1El);
    const pEl = document.createElement('p');
    pEl.setAttribute('class', 'marquee-description');
    divEl3.append(pEl);
    const divEl4 = document.createElement('div');
    divEl4.setAttribute('class', 'cmp--newsandmedia-swiper');
    const divEl5 = document.createElement('div');
    divEl5.setAttribute('class', 'marquee-rides-events-cards swiper-wrapper');

    [...block.children].forEach((mrec) => {
        console.log(mrec);


    const divEl6 = document.createElement('div');
    divEl6.setAttribute('class', 'marquee-rides-events-card swiper-slide');
    const pictureEl = document.createElement('picture');
    const sourceEl = document.createElement('source');
    sourceEl.setAttribute('media', '(max-width: 799px)');
    sourceEl.setAttribute('srcset', mrec.querySelector("div:nth-child(1) > picture > img").src);
    pictureEl.append(sourceEl);
    const sourceEl2 = document.createElement('source');
    sourceEl2.setAttribute('media', '(min-width: 800px)');
    sourceEl2.setAttribute('srcset', mrec.querySelector("div:nth-child(1) > picture > img").src);
    pictureEl.append(sourceEl2);
    const imgEl = document.createElement('img');
    imgEl.setAttribute('loading', 'lazy');
    imgEl.setAttribute('src', mrec.querySelector("div:nth-child(1) > picture > img").src);
    imgEl.setAttribute('alt', 'marquee1');
    imgEl.setAttribute('title', 'news-and-media-img');
    pictureEl.append(imgEl);
    divEl6.append(pictureEl);
    const h2El = document.createElement('h2');
    h2El.setAttribute('class', 'status-banner');
    h2El.textContent = '2 New Reviews';
    divEl6.append(h2El);
    const divEl7 = document.createElement('div');
    divEl7.setAttribute('class', 'card-content-container');
    const divEl8 = document.createElement('div');
    divEl8.setAttribute('class', 'card-content');
    const h3El = document.createElement('h3');
    h3El.setAttribute('class', 'card-heading');
        h3El.textContent = (mrec.querySelector("div:nth-child(2) > h3").innerText);
    divEl8.append(h3El);
    const divEl9 = document.createElement('div');
    divEl9.setAttribute('class', 'card-buttons');
    const aEl = document.createElement('a');
    aEl.setAttribute('class', 'card-details-button');
    aEl.setAttribute('redirection-type', 'open-in-browser');
    aEl.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    aEl.setAttribute('rel', 'nofollow');
    aEl.setAttribute('title', 'card-details-button');
    aEl.setAttribute('target', '_self');
    divEl9.append(aEl);
    divEl8.append(divEl9);
    divEl7.append(divEl8);
    divEl6.append(divEl7);
    divEl5.append(divEl6);

    })

    divEl4.append(divEl5);
    const divEl22 = document.createElement('div');
    divEl22.setAttribute('class', 'swiper-pagination');
    divEl4.append(divEl22);
    divEl3.append(divEl4);
    divEl2.append(divEl3);
    divEl.append(divEl2);
    container.append(divEl);
    block.textContent = '';
    block.append(container);

    startCarousel();
}

function startCarousel() {
    const waitForSwiper = (callback) => (function checkSwiper() { window.Swiper ? callback() : setTimeout(checkSwiper, 100); })();

    waitForSwiper(() => {
        // after here 

        new Swiper(".cmp--newsandmedia-swiper", {
            direction: "horizontal",
            loop: !1,
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            },
            effect: "slide",
            slidesPerView: 1.2,
            spaceBetween: 20,
            breakpoints: {
                768: {
                    slidesPerView: 1.2
                },
                1024: {
                    slidesPerView: 4
                }
            }
        })
        // above here
    });
}
