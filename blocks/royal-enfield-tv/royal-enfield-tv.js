export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const h1El = document.createElement('h1');
    h1El.textContent = 'Royal Enfield TV';
    container.append(h1El);

    const divEl = document.createElement('div');
    divEl.setAttribute('class', 'video-container');

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', 'https://stagecdn.royalenfield.com/content/dam/royal-enfield/motorcycles/guerrilla-450/highlights/ergonomics.webp');
    imgEl.setAttribute('alt', 'Motoverse 2023');
    imgEl.setAttribute('class', 'video-thumbnail');
    divEl.append(imgEl);

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'video-overlay');

    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', 'video-header');

    const h2El = document.createElement('h2');
    h2El.setAttribute('class', 'video-title');
    h2El.textContent = 'Motoverse 2023 Main Event';
    divEl3.append(h2El);

    const divEl4 = document.createElement('div');
    divEl4.setAttribute('class', 'video-stats');

    const spanEl = document.createElement('span');
    spanEl.textContent = '👁️ 156';
    divEl4.append(spanEl);
    divEl3.append(divEl4);
    divEl2.append(divEl3);

    const divEl5 = document.createElement('div');
    divEl5.setAttribute('class', 'reactions');

    const divEl6 = document.createElement('div');
    divEl6.setAttribute('class', 'reaction');
    divEl6.textContent = '';
    divEl5.append(divEl6);

    const divEl7 = document.createElement('div');
    divEl7.setAttribute('class', 'reaction');
    divEl7.textContent = '❤️';
    divEl5.append(divEl7);

    const divEl8 = document.createElement('div');
    divEl8.setAttribute('class', 'reaction');
    divEl8.textContent = '';
    divEl5.append(divEl8);
    divEl2.append(divEl5);

    const divEl9 = document.createElement('div');
    divEl9.setAttribute('class', 'video-controls');

    const spanEl2 = document.createElement('span');
    spanEl2.setAttribute('class', 'live-indicator');
    spanEl2.textContent ='LIVE';
    divEl9.append(spanEl2);

    const divEl10 = document.createElement('div');
    divEl10.setAttribute('class', 'progress-bar');

    const divEl11 = document.createElement('div');
    divEl11.setAttribute('class', 'progress');
    divEl10.append(divEl11);
    divEl9.append(divEl10);

    const buttonEl = document.createElement('button');
    buttonEl.setAttribute('class', 'settings-button');
    buttonEl.textContent = '❤️';
    divEl9.append(buttonEl);
    divEl2.append(divEl9);
    divEl.append(divEl2);
    container.append(divEl);


    block.textContent = '';
    block.append(container);
}