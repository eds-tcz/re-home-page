export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const divEl = document.createElement('div');
    divEl.setAttribute('class', 'iride-container');
    const h1El = document.createElement('h1');
    h1El.setAttribute('class', 'iride-title');
    h1El.textContent = 'R!de';
    divEl.append(h1El);
    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'iride-grid');
    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', 'iride-wrapper swiper-wrapper');

    [...block.children].forEach((ird) => {
        console.log(ird);

    const divEl4 = document.createElement('div');
    divEl4.setAttribute('class', 'swiper-slide grid-item ');
    const divEl5 = document.createElement('div');
    divEl5.setAttribute('class', 'card');
    const pictureEl = document.createElement('picture');
    const sourceEl = document.createElement('source');
    sourceEl.setAttribute('media', '(max-width: 799px)');
    sourceEl.setAttribute('srcset',  ird.querySelector("div:nth-child(1) > picture > img").src);
    pictureEl.append(sourceEl);
    const sourceEl2 = document.createElement('source');
    sourceEl2.setAttribute('media', '(min-width: 800px)');
    sourceEl2.setAttribute('srcset', ird.querySelector("div:nth-child(1) > picture > img").src);
    pictureEl.append(sourceEl2);
    const imgEl = document.createElement('img');
        imgEl.setAttribute('srcset', ird.querySelector("div:nth-child(1) > picture > img").src);
        imgEl.setAttribute('src', 'fedf') ;
    pictureEl.append(imgEl);
    divEl5.append(pictureEl);
    const divEl6 = document.createElement('div');
    divEl6.setAttribute('class', 'content');
    const h2El = document.createElement('h2');
        h2El.textContent = (ird.querySelector("div:nth-child(2) > h2").innerText);
    divEl6.append(h2El);
    const pEl = document.createElement('p');
        pEl.textContent = (ird.querySelector("div:nth-child(2) > p").innerText);
    divEl6.append(pEl);
    const aEl = document.createElement('a');
    aEl.setAttribute('href', '/in/en/rides-revamp-pages/rides-detail-page/');
    aEl.setAttribute('class', 'link-arrow');
    aEl.setAttribute('target', '_blank');
    const svgEl = document.createElement('svg');
    svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgEl.setAttribute('width', '24');
    svgEl.setAttribute('height', '24');
    svgEl.setAttribute('viewBox', '0 0 24 24');
    svgEl.setAttribute('fill', 'none');
    svgEl.setAttribute('stroke', 'currentColor');
    svgEl.setAttribute('stroke-width', '2');
    svgEl.setAttribute('stroke-linecap', 'round');
    svgEl.setAttribute('stroke-linejoin', 'round');
    const lineEl = document.createElement('line');
    lineEl.setAttribute('x1', '5');
    lineEl.setAttribute('y1', '12');
    lineEl.setAttribute('x2', '19');
    lineEl.setAttribute('y2', '12');
    svgEl.append(lineEl);
    const polylineEl = document.createElement('polyline');
    polylineEl.setAttribute('points', '12 5 19 12 12 19');
    svgEl.append(polylineEl);
    aEl.append(svgEl);
    divEl6.append(aEl);
    divEl5.append(divEl6);
    divEl4.append(divEl5);
    divEl3.append(divEl4);
    
    })

    
    divEl2.append(divEl3);
    const divEl22 = document.createElement('div');
    divEl22.setAttribute('class', 'swiper-pagination');
    divEl2.append(divEl22);
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
        const s = {
            swiperInstance: null,
            init: function () {
                this.setupResponsiveBehavior(),
                    window.addEventListener("resize", this.setupResponsiveBehavior.bind(this))
            },
            setupResponsiveBehavior: function () {
                window.innerWidth <= 768 ? this.swiperInstance || (this.swiperInstance = new Swiper(".iride-grid", {
                    direction: "horizontal",
                    loop: !1,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    },
                    effect: "slide",
                    slidesPerView: 1.2,
                    spaceBetween: 20
                })) : this.swiperInstance && (this.swiperInstance.destroy(!0, !0),
                    this.swiperInstance = null)
            }
        };
        // above here
    });
}
