export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'highlights-section');
    divEl.setAttribute('class', 'cmp-container');
    divEl.setAttribute('style', 'background-image:url()');
    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'whatstrending');
    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', 'whats-tranding-container whats-trending-cmp-desktop');
    divEl3.setAttribute('style', 'background-image: url();');
    const h1El = document.createElement('h1');
    h1El.textContent = 'In the headlights';
    divEl3.append(h1El);
    const divEl4 = document.createElement('div');
    divEl4.setAttribute('class', 'whats-tranding-swiper');
    const divEl5 = document.createElement('div');
    divEl5.setAttribute('class', 'swiper-wrapper');

    [...block.children].forEach((thum) => {
        console.log(thum);

        const divEl6 = document.createElement('div');
        divEl6.setAttribute('class', 'swiper-slide');
        const divEl7 = document.createElement('div');
        divEl7.setAttribute('class', 'thumbnail-image');
        const pictureEl = document.createElement('picture');
        const sourceEl = document.createElement('source');
        sourceEl.setAttribute('media', '(max-width: 799px)');
        sourceEl.setAttribute('srcset', thum.querySelector("div:nth-child(1) > picture > img")?.src);
        pictureEl.append(sourceEl);
        const sourceEl2 = document.createElement('source');
        sourceEl2.setAttribute('media', '(min-width: 800px)');
        sourceEl2.setAttribute('srcset', thum.querySelector("div:nth-child(1) > picture > img")?.src);
        pictureEl.append(sourceEl2);
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', thum.querySelector("div:nth-child(1) > picture > img")?.src);
        imgEl.setAttribute('alt', 'img1');
        pictureEl.append(imgEl);
        divEl7.append(pictureEl);
        divEl6.append(divEl7);
        const divEl8 = document.createElement('div');
        divEl8.setAttribute('class', 'trending-content-card');
        const divEl9 = document.createElement('div');
        divEl9.setAttribute('class', 'card-image');
        const pictureEl2 = document.createElement('picture');
        const sourceEl3 = document.createElement('source');
        sourceEl3.setAttribute('media', '(max-width: 799px)');
        sourceEl3.setAttribute('srcset', thum.querySelector("div:nth-child(1) > picture > img")?.src);
        pictureEl2.append(sourceEl3);
        const sourceEl4 = document.createElement('source');
        sourceEl4.setAttribute('media', '(min-width: 800px)');
        sourceEl4.setAttribute('srcset', thum.querySelector("div:nth-child(1) > picture > img")?.src);
        pictureEl2.append(sourceEl4);
        const imgEl2 = document.createElement('img');
        imgEl2.setAttribute('src', thum.querySelector("div:nth-child(1) > picture > img")?.src);
        imgEl2.setAttribute('alt', 'img1');
        pictureEl2.append(imgEl2);
        divEl9.append(pictureEl2);
        const imgEl3 = document.createElement('img');
        imgEl3.setAttribute('class', 'logoimg');
        imgEl3.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/hunter-350/logo/hunter-350-logo.png');
        imgEl3.setAttribute('alt', '');
        divEl9.append(imgEl3);
        const h3El = document.createElement('h3');
        h3El.setAttribute('class', 'card-title');
        h3El.textContent = (thum.querySelector("div:nth-child(2) > h3").innerText);
        divEl9.append(h3El);
        divEl8.append(divEl9);
        const divEl10 = document.createElement('div');
        divEl10.setAttribute('class', 'card-description');
        const pEl = document.createElement('p');
        pEl.textContent = (thum.querySelector("div:nth-child(2) > p").innerText);
        divEl10.append(pEl);
        divEl8.append(divEl10);
        const divEl11 = document.createElement('div');
        divEl11.setAttribute('class', 'cta-buttons');
        const buttonEl = document.createElement('button');
        buttonEl.setAttribute('data-attr-target', '_blank');
        buttonEl.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
        buttonEl.setAttribute('class', 'viewfinanceoption');
        buttonEl.textContent = (thum.querySelector("div:nth-child(2) > p:nth-child(3) > a:nth-child(1)").innerText);
        divEl11.append(buttonEl);
        const buttonEl2 = document.createElement('button');
        buttonEl2.setAttribute('data-attr-target', '_blank');
        buttonEl2.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
        buttonEl2.setAttribute('class', 'calculateEMI');
        buttonEl2.textContent = 'VIEW MOTORCYCLE';
        divEl11.append(buttonEl2);
        divEl8.append(divEl11);
        divEl6.append(divEl8);
        divEl5.append(divEl6);

    })


    divEl4.append(divEl5);
    const divEl42 = document.createElement('div');
    divEl42.setAttribute('class', 'swiper-pagination');
    divEl4.append(divEl42);
    const divEl43 = document.createElement('div');
    divEl43.setAttribute('class', 'swiper-button-prev');
    const svgEl = document.createElement('svg');
    svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgEl.setAttribute('fill', 'none');
    svgEl.setAttribute('viewBox', '0 0 24 24');
    svgEl.setAttribute('stroke-width', '1.5');
    svgEl.setAttribute('stroke', 'currentColor');
    svgEl.setAttribute('class', 'w-6 h-6');
    const pathEl = document.createElement('path');
    pathEl.setAttribute('stroke-linecap', 'round');
    pathEl.setAttribute('stroke-linejoin', 'round');
    pathEl.setAttribute('d', 'M15.75 19.5L8.25 12l7.5-7.5');
    svgEl.append(pathEl);
    divEl43.append(svgEl);
    divEl4.append(divEl43);
    const divEl44 = document.createElement('div');
    divEl44.setAttribute('class', 'swiper-button-next');
    const svgEl2 = document.createElement('svg');
    svgEl2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgEl2.setAttribute('fill', 'none');
    svgEl2.setAttribute('viewBox', '0 0 24 24');
    svgEl2.setAttribute('stroke-width', '1.5');
    svgEl2.setAttribute('stroke', 'currentColor');
    svgEl2.setAttribute('class', 'w-6 h-6');
    const pathEl2 = document.createElement('path');
    pathEl2.setAttribute('stroke-linecap', 'round');
    pathEl2.setAttribute('stroke-linejoin', 'round');
    pathEl2.setAttribute('d', 'M8.25 4.5l7.5 7.5-7.5 7.5');
    svgEl2.append(pathEl2);
    divEl44.append(svgEl2);
    divEl4.append(divEl44);
    divEl3.append(divEl4);
    divEl2.append(divEl3);
    const divEl45 = document.createElement('div');
    divEl45.setAttribute('class', 'whats-tranding-container whats-trending-cmp-mobile');
    divEl45.setAttribute('style', 'background-image: url();');
    const h1El2 = document.createElement('h1');
    h1El2.textContent = 'In the headlights';
    divEl45.append(h1El2);
    const divEl46 = document.createElement('div');
    divEl46.setAttribute('class', 'whats-tranding-swiper');
    const divEl47 = document.createElement('div');
    divEl47.setAttribute('class', 'swiper-wrapper');
    const divEl48 = document.createElement('div');
    divEl48.setAttribute('class', 'swiper-slide');
    const divEl49 = document.createElement('div');
    divEl49.setAttribute('class', 'thumbnail-image');
    const pictureEl13 = document.createElement('picture');
    const sourceEl25 = document.createElement('source');
    sourceEl25.setAttribute('media', '(max-width: 799px)');
    sourceEl25.setAttribute('srcset', '.././images/wingman.webp');
    pictureEl13.append(sourceEl25);
    const sourceEl26 = document.createElement('source');
    sourceEl26.setAttribute('media', '(min-width: 800px)');
    sourceEl26.setAttribute('srcset', '.././images/wingman.webp');
    pictureEl13.append(sourceEl26);
    const imgEl16 = document.createElement('img');
    imgEl16.setAttribute('src', '.././images/wingman.webp');
    imgEl16.setAttribute('alt', 'img1');
    pictureEl13.append(imgEl16);
    divEl49.append(pictureEl13);
    divEl48.append(divEl49);
    const divEl50 = document.createElement('div');
    divEl50.setAttribute('class', 'trending-content-card');
    const divEl51 = document.createElement('div');
    divEl51.setAttribute('class', 'card-image');
    const pictureEl14 = document.createElement('picture');
    const sourceEl27 = document.createElement('source');
    sourceEl27.setAttribute('media', '(max-width: 799px)');
    sourceEl27.setAttribute('srcset', '.././images/wingman.webp');
    pictureEl14.append(sourceEl27);
    const sourceEl28 = document.createElement('source');
    sourceEl28.setAttribute('media', '(min-width: 800px)');
    sourceEl28.setAttribute('srcset', '.././images/wingman.webp');
    pictureEl14.append(sourceEl28);
    const imgEl17 = document.createElement('img');
    imgEl17.setAttribute('src', '.././images/wingman.webp');
    imgEl17.setAttribute('alt', 'img1');
    pictureEl14.append(imgEl17);
    divEl51.append(pictureEl14);
    const imgEl18 = document.createElement('img');
    imgEl18.setAttribute('class', 'logoimg');
    imgEl18.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/hunter-350/logo/hunter-350-logo.png');
    imgEl18.setAttribute('alt', '');
    divEl51.append(imgEl18);
    const h3El7 = document.createElement('h3');
    h3El7.setAttribute('class', 'card-title');
    h3El7.textContent = 'A SHOT OF STYLE, TORQUE, FUN';
    divEl51.append(h3El7);
    divEl50.append(divEl51);
    const divEl52 = document.createElement('div');
    divEl52.setAttribute('class', 'card-description');
    const pEl7 = document.createElement('p');
    pEl7.textContent = 'Own a Hunter 350 with low down-payment starting at just new in the part of development';
    divEl52.append(pEl7);
    divEl50.append(divEl52);
    const divEl53 = document.createElement('div');
    divEl53.setAttribute('class', 'cta-buttons');
    const buttonEl13 = document.createElement('button');
    buttonEl13.setAttribute('data-attr-target', '_blank');
    buttonEl13.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl13.setAttribute('class', 'viewfinanceoption');
    buttonEl13.textContent = 'READ ARTICLE';
    divEl53.append(buttonEl13);
    const buttonEl14 = document.createElement('button');
    buttonEl14.setAttribute('data-attr-target', '_blank');
    buttonEl14.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl14.setAttribute('class', 'calculateEMI');
    buttonEl14.textContent = 'VIEW MOTORCYCLE';
    divEl53.append(buttonEl14);
    divEl50.append(divEl53);
    divEl48.append(divEl50);
    divEl47.append(divEl48);
    const divEl54 = document.createElement('div');
    divEl54.setAttribute('class', 'swiper-slide');
    const divEl55 = document.createElement('div');
    divEl55.setAttribute('class', 'thumbnail-image');
    const pictureEl15 = document.createElement('picture');
    const sourceEl29 = document.createElement('source');
    sourceEl29.setAttribute('media', '(max-width: 799px)');
    sourceEl29.setAttribute('srcset', '../../images/tripper-dash.webp');
    pictureEl15.append(sourceEl29);
    const sourceEl30 = document.createElement('source');
    sourceEl30.setAttribute('media', '(min-width: 800px)');
    sourceEl30.setAttribute('srcset', '../../images/tripper-dash.webp');
    pictureEl15.append(sourceEl30);
    const imgEl19 = document.createElement('img');
    imgEl19.setAttribute('src', '../../images/tripper-dash.webp');
    imgEl19.setAttribute('alt', 'img2');
    pictureEl15.append(imgEl19);
    divEl55.append(pictureEl15);
    divEl54.append(divEl55);
    const divEl56 = document.createElement('div');
    divEl56.setAttribute('class', 'trending-content-card');
    const divEl57 = document.createElement('div');
    divEl57.setAttribute('class', 'card-image');
    const pictureEl16 = document.createElement('picture');
    const sourceEl31 = document.createElement('source');
    sourceEl31.setAttribute('media', '(max-width: 799px)');
    sourceEl31.setAttribute('srcset', '../../images/tripper-dash.webp');
    pictureEl16.append(sourceEl31);
    const sourceEl32 = document.createElement('source');
    sourceEl32.setAttribute('media', '(min-width: 800px)');
    sourceEl32.setAttribute('srcset', '../../images/tripper-dash.webp');
    pictureEl16.append(sourceEl32);
    const imgEl20 = document.createElement('img');
    imgEl20.setAttribute('src', '../../images/tripper-dash.webp');
    imgEl20.setAttribute('alt', 'img2');
    pictureEl16.append(imgEl20);
    divEl57.append(pictureEl16);
    const imgEl21 = document.createElement('img');
    imgEl21.setAttribute('class', 'logoimg');
    imgEl21.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/hunter-350/hunter-350-og.png');
    imgEl21.setAttribute('alt', '');
    divEl57.append(imgEl21);
    const h3El8 = document.createElement('h3');
    h3El8.setAttribute('class', 'card-title');
    h3El8.textContent = 'A SHOT OF STYLE, TORQUE, FUN';
    divEl57.append(h3El8);
    divEl56.append(divEl57);
    const divEl58 = document.createElement('div');
    divEl58.setAttribute('class', 'card-description');
    const pEl8 = document.createElement('p');
    pEl8.textContent = 'Own a Hunter 350 with low down-payment starting at just';
    divEl58.append(pEl8);
    divEl56.append(divEl58);
    const divEl59 = document.createElement('div');
    divEl59.setAttribute('class', 'cta-buttons');
    const buttonEl15 = document.createElement('button');
    buttonEl15.setAttribute('data-attr-target', '_blank');
    buttonEl15.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl15.setAttribute('class', 'viewfinanceoption');
    buttonEl15.textContent = 'READ ARTICLE';
    divEl59.append(buttonEl15);
    const buttonEl16 = document.createElement('button');
    buttonEl16.setAttribute('data-attr-target', '_blank');
    buttonEl16.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl16.setAttribute('class', 'calculateEMI');
    buttonEl16.textContent = 'VIEW MOTORCYCLE';
    divEl59.append(buttonEl16);
    divEl56.append(divEl59);
    divEl54.append(divEl56);
    divEl47.append(divEl54);
    const divEl60 = document.createElement('div');
    divEl60.setAttribute('class', 'swiper-slide');
    const divEl61 = document.createElement('div');
    divEl61.setAttribute('class', 'thumbnail-image');
    const pictureEl17 = document.createElement('picture');
    const sourceEl33 = document.createElement('source');
    sourceEl33.setAttribute('media', '(max-width: 799px)');
    sourceEl33.setAttribute('srcset', '.././images/switch-modes.webp');
    pictureEl17.append(sourceEl33);
    const sourceEl34 = document.createElement('source');
    sourceEl34.setAttribute('media', '(min-width: 800px)');
    sourceEl34.setAttribute('srcset', '.././images/switch-modes.webp');
    pictureEl17.append(sourceEl34);
    const imgEl22 = document.createElement('img');
    imgEl22.setAttribute('src', '.././images/switch-modes.webp');
    imgEl22.setAttribute('alt', 'img3 ');
    pictureEl17.append(imgEl22);
    divEl61.append(pictureEl17);
    divEl60.append(divEl61);
    const divEl62 = document.createElement('div');
    divEl62.setAttribute('class', 'trending-content-card');
    const divEl63 = document.createElement('div');
    divEl63.setAttribute('class', 'card-image');
    const pictureEl18 = document.createElement('picture');
    const sourceEl35 = document.createElement('source');
    sourceEl35.setAttribute('media', '(max-width: 799px)');
    sourceEl35.setAttribute('srcset', '.././images/switch-modes.webp');
    pictureEl18.append(sourceEl35);
    const sourceEl36 = document.createElement('source');
    sourceEl36.setAttribute('media', '(min-width: 800px)');
    sourceEl36.setAttribute('srcset', '.././images/switch-modes.webp');
    pictureEl18.append(sourceEl36);
    const imgEl23 = document.createElement('img');
    imgEl23.setAttribute('src', '.././images/switch-modes.webp');
    imgEl23.setAttribute('alt', 'img3 ');
    pictureEl18.append(imgEl23);
    divEl63.append(pictureEl18);
    const imgEl24 = document.createElement('img');
    imgEl24.setAttribute('class', 'logoimg');
    imgEl24.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/hunter-350/logo/hunter-350-logo.png');
    imgEl24.setAttribute('alt', '');
    divEl63.append(imgEl24);
    const h3El9 = document.createElement('h3');
    h3El9.setAttribute('class', 'card-title');
    h3El9.textContent = 'A SHOT OF STYLE, TORQUE, FUN';
    divEl63.append(h3El9);
    divEl62.append(divEl63);
    const divEl64 = document.createElement('div');
    divEl64.setAttribute('class', 'card-description');
    const pEl9 = document.createElement('p');
    pEl9.textContent = 'Own a Hunter 350 with low down-payment starting at just';
    divEl64.append(pEl9);
    divEl62.append(divEl64);
    const divEl65 = document.createElement('div');
    divEl65.setAttribute('class', 'cta-buttons');
    const buttonEl17 = document.createElement('button');
    buttonEl17.setAttribute('data-attr-target', '_blank');
    buttonEl17.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl17.setAttribute('class', 'viewfinanceoption');
    buttonEl17.textContent = 'READ ARTICLE';
    divEl65.append(buttonEl17);
    const buttonEl18 = document.createElement('button');
    buttonEl18.setAttribute('data-attr-target', '_blank');
    buttonEl18.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl18.setAttribute('class', 'calculateEMI');
    buttonEl18.textContent = 'VIEW MOTORCYCLE';
    divEl65.append(buttonEl18);
    divEl62.append(divEl65);
    divEl60.append(divEl62);
    divEl47.append(divEl60);
    const divEl66 = document.createElement('div');
    divEl66.setAttribute('class', 'swiper-slide');
    const divEl67 = document.createElement('div');
    divEl67.setAttribute('class', 'thumbnail-image');
    const pictureEl19 = document.createElement('picture');
    const sourceEl37 = document.createElement('source');
    sourceEl37.setAttribute('media', '(max-width: 799px)');
    sourceEl37.setAttribute('srcset', '../../images/tripper-dash.webp');
    pictureEl19.append(sourceEl37);
    const sourceEl38 = document.createElement('source');
    sourceEl38.setAttribute('media', '(min-width: 800px)');
    sourceEl38.setAttribute('srcset', '../../images/tripper-dash.webp');
    pictureEl19.append(sourceEl38);
    const imgEl25 = document.createElement('img');
    imgEl25.setAttribute('src', '../../images/tripper-dash.webp');
    imgEl25.setAttribute('alt', 'img4');
    pictureEl19.append(imgEl25);
    divEl67.append(pictureEl19);
    divEl66.append(divEl67);
    const divEl68 = document.createElement('div');
    divEl68.setAttribute('class', 'trending-content-card');
    const divEl69 = document.createElement('div');
    divEl69.setAttribute('class', 'card-image');
    const pictureEl20 = document.createElement('picture');
    const sourceEl39 = document.createElement('source');
    sourceEl39.setAttribute('media', '(max-width: 799px)');
    sourceEl39.setAttribute('srcset', '../../images/tripper-dash.webp');
    pictureEl20.append(sourceEl39);
    const sourceEl40 = document.createElement('source');
    sourceEl40.setAttribute('media', '(min-width: 800px)');
    sourceEl40.setAttribute('srcset', '../../images/tripper-dash.webp');
    pictureEl20.append(sourceEl40);
    const imgEl26 = document.createElement('img');
    imgEl26.setAttribute('src', '../../images/tripper-dash.webp');
    imgEl26.setAttribute('alt', 'img4');
    pictureEl20.append(imgEl26);
    divEl69.append(pictureEl20);
    const h3El10 = document.createElement('h3');
    h3El10.setAttribute('class', 'card-title');
    h3El10.textContent = 'A SHOT OF STYLE, TORQUE, FUN';
    divEl69.append(h3El10);
    divEl68.append(divEl69);
    const divEl70 = document.createElement('div');
    divEl70.setAttribute('class', 'card-description');
    const pEl10 = document.createElement('p');
    pEl10.textContent = 'Own a Hunter 350 with low down-payment starting at just';
    divEl70.append(pEl10);
    divEl68.append(divEl70);
    const divEl71 = document.createElement('div');
    divEl71.setAttribute('class', 'cta-buttons');
    const buttonEl19 = document.createElement('button');
    buttonEl19.setAttribute('data-attr-target', '_blank');
    buttonEl19.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl19.setAttribute('class', 'viewfinanceoption');
    buttonEl19.textContent = 'READ ARTICLE';
    divEl71.append(buttonEl19);
    const buttonEl20 = document.createElement('button');
    buttonEl20.setAttribute('data-attr-target', '_blank');
    buttonEl20.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl20.setAttribute('class', 'calculateEMI');
    buttonEl20.textContent = 'VIEW MOTORCYCLE';
    divEl71.append(buttonEl20);
    divEl68.append(divEl71);
    divEl66.append(divEl68);
    divEl47.append(divEl66);
    const divEl72 = document.createElement('div');
    divEl72.setAttribute('class', 'swiper-slide');
    const divEl73 = document.createElement('div');
    divEl73.setAttribute('class', 'thumbnail-image');
    const pictureEl21 = document.createElement('picture');
    const sourceEl41 = document.createElement('source');
    sourceEl41.setAttribute('media', '(max-width: 799px)');
    sourceEl41.setAttribute('srcset', '.././images/wingman.webp');
    pictureEl21.append(sourceEl41);
    const sourceEl42 = document.createElement('source');
    sourceEl42.setAttribute('media', '(min-width: 800px)');
    sourceEl42.setAttribute('srcset', '.././images/wingman.webp');
    pictureEl21.append(sourceEl42);
    const imgEl27 = document.createElement('img');
    imgEl27.setAttribute('src', '.././images/wingman.webp');
    imgEl27.setAttribute('alt', 'img5');
    pictureEl21.append(imgEl27);
    divEl73.append(pictureEl21);
    divEl72.append(divEl73);
    const divEl74 = document.createElement('div');
    divEl74.setAttribute('class', 'trending-content-card');
    const divEl75 = document.createElement('div');
    divEl75.setAttribute('class', 'card-image');
    const pictureEl22 = document.createElement('picture');
    const sourceEl43 = document.createElement('source');
    sourceEl43.setAttribute('media', '(max-width: 799px)');
    sourceEl43.setAttribute('srcset', '.././images/wingman.webp');
    pictureEl22.append(sourceEl43);
    const sourceEl44 = document.createElement('source');
    sourceEl44.setAttribute('media', '(min-width: 800px)');
    sourceEl44.setAttribute('srcset', '.././images/wingman.webp');
    pictureEl22.append(sourceEl44);
    const imgEl28 = document.createElement('img');
    imgEl28.setAttribute('src', '.././images/wingman.webp');
    imgEl28.setAttribute('alt', 'img5');
    pictureEl22.append(imgEl28);
    divEl75.append(pictureEl22);
    const h3El11 = document.createElement('h3');
    h3El11.setAttribute('class', 'card-title');
    h3El11.textContent = 'A SHOT OF STYLE, TORQUE, FUN';
    divEl75.append(h3El11);
    divEl74.append(divEl75);
    const divEl76 = document.createElement('div');
    divEl76.setAttribute('class', 'card-description');
    const pEl11 = document.createElement('p');
    pEl11.textContent = 'Own a Hunter 350 with low down-payment starting at just';
    divEl76.append(pEl11);
    divEl74.append(divEl76);
    const divEl77 = document.createElement('div');
    divEl77.setAttribute('class', 'cta-buttons');
    const buttonEl21 = document.createElement('button');
    buttonEl21.setAttribute('data-attr-target', '_blank');
    buttonEl21.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl21.setAttribute('class', 'viewfinanceoption');
    buttonEl21.textContent = 'READ ARTICLE';
    divEl77.append(buttonEl21);
    const buttonEl22 = document.createElement('button');
    buttonEl22.setAttribute('data-attr-target', '_blank');
    buttonEl22.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl22.setAttribute('class', 'calculateEMI');
    buttonEl22.textContent = 'VIEW MOTORCYCLE';
    divEl77.append(buttonEl22);
    divEl74.append(divEl77);
    divEl72.append(divEl74);
    divEl47.append(divEl72);
    const divEl78 = document.createElement('div');
    divEl78.setAttribute('class', 'swiper-slide');
    const divEl79 = document.createElement('div');
    divEl79.setAttribute('class', 'thumbnail-image');
    const pictureEl23 = document.createElement('picture');
    const sourceEl45 = document.createElement('source');
    sourceEl45.setAttribute('media', '(max-width: 799px)');
    sourceEl45.setAttribute('srcset', '.././images/switch-modes.webp');
    pictureEl23.append(sourceEl45);
    const sourceEl46 = document.createElement('source');
    sourceEl46.setAttribute('media', '(min-width: 800px)');
    sourceEl46.setAttribute('srcset', '.././images/switch-modes.webp');
    pictureEl23.append(sourceEl46);
    const imgEl29 = document.createElement('img');
    imgEl29.setAttribute('src', '.././images/switch-modes.webp');
    imgEl29.setAttribute('alt', 'img5');
    pictureEl23.append(imgEl29);
    divEl79.append(pictureEl23);
    divEl78.append(divEl79);
    const divEl80 = document.createElement('div');
    divEl80.setAttribute('class', 'trending-content-card');
    const divEl81 = document.createElement('div');
    divEl81.setAttribute('class', 'card-image');
    const pictureEl24 = document.createElement('picture');
    const sourceEl47 = document.createElement('source');
    sourceEl47.setAttribute('media', '(max-width: 799px)');
    sourceEl47.setAttribute('srcset', '.././images/switch-modes.webp');
    pictureEl24.append(sourceEl47);
    const sourceEl48 = document.createElement('source');
    sourceEl48.setAttribute('media', '(min-width: 800px)');
    sourceEl48.setAttribute('srcset', '.././images/switch-modes.webp');
    pictureEl24.append(sourceEl48);
    const imgEl30 = document.createElement('img');
    imgEl30.setAttribute('src', '.././images/switch-modes.webp');
    imgEl30.setAttribute('alt', 'img5');
    pictureEl24.append(imgEl30);
    divEl81.append(pictureEl24);
    const h3El12 = document.createElement('h3');
    h3El12.setAttribute('class', 'card-title');
    h3El12.textContent = 'A SHOT OF STYLE, TORQUE, FUN';
    divEl81.append(h3El12);
    divEl80.append(divEl81);
    const divEl82 = document.createElement('div');
    divEl82.setAttribute('class', 'card-description');
    const pEl12 = document.createElement('p');
    pEl12.textContent = 'Own a Hunter 350 with low down-payment starting at just';
    divEl82.append(pEl12);

    divEl80.append(divEl82);
    const divEl83 = document.createElement('div');
    divEl83.setAttribute('class', 'cta-buttons');
    const buttonEl23 = document.createElement('button');
    buttonEl23.setAttribute('data-attr-target', '_blank');
    buttonEl23.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl23.setAttribute('class', 'viewfinanceoption');
    buttonEl23.textContent = 'READ ARTICLES';
    divEl83.append(buttonEl23);
    const buttonEl24 = document.createElement('button');
    buttonEl24.setAttribute('data-attr-target', '_blank');
    buttonEl24.setAttribute('data-attr-link', 'https://stagecdn.royalenfield.com/content/royal-enfield/in/en/rides-revamp-pages/rides-detail-page.html');
    buttonEl24.setAttribute('class', 'calculateEMI');
    buttonEl24.textContent = 'VIEW MOTORCYCLE BIKES';
    divEl83.append(buttonEl24);
    divEl80.append(divEl83);
    divEl78.append(divEl80);
    divEl47.append(divEl78);
    divEl46.append(divEl47);
    const divEl84 = document.createElement('div');
    divEl84.setAttribute('class', 'swiper-pagination');
    divEl46.append(divEl84);
    const divEl85 = document.createElement('div');
    divEl85.setAttribute('class', 'swiper-button-prev');
    const svgEl3 = document.createElement('svg');
    svgEl3.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgEl3.setAttribute('fill', 'none');
    svgEl3.setAttribute('viewBox', '0 0 24 24');
    svgEl3.setAttribute('stroke-width', '1.5');
    svgEl3.setAttribute('stroke', 'currentColor');
    svgEl3.setAttribute('class', 'w-6 h-6');
    const pathEl3 = document.createElement('path');
    pathEl3.setAttribute('stroke-linecap', 'round');
    pathEl3.setAttribute('stroke-linejoin', 'round');
    pathEl3.setAttribute('d', 'M15.75 19.5L8.25 12l7.5-7.5');
    svgEl3.append(pathEl3);
    divEl85.append(svgEl3);
    divEl46.append(divEl85);
    const divEl86 = document.createElement('div');
    divEl86.setAttribute('class', 'swiper-button-next');
    const svgEl4 = document.createElement('svg');
    svgEl4.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgEl4.setAttribute('fill', 'none');
    svgEl4.setAttribute('viewBox', '0 0 24 24');
    svgEl4.setAttribute('stroke-width', '1.5');
    svgEl4.setAttribute('stroke', 'currentColor');
    svgEl4.setAttribute('class', 'w-6 h-6');
    const pathEl4 = document.createElement('path');
    pathEl4.setAttribute('stroke-linecap', 'round');
    pathEl4.setAttribute('stroke-linejoin', 'round');
    pathEl4.setAttribute('d', 'M8.25 4.5l7.5 7.5-7.5 7.5');
    svgEl4.append(pathEl4);
    divEl86.append(svgEl4);
    divEl46.append(divEl86);
    divEl45.append(divEl46);
    divEl2.append(divEl45);
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

        console.log("Whats trending component");
        new Swiper(".whats-tranding-swiper", {
            slidesPerView: 2.4,
            spaceBetween: 50,
            centeredSlides: !0,
            preventClicks: !0,
            loop: !0,
            on: {
                init: function () {
                    document.querySelectorAll(".swiper-slide").forEach((function (e) {
                        e.classList.add("changed")
                    }
                    ))
                },
                slideChangeTransitionStart: function () {
                    document.querySelectorAll(".swiper-slide").forEach((function (e) {
                        e.classList.add("changing"),
                            e.classList.remove("changed")
                    }
                    ))
                },
                slideChangeTransitionEnd: function () {
                    document.querySelectorAll(".swiper-slide").forEach((function (e) {
                        e.classList.remove("changing"),
                            e.classList.add("changed")
                    }
                    ))
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        }),
            new Swiper(".whats-tranding-swiper-mob", {
                slidesPerView: 1.3,
                spaceBetween: 25,
                centeredSlides: !0,
                preventClicks: !0,
                loop: !0,
                on: {
                    init: function () {
                        document.querySelectorAll(".swiper-slide").forEach((function (e) {
                            e.classList.add("changed")
                        }
                        ))
                    },
                    slideChangeTransitionStart: function () {
                        document.querySelectorAll(".swiper-slide").forEach((function (e) {
                            e.classList.add("changing"),
                                e.classList.remove("changed")
                        }
                        ))
                    },
                    slideChangeTransitionEnd: function () {
                        document.querySelectorAll(".swiper-slide").forEach((function (e) {
                            e.classList.remove("changing"),
                                e.classList.add("changed")
                        }
                        ))
                    }
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            })

        // above here
    });
}
