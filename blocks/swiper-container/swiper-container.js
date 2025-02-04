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
    divEl13.setAttribute('class', 'swiper cmp-carousel');
    divEl13.setAttribute('role', 'group');
    divEl13.setAttribute('aria-roledescription', 'carousel');
    divEl13.setAttribute('data-cmp-is', 'carousel');
    divEl13.setAttribute('data-cmp-delay', '5000');
    const divEl14 = document.createElement('div');
    divEl14.setAttribute('class', 'cmp-carousel__core-actions');
    divEl13.append(divEl14);
    const divEl15 = document.createElement('div');
    divEl15.setAttribute('class', 'swiper-pagination');
    divEl13.append(divEl15);
    const divEl16 = document.createElement('div');
    divEl16.setAttribute('class', 'swiper-button-prev');
    divEl13.append(divEl16);
    const divEl17 = document.createElement('div');
    divEl17.setAttribute('class', 'swiper-button-next');
    divEl13.append(divEl17);
    const divEl18 = document.createElement('div');
    divEl18.setAttribute('class', 'swiper-scrollbar');
    divEl13.append(divEl18);
    divEl12.append(divEl13);
    divEl.append(divEl12);
    const divEl19 = document.createElement('div');
    divEl19.setAttribute('class', 'separator cmp-seperator-small-seperator');
    const divEl20 = document.createElement('div');
    divEl20.setAttribute('id', 'separator-3ca5e67691');
    divEl20.setAttribute('class', 'cmp-separator');
    const hrEl4 = document.createElement('hr');
    hrEl4.setAttribute('class', 'cmp-separator__horizontal-rule');
    divEl20.append(hrEl4);
    divEl19.append(divEl20);
    divEl.append(divEl19);
    const divEl21 = document.createElement('div');
    divEl21.setAttribute('class', 'button');
    const aEl = document.createElement('a');
    aEl.setAttribute('id', 'button-b81235a3b1');
    aEl.setAttribute('class', 'cmp-button');
    aEl.setAttribute('href', '/in/en/rides-revamp-pages/rides-detail-page/');
    aEl.setAttribute('target', '_blank');
    const spanEl = document.createElement('span');
    spanEl.setAttribute('class', 'cmp-button__text');
    spanEl.textContent = 'EXPLORE';
    aEl.append(spanEl);
    divEl21.append(aEl);
    divEl.append(divEl21);
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
