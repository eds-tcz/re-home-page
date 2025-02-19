export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const divEl = document.createElement('div');
    divEl.setAttribute('class', 'bike-container');
    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'bike-container-title');
    const h1El = document.createElement('h1');
    h1El.textContent = 'Motorcycles';
    divEl2.append(h1El);
    divEl.append(divEl2);
    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', 'categories-container');
    const divEl4 = document.createElement('div');
    divEl4.setAttribute('class', 'categories-tabs');
    divEl4.setAttribute('id', 'categoriesTabs');
    divEl4.setAttribute('style', 'background-image: url(/content/dam/revamp-dam/vector-strike.png)');
    const divEl5 = document.createElement('div');
    divEl5.setAttribute('class', 'central-highlight');
    divEl4.append(divEl5);
    const divEl6 = document.createElement('div');
    divEl6.setAttribute('class', 'models-swiper--uppertab swiper');
    const divEl7 = document.createElement('div');
    divEl7.setAttribute('class', 'swiper-wrapper');
    const divEl8 = document.createElement('div');
    divEl8.setAttribute('class', 'swiper-slide');
    const divEl9 = document.createElement('div');
    divEl9.setAttribute('class', 'category-tab active');
    divEl9.setAttribute('data-category', 'ROADSTER');
    divEl9.textContent = 'ROADSTER';
    divEl8.append(divEl9);
    divEl7.append(divEl8);
    const divEl10 = document.createElement('div');
    divEl10.setAttribute('class', 'swiper-slide');
    const divEl11 = document.createElement('div');
    divEl11.setAttribute('class', 'category-tab active');
    divEl11.setAttribute('data-category', 'ADVENTURE');
    divEl11.textContent = 'Adventure';
    divEl10.append(divEl11);
    divEl7.append(divEl10);
    const divEl12 = document.createElement('div');
    divEl12.setAttribute('class', 'swiper-slide');
    const divEl13 = document.createElement('div');
    divEl13.setAttribute('class', 'category-tab active');
    divEl13.setAttribute('data-category', 'HERITAGE IS THE KEY');
    divEl13.textContent = 'Heritage is the key';
    divEl12.append(divEl13);
    divEl7.append(divEl12);
    const divEl14 = document.createElement('div');
    divEl14.setAttribute('class', 'swiper-slide');
    const divEl15 = document.createElement('div');
    divEl15.setAttribute('class', 'category-tab active');
    divEl15.setAttribute('data-category', 'RIDES FAV');
    divEl15.textContent = 'Rides Fav';
    divEl14.append(divEl15);
    divEl7.append(divEl14);
    const divEl16 = document.createElement('div');
    divEl16.setAttribute('class', 'swiper-slide');
    const divEl17 = document.createElement('div');
    divEl17.setAttribute('class', 'category-tab active');
    divEl17.setAttribute('data-category', 'LONG JOURNY');
    divEl17.textContent = 'LONG JOURNY';
    divEl16.append(divEl17);
    divEl7.append(divEl16);
    const divEl18 = document.createElement('div');
    divEl18.setAttribute('class', 'swiper-slide');
    const divEl19 = document.createElement('div');
    divEl19.setAttribute('class', 'category-tab active');
    divEl19.setAttribute('data-category', 'ROADSHINER');
    divEl19.textContent = 'RoadShiner';
    divEl18.append(divEl19);
    divEl7.append(divEl18);
    const divEl20 = document.createElement('div');
    divEl20.setAttribute('class', 'swiper-slide');
    const divEl21 = document.createElement('div');
    divEl21.setAttribute('class', 'category-tab active');
    divEl21.setAttribute('data-category', 'BLUE STORM');
    divEl21.textContent = 'Blue Storm';
    divEl20.append(divEl21);
    divEl7.append(divEl20);
    const divEl22 = document.createElement('div');
    divEl22.setAttribute('class', 'swiper-slide');
    const divEl23 = document.createElement('div');
    divEl23.setAttribute('class', 'category-tab active');
    divEl23.setAttribute('data-category', 'FIRE-BIKE');
    divEl23.textContent = 'Fire-Bike';
    divEl22.append(divEl23);
    divEl7.append(divEl22);
    const divEl24 = document.createElement('div');
    divEl24.setAttribute('class', 'swiper-slide');
    const divEl25 = document.createElement('div');
    divEl25.setAttribute('class', 'category-tab active');
    divEl25.setAttribute('data-category', 'ROYAL CLASSICS ');
    divEl25.textContent = 'Royal Classics';
    divEl24.append(divEl25);
    divEl7.append(divEl24);
    divEl6.append(divEl7);
    divEl4.append(divEl6);
    divEl3.append(divEl4);
    divEl.append(divEl3);
    const divEl26 = document.createElement('div');
    divEl26.setAttribute('class', 'models-swiper swiper');
    const divEl27 = document.createElement('div');
    divEl27.setAttribute('class', 'swiper-wrapper');
    const divEl28 = document.createElement('div');
    divEl28.setAttribute('class', 'model-slide swiper-slide');
    divEl28.setAttribute('data-category', 'ROADSTER');
    divEl28.setAttribute('data-model', 'bullet-classics');
    divEl28.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl28.setAttribute('data-image', '../../images/left.png');
    const spanEl = document.createElement('span');
    spanEl.setAttribute('class', 'model-name');
    spanEl.textContent = 'Bullet Classics';
    divEl28.append(spanEl);
    divEl27.append(divEl28);
    const divEl29 = document.createElement('div');
    divEl29.setAttribute('class', 'model-slide swiper-slide');
    divEl29.setAttribute('data-category', 'ROADSTER');
    divEl29.setAttribute('data-model', 'bullet-classics');
    divEl29.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl29.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/TB-500-X/colour-bike-studio-shots/blue/Left.png');
    const spanEl2 = document.createElement('span');
    spanEl2.setAttribute('class', 'model-name');
    spanEl2.textContent = 'Bullet Classics';
    divEl29.append(spanEl2);
    divEl27.append(divEl29);
    const divEl30 = document.createElement('div');
    divEl30.setAttribute('class', 'model-slide swiper-slide');
    divEl30.setAttribute('data-category', 'ROADSTER');
    divEl30.setAttribute('data-model', 'bullet-classics');
    divEl30.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl30.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/bullet500/Colour-bikes-studio-shots/green/Left.png');
    const spanEl3 = document.createElement('span');
    spanEl3.setAttribute('class', 'model-name');
    spanEl3.textContent = 'Bullet Classics';
    divEl30.append(spanEl3);
    divEl27.append(divEl30);
    const divEl31 = document.createElement('div');
    divEl31.setAttribute('class', 'model-slide swiper-slide');
    divEl31.setAttribute('data-category', 'ADVENTURE');
    divEl31.setAttribute('data-model', 'himalayan-360');
    divEl31.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl31.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/cl350/colour/ash/Left.png');
    const spanEl4 = document.createElement('span');
    spanEl4.setAttribute('class', 'model-name');
    spanEl4.textContent = 'Himalayan 360';
    divEl31.append(spanEl4);
    divEl27.append(divEl31);
    const divEl32 = document.createElement('div');
    divEl32.setAttribute('class', 'model-slide swiper-slide');
    divEl32.setAttribute('data-category', 'ADVENTURE');
    divEl32.setAttribute('data-model', 'hunter-3483');
    divEl32.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl32.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/cl350/colour/lagoon/Left.png');
    const spanEl5 = document.createElement('span');
    spanEl5.setAttribute('class', 'model-name');
    spanEl5.textContent = 'hunter 3483';
    divEl32.append(spanEl5);
    divEl27.append(divEl32);
    const divEl33 = document.createElement('div');
    divEl33.setAttribute('class', 'model-slide swiper-slide');
    divEl33.setAttribute('data-category', 'ADVENTURE');
    divEl33.setAttribute('data-model', 'continental-340');
    divEl33.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl33.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/clStealthBlack/Colour-bike-studio-shots/black/Left.png');
    const spanEl6 = document.createElement('span');
    spanEl6.setAttribute('class', 'model-name');
    spanEl6.textContent = 'Continental 340';
    divEl33.append(spanEl6);
    divEl27.append(divEl33);
    const divEl34 = document.createElement('div');
    divEl34.setAttribute('class', 'model-slide swiper-slide');
    divEl34.setAttribute('data-category', 'HERITAGE IS THE KEY');
    divEl34.setAttribute('data-model', 'hunter-3483');
    divEl34.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl34.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/TB-500-X/colour-bike-studio-shots/blue/Left.png');
    const spanEl7 = document.createElement('span');
    spanEl7.setAttribute('class', 'model-name');
    spanEl7.textContent = 'hunter 3483';
    divEl34.append(spanEl7);
    divEl27.append(divEl34);
    const divEl35 = document.createElement('div');
    divEl35.setAttribute('class', 'model-slide swiper-slide');
    divEl35.setAttribute('data-category', 'HERITAGE IS THE KEY');
    divEl35.setAttribute('data-model', 'bullet-classic');
    divEl35.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl35.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/new/clchrome/color/black/Left.png');
    const spanEl8 = document.createElement('span');
    spanEl8.setAttribute('class', 'model-name');
    spanEl8.textContent = 'Bullet Classic';
    divEl35.append(spanEl8);
    divEl27.append(divEl35);
    const divEl36 = document.createElement('div');
    divEl36.setAttribute('class', 'model-slide swiper-slide');
    divEl36.setAttribute('data-category', 'HERITAGE IS THE KEY');
    divEl36.setAttribute('data-model', 'classic-mountain');
    divEl36.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl36.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/bullet500/Colour-bikes-studio-shots/green/Left.png');
    const spanEl9 = document.createElement('span');
    spanEl9.setAttribute('class', 'model-name');
    spanEl9.textContent = 'Classic Mountain';
    divEl36.append(spanEl9);
    divEl27.append(divEl36);
    const divEl37 = document.createElement('div');
    divEl37.setAttribute('class', 'model-slide swiper-slide');
    divEl37.setAttribute('data-category', 'RIDES FAV');
    divEl37.setAttribute('data-model', 'hot-wheels');
    divEl37.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl37.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/switzerland/tribute-black/colours/studio-shots/new/left-side-view.png');
    const spanEl10 = document.createElement('span');
    spanEl10.setAttribute('class', 'model-name');
    spanEl10.textContent = 'Hot Wheels';
    divEl37.append(spanEl10);
    divEl27.append(divEl37);
    const divEl38 = document.createElement('div');
    divEl38.setAttribute('class', 'model-slide swiper-slide');
    divEl38.setAttribute('data-category', 'RIDES FAV');
    divEl38.setAttribute('data-model', 'red-classics-bullet');
    divEl38.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl38.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/tbx-350-x/Colour-bike-studio-shots/red/left.png');
    const spanEl11 = document.createElement('span');
    spanEl11.setAttribute('class', 'model-name');
    spanEl11.textContent = 'Red Classics Bullet';
    divEl38.append(spanEl11);
    divEl27.append(divEl38);
    const divEl39 = document.createElement('div');
    divEl39.setAttribute('class', 'model-slide swiper-slide');
    divEl39.setAttribute('data-category', 'LONG JOURNY');
    divEl39.setAttribute('data-model', 'white-classics-bullets');
    divEl39.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl39.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/tbx-350-x/Colour-bike-studio-shots/white/left.png');
    const spanEl12 = document.createElement('span');
    spanEl12.setAttribute('class', 'model-name');
    spanEl12.textContent = 'White Classics Bullets';
    divEl39.append(spanEl12);
    divEl27.append(divEl39);
    const divEl40 = document.createElement('div');
    divEl40.setAttribute('class', 'model-slide swiper-slide');
    divEl40.setAttribute('data-category', 'LONG JOURNY');
    divEl40.setAttribute('data-model', 'royal-painted-bullet');
    divEl40.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl40.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/gunGrey/Colour-bike-studio-shots/left.png');
    const spanEl13 = document.createElement('span');
    spanEl13.setAttribute('class', 'model-name');
    spanEl13.textContent = 'Royal Painted Bullet';
    divEl40.append(spanEl13);
    divEl27.append(divEl40);
    const divEl41 = document.createElement('div');
    divEl41.setAttribute('class', 'model-slide swiper-slide');
    divEl41.setAttribute('data-category', 'ROADSHINER');
    divEl41.setAttribute('data-model', 'model-royal-enfield-320');
    divEl41.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl41.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/mongolia/digital-quickstart/scram-411/scram-images/Left.png');
    const spanEl14 = document.createElement('span');
    spanEl14.setAttribute('class', 'model-name');
    spanEl14.textContent = 'Model Royal Enfield 320';
    divEl41.append(spanEl14);
    divEl27.append(divEl41);
    const divEl42 = document.createElement('div');
    divEl42.setAttribute('class', 'model-slide swiper-slide');
    divEl42.setAttribute('data-category', 'BLUE STORM');
    divEl42.setAttribute('data-model', 'storm-3310');
    divEl42.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl42.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/squadronBlue/Colour-bike-studio-shots/left.png');
    const spanEl15 = document.createElement('span');
    spanEl15.setAttribute('class', 'model-name');
    spanEl15.textContent = 'Storm 3310';
    divEl42.append(spanEl15);
    divEl27.append(divEl42);
    const divEl43 = document.createElement('div');
    divEl43.setAttribute('class', 'model-slide swiper-slide');
    divEl43.setAttribute('data-category', 'FIRE-BIKE');
    divEl43.setAttribute('data-model', 'thunder-a-02');
    divEl43.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl43.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/new/clchrome/color/black/Left.png');
    const spanEl16 = document.createElement('span');
    spanEl16.setAttribute('class', 'model-name');
    spanEl16.textContent = 'Thunder-A-02';
    divEl43.append(spanEl16);
    divEl27.append(divEl43);
    const divEl44 = document.createElement('div');
    divEl44.setAttribute('class', 'model-slide swiper-slide');
    divEl44.setAttribute('data-category', 'ROYAL CLASSICS ');
    divEl44.setAttribute('data-model', 'classic-form--12');
    divEl44.setAttribute('data-href', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    divEl44.setAttribute('data-image', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/home/motorcycles/rena/color-shots/battle-green/Left_green.png');
    const spanEl17 = document.createElement('span');
    spanEl17.setAttribute('class', 'model-name');
    spanEl17.textContent = 'Classic Form -12';
    divEl44.append(spanEl17);
    divEl27.append(divEl44);
    divEl26.append(divEl27);
    const divEl45 = document.createElement('div');
    divEl45.setAttribute('class', 'nav-button prev');
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMTUgNmwtNiA2bDYgNiIvPjwvc3ZnPg==');
    divEl45.append(imgEl);
    divEl26.append(divEl45);
    const divEl46 = document.createElement('div');
    divEl46.setAttribute('class', 'nav-button next');
    const imgEl2 = document.createElement('img');
    imgEl2.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/motorcycle-pdp/leftImage.png');
    divEl46.append(imgEl2);
    divEl26.append(divEl46);
    divEl.append(divEl26);
    const divEl47 = document.createElement('div');
    divEl47.setAttribute('class', 'bike-display');
    divEl47.setAttribute('style', 'background-image: url(/content/dam/revamp-dam/smallCircle.png)');
    const imgEl3 = document.createElement('img');
    imgEl3.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/re-platform-images/cl350/colour/chestnut/left.png');
    imgEl3.setAttribute('alt', 'Motorcycle');
    imgEl3.setAttribute('class', 'bike-image');
    divEl47.append(imgEl3);
    divEl.append(divEl47);
    const divEl48 = document.createElement('div');
    divEl48.setAttribute('class', 'cta-box');
    const aEl = document.createElement('a');
    aEl.setAttribute('class', 'know-more-cta');
    aEl.setAttribute('href', 'https://stagecdn.royalenfield.com/in/en/rides-revamp-pages/rides-detail-page/');
    aEl.setAttribute('target', '_blank');
    aEl.textContent = 'KNOW MORE';
    divEl48.append(aEl);
    const spanEl18 = document.createElement('span');
    spanEl18.setAttribute('class', 'button-box');
    const buttonEl = document.createElement('button');
    buttonEl.setAttribute('class', 'transparentButton');
    buttonEl.textContent = 'CONFIGURE NOW';
    spanEl18.append(buttonEl);
    const buttonEl2 = document.createElement('button');
    buttonEl2.setAttribute('class', 'goldenButton');
    buttonEl2.setAttribute('onclick', 'redirectWithBikeInfo()');
    const imgEl4 = document.createElement('img');
    imgEl4.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/core-components-examples/Vector.svg');
    buttonEl2.append(imgEl4);
    spanEl18.append(buttonEl2);
    divEl48.append(spanEl18);
    divEl.append(divEl48);
    container.append(divEl);
    block.textContent = '';
    block.append(container);

    startCarousel();
}
function startCarousel() {
    const waitForSwiper = (callback) => (function checkSwiper() { window.Swiper ? callback() : setTimeout(checkSwiper, 100); })();

    waitForSwiper(() => {
        //after here 


        const e = new Swiper(".models-swiper", {
            slidesPerView: "auto",
            speed: 200,
            loop: !0,
            centeredSlides: !0,
            slideToClickedSlide: !0,
            navigation: {
                nextEl: ".nav-button.next",
                prevEl: ".nav-button.prev"
            }
        })
            , t = new Swiper(".models-swiper--uppertab", {
                slidesPerView: "auto",
                speed: 200,
                loop: !0,
                centeredSlides: !0,
                slideToClickedSlide: !0,
                breakpoints: {
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 40
                    }
                }
            })
            , o = document.querySelector(".models-swiper--uppertab .swiper-wrapper");
        function a(e) {
            const t = e.slides[e.activeIndex]
                , o = document.querySelector(".bike-image");
            o.style.transition = "transform 0.5s ease, opacity 0.5s ease",
                o.style.transform = "translateX(-50%)",
                o.style.opacity = "0",
                o.src = "",
                o.src = t.dataset.image,
                o.alt = t.querySelector(".model-name").textContent,
                setTimeout((() => {
                    o.style.transition = "none",
                        o.style.transform = "translateX(20%)",
                        o.style.opacity = "0",
                        setTimeout((() => {
                            o.style.transition = "transform 0.5s ease, opacity 0.5s ease",
                                o.style.transform = "translateX(0)",
                                o.style.opacity = "1"
                        }
                        ), 100)
                }
                ), 200)
        }
        function s(e) {
            t.init()
        }
        function r(e) {
            const o = e.slides[e.activeIndex].dataset.category;
            document.querySelectorAll(".category-tab").forEach((e => {
                const a = e.dataset.category === o;
                if (e.classList.toggle("active", a),
                    a) {
                    const e = Array.from(document.querySelectorAll(".category-tab")).findIndex((e => e.dataset.category === o));
                    -1 !== e && (t.slideTo(e, 100),
                        s())
                }
            }
            ))
        }
        document.querySelectorAll(".models-swiper--uppertab .swiper-slide").forEach((e => {
            const t = e.cloneNode(!0);
            o.appendChild(t)
        }
        )),
            e.on("slideChange", (() => {
                r(e),
                    a(e)
            }
            )),
            t.on("slideChange", (function () {
                const t = this.slides[this.activeIndex].querySelector(".category-tab").dataset.category;
                document.querySelectorAll(".category-tab").forEach((e => {
                    e.classList.toggle("active", e.dataset.category === t),
                        e.dataset.category === t && s()
                }
                ));
                const o = Array.from(document.querySelectorAll(".model-slide")).findIndex((e => e.dataset.category === t));
                -1 !== o && e.slideTo(o)
            }
            )),
            document.querySelectorAll(".category-tab").forEach((t => {
                t.addEventListener("click", (function () {
                    const t = this.dataset.category;
                    document.querySelectorAll(".category-tab").forEach((e => {
                        e.classList.toggle("active", e === this)
                    }
                    )),
                        s();
                    const o = Array.from(document.querySelectorAll(".model-slide")).findIndex((e => e.dataset.category === t));
                    -1 !== o && e.slideTo(o)
                }
                ))
            }
            )),
            document.addEventListener("DOMContentLoaded", (() => {
                r(e),
                    a(e);
                const t = document.querySelector(".category-tab.active");
                t && s()
            }
            )),
            window.addEventListener("resize", (() => {
                const e = document.querySelector(".category-tab.active");
                e && s()
            }
            ));
        const c = document.querySelectorAll(".category-tab");
        c.length;
        // c[1].click()

        //above here
    });
}