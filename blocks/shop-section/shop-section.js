export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const divEl = document.createElement('div');
    divEl.setAttribute('class', 'shop-section');
    const h2El = document.createElement('h2');
    h2El.setAttribute('class', 'shop-section__title');
    h2El.textContent = 'Shop';
    divEl.append(h2El);
    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'shop-section-swiper swiper');
    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', 'shop-section__cards swiper-wrapper');

    [...block.children].forEach((shsc) => {
        console.log(shsc);

    const divEl4 = document.createElement('div');
    divEl4.setAttribute('class', 'shop-card swiper-slide');
    const divEl5 = document.createElement('div');
    divEl5.setAttribute('class', 'shop-card__image-wrapper');
    const imgEl = document.createElement('img');
    imgEl.setAttribute('loading', 'lazy');
        imgEl.setAttribute('src', shsc.querySelector("div:nth-child(1) > picture > img").src);
    imgEl.setAttribute('alt', 'jvf');
    imgEl.setAttribute('class', 'shop-card__image');
    imgEl.setAttribute('title', 'shop-card__image');
    divEl5.append(imgEl);
    const divEl6 = document.createElement('div');
    divEl6.setAttribute('class', 'shop-card__image-overlay');
    divEl5.append(divEl6);
    divEl4.append(divEl5);
    const divEl7 = document.createElement('div');
    divEl7.setAttribute('class', 'shop-card__content');
    const spanEl = document.createElement('span');
    const h3El = document.createElement('h3');
    h3El.setAttribute('class', 'shop-card__title');
        h3El.textContent = (shsc.querySelector("div:nth-child(2) > h3").textContent);
    spanEl.append(h3El);
    divEl7.append(spanEl);
    const pEl = document.createElement('p');
    pEl.setAttribute('class', 'shop-card__description');
        pEl.textContent = (shsc.querySelector("div:nth-child(2) > p").textContent);
    divEl7.append(pEl);
    const divEl8 = document.createElement('div');
    divEl8.setAttribute('class', 'shop-card-action__button');
    const aEl = document.createElement('a');
    aEl.setAttribute('href', 'https://stagecdn.royalenfield.com/in/en/rides-revamp-pages/rides-detail-page/');
    aEl.setAttribute('class', 'shop-card__button');
    aEl.setAttribute('target', '_blank');
    aEl.setAttribute('rel', 'nofollow');
    aEl.setAttribute('title', 'card-details-button');
        aEl.textContent = (shsc.querySelector("div:nth-child(2) > p > a").textContent);
    divEl8.append(aEl);
    divEl7.append(divEl8);
    divEl4.append(divEl7);
    divEl3.append(divEl4);

})
    
    divEl2.append(divEl3);
    divEl.append(divEl2);
    container.append(divEl);
    block.textContent = '';
    block.append(container);
}