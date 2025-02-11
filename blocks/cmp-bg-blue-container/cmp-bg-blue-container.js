export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'container-4a0b13f9c8');
    divEl.setAttribute('class', 'cmp-container');
    divEl.setAttribute('style', 'background-image:url()');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'container responsivegrid cmp--royalenfield--fixes-width');

    const divEl3 = document.createElement('div');
    divEl3.setAttribute('id', 'container-a81e7192df');
    divEl3.setAttribute('class', 'cmp-container');
    divEl3.setAttribute('style', 'background-image:url()');

    const divEl4 = document.createElement('div');
    divEl4.setAttribute('class', 'separator cmp-seperator-small-seperator');

    const divEl5 = document.createElement('div');
    divEl5.setAttribute('id', 'separator-f1c8b4a0bf');
    divEl5.setAttribute('class', 'cmp-separator');

    const hrEl = document.createElement('hr');
    hrEl.setAttribute('class', 'cmp-separator__horizontal-rule');
    divEl5.append(hrEl);
    divEl4.append(divEl5);
    divEl3.append(divEl4);

    const divEl6 = document.createElement('div');
    divEl6.setAttribute('class', 'text');

    const divEl7 = document.createElement('div');
    divEl7.setAttribute('id', 'text-3d049addda');
    divEl7.setAttribute('class', 'cmp-text');

    const h1El = document.createElement('h1');
    h1El.textContent = 'Legacy';
    divEl7.append(h1El);
    divEl6.append(divEl7);
    divEl3.append(divEl6);

    const divEl8 = document.createElement('div');
    divEl8.setAttribute('class', 'separator cmp-seperator-large-seperator');

    const divEl9 = document.createElement('div');
    divEl9.setAttribute('id', 'separator-f6fdf1e435');
    divEl9.setAttribute('class', 'cmp-separator');

    const hrEl2 = document.createElement('hr');
    hrEl2.setAttribute('class', 'cmp-separator__horizontal-rule');
    divEl9.append(hrEl2);
    divEl8.append(divEl9);
    divEl3.append(divEl8);

    const divEl10 = document.createElement('div');
    divEl10.setAttribute('class', 'separator cmp-separetor-mobile-hidden');

    const divEl11 = document.createElement('div');
    divEl11.setAttribute('id', 'separator-379b80be1c');
    divEl11.setAttribute('class', 'cmp-separator');

    const hrEl3 = document.createElement('hr');
    hrEl3.setAttribute('class', 'cmp-separator__horizontal-rule');
    divEl11.append(hrEl3);
    divEl10.append(divEl11);
    divEl3.append(divEl10);
    divEl2.append(divEl3);
    divEl.append(divEl2);

    const divEl12 = document.createElement('div');
    divEl12.setAttribute('class', 'swipercarousel carousel panelcontainer swiper-container--legacy');

    const divEl13 = document.createElement('div');
    divEl13.setAttribute('class', 'swiper  cmp-carousel');
    divEl13.setAttribute('role', 'group');
    divEl13.setAttribute('aria-roledescription', 'carousel');
    divEl13.setAttribute('data-cmp-is', 'carousel');
    divEl13.setAttribute('data-cmp-delay', '5000');

    const divEl14 = document.createElement('div');
    divEl14.setAttribute('class', 'cmp-carousel__core-actions');
    divEl13.append(divEl14);

    const divEl15 = document.createElement('div');
    divEl15.setAttribute('class', ' swiper-wrapper cmp-carousel__content');

    const divEl16 = document.createElement('div');
    divEl16.setAttribute('class', 'swiper-slide cmp-carousel__item cmp-carousel__item--active');
    divEl16.setAttribute('role', 'tabpanel');
    divEl16.setAttribute('aria-label', 'Slide 1 of 4');
    divEl16.setAttribute('data-cmp-hook-carousel', 'item');

    const divEl17 = document.createElement('div');
    divEl17.setAttribute('class', 'legacy');

    const divEl18 = document.createElement('div');
    divEl18.setAttribute('class', 'timeline-card');

    const divEl19 = document.createElement('div');
    divEl19.setAttribute('class', 'years');
    divEl19.setAttribute('data-year', '1901');
    divEl18.append(divEl19);

    const divEl20 = document.createElement('div');
    divEl20.setAttribute('class', 'timeline-card-overlay');
    divEl18.append(divEl20);

    const imgEl = document.createElement('img');
    imgEl.setAttribute('loading', 'lazy');
    imgEl.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/guerrilla-450/banners/desktop/guerrilla-450-new.webp');
    imgEl.setAttribute('title', 'legacy slide img');
    imgEl.setAttribute('alt', 'Royal Enfield 1901');
    imgEl.setAttribute('class', 'timeline-image');
    divEl18.append(imgEl);

    const imgEl2 = document.createElement('img');
    imgEl2.setAttribute('loading', 'lazy');
    imgEl2.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/guerrilla-450/banners/desktop/guerrilla-450-new.webp');
    imgEl2.setAttribute('title', 'legacy slide img');
    imgEl2.setAttribute('alt', 'Royal Enfield 1901');
    imgEl2.setAttribute('class', 'timeline-image-mobile');
    divEl18.append(imgEl2);

    const divEl21 = document.createElement('div');
    divEl21.setAttribute('class', 'timeline-content');

    const pEl = document.createElement('p');
    pEl.textContent = 'At the 1901 Stanley Cycle Show, the first Royal Enfield motor-powered cycles were showcased to the public. In November 2021, exactly 120 years later, a team of engineers from the ....';
    divEl21.append(pEl);

    const spanEl = document.createElement('span');
    spanEl.setAttribute('class', 'read-more');
    spanEl.textContent = 'READ MORE';
    divEl21.append(spanEl);
    divEl18.append(divEl21);
    divEl17.append(divEl18);

    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', '/etc.clientlibs/RE-Platform-Revamp/components/re-rides/legacy/clientlib-swiper.min.b026124b2e9f7330e0966aa1c2c746e1.js');
    divEl17.append(scriptEl);
    divEl16.append(divEl17);
    divEl15.append(divEl16);

    const divEl22 = document.createElement('div');
    divEl22.setAttribute('class', 'swiper-slide cmp-carousel__item');
    divEl22.setAttribute('role', 'tabpanel');
    divEl22.setAttribute('aria-label', 'Slide 2 of 4');
    divEl22.setAttribute('data-cmp-hook-carousel', 'item');

    const divEl23 = document.createElement('div');
    divEl23.setAttribute('class', 'legacy');

    const divEl24 = document.createElement('div');
    divEl24.setAttribute('class', 'timeline-card');

    const divEl25 = document.createElement('div');
    divEl25.setAttribute('class', 'years');
    divEl25.setAttribute('data-year', '1902');
    divEl24.append(divEl25);

    const divEl26 = document.createElement('div');
    divEl26.setAttribute('class', 'timeline-card-overlay');
    divEl24.append(divEl26);

    const imgEl3 = document.createElement('img');
    imgEl3.setAttribute('loading', 'lazy');
    imgEl3.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/shotgun-650/banner/desktop/experience-the-shotgun-650.webp');
    imgEl3.setAttribute('title', 'legacy slide img');
    imgEl3.setAttribute('alt', 'Royal Enfield 1901');
    imgEl3.setAttribute('class', 'timeline-image');
    divEl24.append(imgEl3);

    const imgEl4 = document.createElement('img');
    imgEl4.setAttribute('loading', 'lazy');
    imgEl4.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/shotgun-650/banner/desktop/experience-the-shotgun-650.webp');
    imgEl4.setAttribute('title', 'legacy slide img');
    imgEl4.setAttribute('alt', 'Royal Enfield 1901');
    imgEl4.setAttribute('class', 'timeline-image-mobile');
    divEl24.append(imgEl4);

    const divEl27 = document.createElement('div');
    divEl27.setAttribute('class', 'timeline-content');

    const pEl2 = document.createElement('p');
    pEl2.textContent = 'At the 1901 Stanley Cycle Show, the first Royal Enfield motor-powered cycles were showcased to the public. In November 2021, exactly 120 years later, a team of engineers from the..';
    divEl27.append(pEl2);

    const spanEl2 = document.createElement('span');
    spanEl2.setAttribute('class', 'read-more');
    spanEl2.textContent = 'READ MORE';
    divEl27.append(spanEl2);
    divEl24.append(divEl27);
    divEl23.append(divEl24);
    divEl22.append(divEl23);
    divEl15.append(divEl22);

    const divEl28 = document.createElement('div');
    divEl28.setAttribute('class', 'swiper-slide cmp-carousel__item');
    divEl28.setAttribute('role', 'tabpanel');
    divEl28.setAttribute('aria-label', 'Slide 3 of 4');
    divEl28.setAttribute('data-cmp-hook-carousel', 'item');

    const divEl29 = document.createElement('div');
    divEl29.setAttribute('class', 'legacy');

    const divEl30 = document.createElement('div');
    divEl30.setAttribute('class', 'timeline-card');

    const divEl31 = document.createElement('div');
    divEl31.setAttribute('class', 'years');
    divEl31.setAttribute('data-year', '1901');
    divEl30.append(divEl31);

    const divEl32 = document.createElement('div');
    divEl32.setAttribute('class', 'timeline-card-overlay');
    divEl30.append(divEl32);

    const imgEl5 = document.createElement('img');
    imgEl5.setAttribute('loading', 'lazy');
    imgEl5.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/bullet/gallery/thumbnail/new/gallery-1280x800-2.webp');
    imgEl5.setAttribute('title', 'legacy slide img');
    imgEl5.setAttribute('alt', 'Royal Enfield 1901');
    imgEl5.setAttribute('class', 'timeline-image');
    divEl30.append(imgEl5);

    const imgEl6 = document.createElement('img');
    imgEl6.setAttribute('loading', 'lazy');
    imgEl6.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/bullet/gallery/thumbnail/new/gallery-1280x800-2.webp');
    imgEl6.setAttribute('title', 'legacy slide img');
    imgEl6.setAttribute('alt', 'Royal Enfield 1901');
    imgEl6.setAttribute('class', 'timeline-image-mobile');
    divEl30.append(imgEl6);

    const divEl33 = document.createElement('div');
    divEl33.setAttribute('class', 'timeline-content');

    const pEl3 = document.createElement('p');
    pEl3.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu';
    divEl33.append(pEl3);

    const spanEl3 = document.createElement('span');
    spanEl3.setAttribute('class', 'read-more');
    spanEl3.textContent = 'READ MORE';
    divEl33.append(spanEl3);
    divEl30.append(divEl33);
    divEl29.append(divEl30);
    divEl28.append(divEl29);
    divEl15.append(divEl28);

    const divEl34 = document.createElement('div');
    divEl34.setAttribute('class', 'swiper-slide cmp-carousel__item');
    divEl34.setAttribute('role', 'tabpanel');
    divEl34.setAttribute('aria-label', 'Slide 4 of 4');
    divEl34.setAttribute('data-cmp-hook-carousel', 'item');

    const divEl35 = document.createElement('div');
    divEl35.setAttribute('class', 'legacy');

    const divEl36 = document.createElement('div');
    divEl36.setAttribute('class', 'timeline-card');

    const divEl37 = document.createElement('div');
    divEl37.setAttribute('class', 'years');
    divEl37.setAttribute('data-year', '1904');
    divEl36.append(divEl37);

    const divEl38 = document.createElement('div');
    divEl38.setAttribute('class', 'timeline-card-overlay');
    divEl36.append(divEl38);

    const imgEl7 = document.createElement('img');
    imgEl7.setAttribute('loading', 'lazy');
    imgEl7.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/guerrilla-450/highlights/ergonomics.webp');
    imgEl7.setAttribute('title', 'legacy slide img');
    imgEl7.setAttribute('alt', 'Royal Enfield 1901');
    imgEl7.setAttribute('class', 'timeline-image');
    divEl36.append(imgEl7);

    const imgEl8 = document.createElement('img');
    imgEl8.setAttribute('loading', 'lazy');
    imgEl8.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/guerrilla-450/highlights/ergonomics.webp');
    imgEl8.setAttribute('title', 'legacy slide img');
    imgEl8.setAttribute('alt', 'Royal Enfield 1901');
    imgEl8.setAttribute('class', 'timeline-image-mobile');
    divEl36.append(imgEl8);

    const divEl39 = document.createElement('div');
    divEl39.setAttribute('class', 'timeline-content');

    const pEl4 = document.createElement('p');
    pEl4.textContent = 'At the 1901 Stanley Cycle Show, the first Royal Enfield motor-powered cycles were showcased to the public. In November 2021, exactly 120 years later, a team of engineers from the ..';
    divEl39.append(pEl4);

    const spanEl4 = document.createElement('span');
    spanEl4.setAttribute('class', 'read-more');
    spanEl4.textContent = 'READ MORE';
    divEl39.append(spanEl4);
    divEl36.append(divEl39);
    divEl35.append(divEl36);
    divEl34.append(divEl35);
    divEl15.append(divEl34);

    const divEl40 = document.createElement('div');
    divEl40.setAttribute('class', 'cmp-carousel__actions');

    const buttonEl = document.createElement('button');
    buttonEl.setAttribute('class', 'cmp-carousel__action cmp-carousel__action--previous');
    buttonEl.setAttribute('role', 'button');
    buttonEl.setAttribute('aria-label', 'Previous');
    buttonEl.setAttribute('data-cmp-hook-carousel', 'previous');

    const spanEl5 = document.createElement('span');
    spanEl5.setAttribute('class', 'cmp-carousel__action-icon');
    buttonEl.append(spanEl5);

    const spanEl6 = document.createElement('span');
    spanEl6.setAttribute('class', 'cmp-carousel__action-text');
    spanEl6.textContent = 'Previous';
    buttonEl.append(spanEl6);
    divEl40.append(buttonEl);

    const buttonEl2 = document.createElement('button');
    buttonEl2.setAttribute('class', 'cmp-carousel__action cmp-carousel__action--next');
    buttonEl2.setAttribute('role', 'button');
    buttonEl2.setAttribute('aria-label', 'Next');
    buttonEl2.setAttribute('data-cmp-hook-carousel', 'next');

    const spanEl7 = document.createElement('span');
    spanEl7.setAttribute('class', 'cmp-carousel__action-icon');
    buttonEl2.append(spanEl7);

    const spanEl8 = document.createElement('span');
    spanEl8.setAttribute('class', 'cmp-carousel__action-text');
    spanEl8.textContent = 'Next';
    buttonEl2.append(spanEl8);
    divEl40.append(buttonEl2);

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

    const liEl4 = document.createElement('li');
    liEl4.setAttribute('class', 'cmp-carousel__indicator');
    liEl4.setAttribute('role', 'tab');
    liEl4.setAttribute('aria-label', 'Slide 4');
    liEl4.setAttribute('data-cmp-hook-carousel', 'indicator');
    olEl.append(liEl4);
    divEl40.append(olEl);
    divEl15.append(divEl40);
    divEl13.append(divEl15);

    const divEl41 = document.createElement('div');
    divEl41.setAttribute('class', 'swiper-pagination');
    divEl13.append(divEl41);

    const divEl42 = document.createElement('div');
    divEl42.setAttribute('class', 'swiper-button-prev');
    divEl13.append(divEl42);

    const divEl43 = document.createElement('div');
    divEl43.setAttribute('class', 'swiper-button-next');
    divEl13.append(divEl43);

    const divEl44 = document.createElement('div');
    divEl44.setAttribute('class', 'swiper-scrollbar');
    divEl13.append(divEl44);
    divEl12.append(divEl13);
    divEl.append(divEl12);

    const divEl45 = document.createElement('div');
    divEl45.setAttribute('class', 'separator cmp-seperator-small-seperator');

    const divEl46 = document.createElement('div');
    divEl46.setAttribute('id', 'separator-3ca5e67691');
    divEl46.setAttribute('class', 'cmp-separator');

    const hrEl4 = document.createElement('hr');
    hrEl4.setAttribute('class', 'cmp-separator__horizontal-rule');
    divEl46.append(hrEl4);
    divEl45.append(divEl46);
    divEl.append(divEl45);

    const divEl47 = document.createElement('div');
    divEl47.setAttribute('class', 'button');

    const aEl = document.createElement('a');
    aEl.setAttribute('id', 'button-b81235a3b1');
    aEl.setAttribute('class', 'cmp-button');
    aEl.setAttribute('href', '/in/en/rides-revamp-pages/rides-detail-page/');
    aEl.setAttribute('target', '_blank');

    const spanEl9 = document.createElement('span');
    spanEl9.setAttribute('class', 'cmp-button__text');
    spanEl9.textContent = 'EXPLORE';
    aEl.append(spanEl9);
    divEl47.append(aEl);
    divEl.append(divEl47);
    container.append(divEl);


    block.textContent = '';
    block.append(container);

    startCarousel();
}

function startCarousel() {
    const waitForSwiper = (callback) => (function checkSwiper() { window.Swiper ? callback() : setTimeout(checkSwiper, 100); })();

    waitForSwiper(() => {
        // after here 

        let windowWidth = window.innerWidth;
        let swiper2; // Declare Swiper instance globally
        const yourBreakpoint = 768; // Define breakpoint for responsive behavior



        const timelineContents = document.querySelectorAll(".timeline-content");

        timelineContents.forEach((content) => {
            const paragraph = content.querySelector("p");
            const readMore = content.querySelector(".read-more");

            // Apply initial styles for truncation (2 lines)
            paragraph.style.position = "relative";
            paragraph.style.overflow = "hidden";
            paragraph.style.display = "-webkit-box";
            paragraph.style.webkitLineClamp = "2";
            paragraph.style.webkitBoxOrient = "vertical";
            paragraph.style.margin = "0";
            paragraph.style.paddingRight = "60px"; // Space for "READ MORE"

            // Ensure the "READ MORE" button is visible and aligned
            readMore.style.position = "static";
            readMore.style.display = "inline"; // Allow it to flow with the text
            readMore.style.backgroundColor = "transparent"; // Optional for contrast
            readMore.style.cursor = "pointer";

            let valueExpand = true;

            // Add click event listener to expand or collapse the text
            readMore.addEventListener("click", () => {
                if (valueExpand) {
                    // Expand text
                    paragraph.style.webkitLineClamp = "unset";
                    paragraph.style.overflow = "visible";
                    readMore.textContent = "READ LESS";

                    // Move "READ LESS" to a new line
                    readMore.style.display = "block";
                    readMore.style.marginTop = "10px"; // Add spacing for better appearance
                } else {
                    // Collapse text
                    paragraph.style.webkitLineClamp = "2";
                    paragraph.style.overflow = "hidden";
                    readMore.textContent = "READ MORE";
                    readMore.style.display = "inline"; // Keep it inline for collapsed state
                }
                valueExpand = !valueExpand; // Correctly toggle the state here
            });
        });



        const readMoreButton = document.querySelectorAll(".read-more");

        // Function to initialize Swiper based on the window width
        const initializeSwiper = () => {
            const isSmallScreen = windowWidth <= yourBreakpoint;

            // Define common Swiper parameters
            const commonParams = {
                loop: true,
                allowTouchMove: false,
                navigation: {
                    nextEl: ".swiper-container--legacy .swiper-button-next",
                    prevEl: ".swiper-container--legacy .swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-container--legacy .swiper-pagination",
                    clickable: true,
                },
            };

            // Specific parameters for small and large screens
            const specificParams = isSmallScreen
                ? {
                    effect: "slide",
                    direction: "horizontal",
                }
                : {
                    effect: "cards",
                    direction: "vertical",
                    cardsEffect: {
                        rotate: 0,
                        perSlideRotate: 0,
                        perSlideOffset: 10,
                    },
                };

            // Merge common and specific parameters
            const params = { ...commonParams, ...specificParams };

            // Initialize Swiper or update the existing instance
            if (swiper2) {
                swiper2.destroy(true, true); // Destroy existing Swiper instance
            }
            swiper2 = new Swiper(".swiper-container--legacy .swiper", params);
        };

        // Add click event listeners for navigation buttons and initialize Swiper
        document.addEventListener("DOMContentLoaded", () => {
            // Initialize Swiper once the DOM is fully loaded
            initializeSwiper();

            const nextButton = document.querySelector(
                ".swiper-container--legacy .swiper-button-next"
            );
            const prevButton = document.querySelector(
                ".swiper-container--legacy .swiper-button-prev"
            );

            if (nextButton && prevButton) {
                prevButton.addEventListener("click", () => swiper2.slidePrev());
                nextButton.addEventListener("click", () => swiper2.slideNext());
            }
        });

        // Reinitialize Swiper on window resize
        window.addEventListener("resize", () => {
            windowWidth = window.innerWidth;
            initializeSwiper();
        });

        // Dispatch a resize event to ensure correct initial setup
        window.dispatchEvent(new Event("resize"));

        // Fancybox.bind("[data-fancybox]", {
        //     //
        // })

        // above here
    });
}
