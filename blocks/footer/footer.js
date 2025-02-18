export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'footer-grid');

  const divEl2 = document.createElement('div');
  divEl2.setAttribute('class', 'footer-section');

  const h2El = document.createElement('h2');
  h2El.textContent = 'Motorcycle';
  divEl2.append(h2El);

  const ulEl = document.createElement('ul');
  ulEl.setAttribute('class', 'footer-links');

  const liEl = document.createElement('li');

  const aEl = document.createElement('a');
  aEl.setAttribute('href', '#');
  aEl.textContent = 'Bullet';
  liEl.append(aEl);
  ulEl.append(liEl);

  const liEl2 = document.createElement('li');

  const aEl2 = document.createElement('a');
  aEl2.setAttribute('href', '#');
  aEl2.textContent = 'Classic 350';
  liEl2.append(aEl2);
  ulEl.append(liEl2);

  const liEl3 = document.createElement('li');

  const aEl3 = document.createElement('a');
  aEl3.setAttribute('href', '#');
  aEl3.textContent = 'Meteor 350';
  liEl3.append(aEl3);
  ulEl.append(liEl3);

  const liEl4 = document.createElement('li');

  const aEl4 = document.createElement('a');
  aEl4.setAttribute('href', '#');
  aEl4.textContent = 'Super Meteor 650';
  liEl4.append(aEl4);
  ulEl.append(liEl4);

  const liEl5 = document.createElement('li');

  const aEl5 = document.createElement('a');
  aEl5.setAttribute('href', '#');
  aEl5.textContent = 'Himalayan';
  liEl5.append(aEl5);
  ulEl.append(liEl5);

  const liEl6 = document.createElement('li');

  const aEl6 = document.createElement('a');
  aEl6.setAttribute('href', '#');
  aEl6.textContent = 'Scram 411';
  liEl6.append(aEl6);
  ulEl.append(liEl6);

  const liEl7 = document.createElement('li');

  const aEl7 = document.createElement('a');
  aEl7.setAttribute('href', '#');
  aEl7.textContent = 'Hunter 350';
  liEl7.append(aEl7);
  ulEl.append(liEl7);

  const liEl8 = document.createElement('li');

  const aEl8 = document.createElement('a');
  aEl8.setAttribute('href', '#');
  aEl8.textContent = 'Interceptor 650';
  liEl8.append(aEl8);
  ulEl.append(liEl8);

  const liEl9 = document.createElement('li');

  const aEl9 = document.createElement('a');
  aEl9.setAttribute('href', '#');
  aEl9.textContent = 'Continental GT 650';
  liEl9.append(aEl9);
  ulEl.append(liEl9);
  divEl2.append(ulEl);
  divEl.append(divEl2);

  const divEl3 = document.createElement('div');
  divEl3.setAttribute('class', 'footer-section');

  const h2El2 = document.createElement('h2');
  h2El2.textContent = 'Shop';
  divEl3.append(h2El2);

  const ulEl2 = document.createElement('ul');
  ulEl2.setAttribute('class', 'footer-links');

  const liEl10 = document.createElement('li');

  const aEl10 = document.createElement('a');
  aEl10.setAttribute('href', '#');
  aEl10.textContent = 'Accessories Configurator';
  liEl10.append(aEl10);
  ulEl2.append(liEl10);

  const liEl11 = document.createElement('li');

  const aEl11 = document.createElement('a');
  aEl11.setAttribute('href', '#');
  aEl11.textContent = 'Genuine Motorcycle Accessories';
  liEl11.append(aEl11);
  ulEl2.append(liEl11);

  const liEl12 = document.createElement('li');

  const aEl12 = document.createElement('a');
  aEl12.setAttribute('href', '#');
  aEl12.textContent = 'Apparel';
  liEl12.append(aEl12);
  ulEl2.append(liEl12);

  const liEl13 = document.createElement('li');

  const aEl13 = document.createElement('a');
  aEl13.setAttribute('href', '#');
  aEl13.textContent = 'Extended Warranty';
  liEl13.append(aEl13);
  ulEl2.append(liEl13);

  const liEl14 = document.createElement('li');

  const aEl14 = document.createElement('a');
  aEl14.setAttribute('href', '#');
  aEl14.textContent = 'Annual Maintenance Contract';
  liEl14.append(aEl14);
  ulEl2.append(liEl14);

  const liEl15 = document.createElement('li');

  const aEl15 = document.createElement('a');
  aEl15.setAttribute('href', '#');
  aEl15.textContent = 'Road Side Assistance';
  liEl15.append(aEl15);
  ulEl2.append(liEl15);

  const liEl16 = document.createElement('li');

  const aEl16 = document.createElement('a');
  aEl16.setAttribute('href', '#');
  aEl16.textContent = 'RE Own';
  liEl16.append(aEl16);
  ulEl2.append(liEl16);

  const liEl17 = document.createElement('li');

  const aEl17 = document.createElement('a');
  aEl17.setAttribute('href', '#');
  aEl17.textContent = 'Experiences';
  liEl17.append(aEl17);
  ulEl2.append(liEl17);

  const liEl18 = document.createElement('li');

  const aEl18 = document.createElement('a');
  aEl18.setAttribute('href', '#');
  aEl18.textContent = 'RE Kart';
  liEl18.append(aEl18);
  ulEl2.append(liEl18);

  const liEl19 = document.createElement('li');

  const aEl19 = document.createElement('a');
  aEl19.setAttribute('href', '#');
  aEl19.textContent = 'Rentals';
  liEl19.append(aEl19);
  ulEl2.append(liEl19);
  divEl3.append(ulEl2);
  divEl.append(divEl3);

  const divEl4 = document.createElement('div');
  divEl4.setAttribute('class', 'footer-section');

  const h2El3 = document.createElement('h2');
  h2El3.textContent = 'Service';
  divEl4.append(h2El3);

  const ulEl3 = document.createElement('ul');
  ulEl3.setAttribute('class', 'footer-links');

  const liEl20 = document.createElement('li');

  const aEl20 = document.createElement('a');
  aEl20.setAttribute('href', '#');
  aEl20.textContent = 'Book A Service';
  liEl20.append(aEl20);
  ulEl3.append(liEl20);

  const liEl21 = document.createElement('li');

  const aEl21 = document.createElement('a');
  aEl21.setAttribute('href', '#');
  aEl21.textContent = 'Service Cost Calculator';
  liEl21.append(aEl21);
  ulEl3.append(liEl21);

  const liEl22 = document.createElement('li');

  const aEl22 = document.createElement('a');
  aEl22.setAttribute('href', '#');
  aEl22.textContent = 'Explore Genuine Spares';
  liEl22.append(aEl22);
  ulEl3.append(liEl22);

  const liEl23 = document.createElement('li');

  const aEl23 = document.createElement('a');
  aEl23.setAttribute('href', '#');
  aEl23.textContent = 'Locate Us';
  liEl23.append(aEl23);
  ulEl3.append(liEl23);

  const liEl24 = document.createElement('li');

  const aEl24 = document.createElement('a');
  aEl24.setAttribute('href', '#');
  aEl24.textContent = 'Ride sure';
  liEl24.append(aEl24);
  ulEl3.append(liEl24);

  const liEl25 = document.createElement('li');

  const aEl25 = document.createElement('a');
  aEl25.setAttribute('href', '#');
  aEl25.textContent = 'Owners Manual';
  liEl25.append(aEl25);
  ulEl3.append(liEl25);

  const liEl26 = document.createElement('li');

  const aEl26 = document.createElement('a');
  aEl26.setAttribute('href', '#');
  aEl26.textContent = 'Quick Start Guide';
  liEl26.append(aEl26);
  ulEl3.append(liEl26);

  const liEl27 = document.createElement('li');

  const aEl27 = document.createElement('a');
  aEl27.setAttribute('href', '#');
  aEl27.textContent = 'Maintenance';
  liEl27.append(aEl27);
  ulEl3.append(liEl27);
  divEl4.append(ulEl3);
  divEl.append(divEl4);

  const divEl5 = document.createElement('div');
  divEl5.setAttribute('class', 'footer-section');

  const h2El4 = document.createElement('h2');
  h2El4.textContent = 'Ride!';
  divEl5.append(h2El4);

  const ulEl4 = document.createElement('ul');
  ulEl4.setAttribute('class', 'footer-links');

  const liEl28 = document.createElement('li');

  const aEl28 = document.createElement('a');
  aEl28.setAttribute('href', '#');
  aEl28.textContent = 'Rides & Events';
  liEl28.append(aEl28);
  ulEl4.append(liEl28);

  const liEl29 = document.createElement('li');

  const aEl29 = document.createElement('a');
  aEl29.setAttribute('href', '#');
  aEl29.textContent = 'Rentals';
  liEl29.append(aEl29);
  ulEl4.append(liEl29);

  const liEl30 = document.createElement('li');

  const aEl30 = document.createElement('a');
  aEl30.setAttribute('href', '#');
  aEl30.textContent = 'Tours';
  liEl30.append(aEl30);
  ulEl4.append(liEl30);

  const liEl31 = document.createElement('li');

  const aEl31 = document.createElement('a');
  aEl31.setAttribute('href', '#');
  aEl31.textContent = 'Rider Academy';
  liEl31.append(aEl31);
  ulEl4.append(liEl31);

  const liEl32 = document.createElement('li');

  const aEl32 = document.createElement('a');
  aEl32.setAttribute('href', '#');
  aEl32.textContent = 'Discover Locations';
  liEl32.append(aEl32);
  ulEl4.append(liEl32);

  const liEl33 = document.createElement('li');

  const aEl33 = document.createElement('a');
  aEl33.setAttribute('href', '#');
  aEl33.textContent = 'Royal Enfield App';
  liEl33.append(aEl33);
  ulEl4.append(liEl33);

  const liEl34 = document.createElement('li');

  const aEl34 = document.createElement('a');
  aEl34.setAttribute('href', '#');
  aEl34.textContent = 'Tripper';
  liEl34.append(aEl34);
  ulEl4.append(liEl34);
  divEl5.append(ulEl4);
  divEl.append(divEl5);

  const divEl6 = document.createElement('div');
  divEl6.setAttribute('class', 'footer-section');

  const h2El5 = document.createElement('h2');
  h2El5.textContent = 'MotoCulture';
  divEl6.append(h2El5);

  const ulEl5 = document.createElement('ul');
  ulEl5.setAttribute('class', 'footer-links');

  const liEl35 = document.createElement('li');

  const aEl35 = document.createElement('a');
  aEl35.setAttribute('href', '#');
  aEl35.textContent = 'Motorsports';
  liEl35.append(aEl35);
  ulEl5.append(liEl35);

  const liEl36 = document.createElement('li');

  const aEl36 = document.createElement('a');
  aEl36.setAttribute('href', '#');
  aEl36.textContent = 'RE TV';
  liEl36.append(aEl36);
  ulEl5.append(liEl36);

  const liEl37 = document.createElement('li');

  const aEl37 = document.createElement('a');
  aEl37.setAttribute('href', '#');
  aEl37.textContent = 'Custom World';
  liEl37.append(aEl37);
  ulEl5.append(liEl37);

  const liEl38 = document.createElement('li');

  const aEl38 = document.createElement('a');
  aEl38.setAttribute('href', '#');
  aEl38.textContent = 'Art of Motorcycling';
  liEl38.append(aEl38);
  ulEl5.append(liEl38);

  const liEl39 = document.createElement('li');

  const aEl39 = document.createElement('a');
  aEl39.setAttribute('href', '#');
  aEl39.textContent = 'Bullet Museum';
  liEl39.append(aEl39);
  ulEl5.append(liEl39);

  const liEl40 = document.createElement('li');

  const aEl40 = document.createElement('a');
  aEl40.setAttribute('href', '#');
  aEl40.textContent = 'RE Gallery';
  liEl40.append(aEl40);
  ulEl5.append(liEl40);
  divEl6.append(ulEl5);
  divEl.append(divEl6);

  const divEl7 = document.createElement('div');
  divEl7.setAttribute('class', 'footer-section');

  const h2El6 = document.createElement('h2');
  h2El6.textContent = 'Reach Us';
  divEl7.append(h2El6);

  const ulEl6 = document.createElement('ul');
  ulEl6.setAttribute('class', 'footer-links');

  const liEl41 = document.createElement('li');

  const aEl41 = document.createElement('a');
  aEl41.setAttribute('href', '#');
  aEl41.textContent = 'Locate Us';
  liEl41.append(aEl41);
  ulEl6.append(liEl41);

  const liEl42 = document.createElement('li');

  const aEl42 = document.createElement('a');
  aEl42.setAttribute('href', '#');
  aEl42.textContent = 'Contact Us';
  liEl42.append(aEl42);
  ulEl6.append(liEl42);

  const liEl43 = document.createElement('li');

  const aEl43 = document.createElement('a');
  aEl43.setAttribute('href', '#');
  aEl43.textContent = 'Become a Dealer';
  liEl43.append(aEl43);
  ulEl6.append(liEl43);

  const liEl44 = document.createElement('li');

  const aEl44 = document.createElement('a');
  aEl44.setAttribute('href', '#');
  aEl44.textContent = 'Become a Distributor';
  liEl44.append(aEl44);
  ulEl6.append(liEl44);

  const liEl45 = document.createElement('li');

  const aEl45 = document.createElement('a');
  aEl45.setAttribute('href', '#');
  aEl45.textContent = 'FAQs';
  liEl45.append(aEl45);
  ulEl6.append(liEl45);
  divEl7.append(ulEl6);
  divEl.append(divEl7);

  const divEl8 = document.createElement('div');
  divEl8.setAttribute('class', 'footer-section');

  const h2El7 = document.createElement('h2');
  h2El7.textContent = 'About';
  divEl8.append(h2El7);

  const ulEl7 = document.createElement('ul');
  ulEl7.setAttribute('class', 'footer-links');

  const liEl46 = document.createElement('li');

  const aEl46 = document.createElement('a');
  aEl46.setAttribute('href', '#');
  aEl46.textContent = 'News & Media';
  liEl46.append(aEl46);
  ulEl7.append(liEl46);

  const liEl47 = document.createElement('li');

  const aEl47 = document.createElement('a');
  aEl47.setAttribute('href', '#');
  aEl47.textContent = 'Media Kit';
  liEl47.append(aEl47);
  ulEl7.append(liEl47);

  const liEl48 = document.createElement('li');

  const aEl48 = document.createElement('a');
  aEl48.setAttribute('href', '#');
  aEl48.textContent = 'Press Release';
  liEl48.append(aEl48);
  ulEl7.append(liEl48);

  const liEl49 = document.createElement('li');

  const aEl49 = document.createElement('a');
  aEl49.setAttribute('href', '#');
  aEl49.textContent = 'Blogs';
  liEl49.append(aEl49);
  ulEl7.append(liEl49);

  const liEl50 = document.createElement('li');

  const aEl50 = document.createElement('a');
  aEl50.setAttribute('href', '#');
  aEl50.textContent = 'History - Since 1901';
  liEl50.append(aEl50);
  ulEl7.append(liEl50);

  const liEl51 = document.createElement('li');

  const aEl51 = document.createElement('a');
  aEl51.setAttribute('href', '#');
  aEl51.textContent = 'CSR Initiatives';
  liEl51.append(aEl51);
  ulEl7.append(liEl51);

  const liEl52 = document.createElement('li');

  const aEl52 = document.createElement('a');
  aEl52.setAttribute('href', '#');
  aEl52.textContent = 'Life at RE - Join Us';
  liEl52.append(aEl52);
  ulEl7.append(liEl52);

  const liEl53 = document.createElement('li');

  const aEl53 = document.createElement('a');
  aEl53.setAttribute('href', '#');
  aEl53.textContent = 'Eicher Motors';
  liEl53.append(aEl53);
  ulEl7.append(liEl53);
  divEl8.append(ulEl7);
  divEl.append(divEl8);

  const divEl9 = document.createElement('div');
  divEl9.setAttribute('class', 'footer-section');

  const h2El8 = document.createElement('h2');
  h2El8.textContent = 'Own a RE';
  divEl9.append(h2El8);

  const ulEl8 = document.createElement('ul');
  ulEl8.setAttribute('class', 'footer-links');

  const liEl54 = document.createElement('li');

  const aEl54 = document.createElement('a');
  aEl54.setAttribute('href', '#');
  aEl54.textContent = 'Help Me Choose';
  liEl54.append(aEl54);
  ulEl8.append(liEl54);

  const liEl55 = document.createElement('li');

  const aEl55 = document.createElement('a');
  aEl55.setAttribute('href', '#');
  aEl55.textContent = 'Make it Yours';
  liEl55.append(aEl55);
  ulEl8.append(liEl55);

  const liEl56 = document.createElement('li');

  const aEl56 = document.createElement('a');
  aEl56.setAttribute('href', '#');
  aEl56.textContent = 'Finance';
  liEl56.append(aEl56);
  ulEl8.append(liEl56);

  const liEl57 = document.createElement('li');

  const aEl57 = document.createElement('a');
  aEl57.setAttribute('href', '#');
  aEl57.textContent = 'RE Own';
  liEl57.append(aEl57);
  ulEl8.append(liEl57);
  divEl9.append(ulEl8);
  divEl.append(divEl9);
  container.append(divEl);

  const divEl10 = document.createElement('div');
  divEl10.setAttribute('class', 'footer-contact');

  const pEl = document.createElement('p');
  pEl.textContent = 'For further queries or appointments reach us at:';
  divEl10.append(pEl);

  const divEl11 = document.createElement('div');
  divEl11.setAttribute('class', 'contact-info');

  const aEl58 = document.createElement('a');
  aEl58.setAttribute('href', 'tel:18002100007');
  aEl58.textContent = '1800 210 0007';
  divEl11.append(aEl58);

  const aEl59 = document.createElement('a');
  aEl59.setAttribute('href', 'mailto:support@royalenfield.com');
  aEl59.textContent = 'support@royalenfield.com';
  divEl11.append(aEl59);
  divEl10.append(divEl11);
  container.append(divEl10);
  const divEl12 = document.createElement('div');
  divEl12.setAttribute('class', 'social-links');

  const socialLinks = [
    { href: '#', ariaLabel: 'Facebook', imgSrc: 'https://img.icons8.com/m_sharp/512/FFFFFF/facebook-new.png', alt: 'Facebook' },
    { href: '#', ariaLabel: 'Twitter', imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuMDU4IDMuNDFjLTEuODA3Ljc2Ny0yLjk5NSAyLjQ1My0zLjA1NiA0LjM4TDExIDcuOTcybC0uMjQzLS4wMjNDOC4zNjUgNy42OCA2LjI1OSA2LjQzNyA0LjgxMyA0LjQxOGExIDEgMCAwIDAtMS42ODUuMDkybC0uMDk3LjE4NmwtLjA0OS4wOTljLS43MTkgMS40ODUtMS4xOSAzLjI5LTEuMDE3IDUuMjAzbC4wMy4yNzNjLjI4MyAyLjI2MyAxLjUgNC4yMTUgMy43NzkgNS42NzlsLjE3My4xMDdsLS4wODEuMDQzYy0xLjMxNS42NjMtMi41MTguOTUyLTMuODI3LjljLTEuMDU2LS4wNC0xLjQ0NiAxLjM3Mi0uNTE4IDEuODc4YzMuNTk4IDEuOTYxIDcuNDYxIDIuNTY2IDEwLjc5MiAxLjZjNC4wNi0xLjE4IDcuMTUyLTQuMjIzIDguMzM1LTguNDMzbC4xMjctLjQ5NWMuMjM4LS45OTMuMzcyLTIuMDA2LjQwMS0zLjAyNGwuMDAzLS4zMzJsLjM5My0uNzc5bC40NC0uODYybC4yMTQtLjQzNGwuMTE4LS4yNDdjLjI2NS0uNTY1LjQ1Ni0xLjAzMy41NzQtMS40M2wuMDE0LS4wNTZsLjAwOC0uMDE4Yy4yMi0uNTkzLS4xNjYtMS4zNTgtLjk0MS0xLjM1OGwtLjEyMi4wMDdhMSAxIDAgMCAwLS4yMzEuMDU3bC0uMDg2LjAzOGE4IDggMCAwIDEtLjg4LjM2bC0uMzU2LjExNWwtLjI3MS4wOGwtLjc3Mi4yMTRjLTEuMzM2LTEuMTE4LTMuMTQ0LTEuMjU0LTUuMDEyLS41NTRsLS4yMTEuMDg0eiIvPjwvc3ZnPg==', alt: 'Twitter' },
    { href: '#', ariaLabel: 'YouTube', imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTggM2E1IDUgMCAwIDEgNSA1djhhNSA1IDAgMCAxLTUgNUg2YTUgNSAwIDAgMS01LTVWOGE1IDUgMCAwIDEgNS01ek05IDl2NmExIDEgMCAwIDAgMS41MTQuODU3bDUtM2ExIDEgMCAwIDAgMC0xLjcxNGwtNS0zQTEgMSAwIDAgMCA5IDkiLz48L3N2Zz4=', alt: 'YouTube' },
    { href: '#', ariaLabel: 'Instagram', imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNNCA4YTQgNCAwIDAgMSA0LTRoOGE0IDQgMCAwIDEgNCA0djhhNCA0IDAgMCAxLTQgNEg4YTQgNCAwIDAgMS00LTR6Ii8+PHBhdGggZD0iTTkgMTJhMyAzIDAgMSAwIDYgMGEzIDMgMCAwIDAtNiAwbTcuNS00LjV2LjAxIi8+PC9nPjwvc3ZnPg==', alt: 'Instagram' },
    { href: '#', ariaLabel: 'LinkedIn', imgSrc: 'https://img.icons8.com/m_rounded/512/FFFFFF/linkedin.png', alt: 'LinkedIn' },
  ];

  socialLinks.forEach(({ href, ariaLabel, imgSrc, alt }) => {
    const aEl = document.createElement('a');
    aEl.setAttribute('href', href);
    aEl.setAttribute('aria-label', ariaLabel);

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', imgSrc);
    imgEl.setAttribute('alt', alt);
    imgEl.setAttribute('class', 'social-icon'); // Optional: add a class for styling

    aEl.append(imgEl);
    divEl12.append(aEl);
  });

  container.append(divEl12);


  const divEl13 = document.createElement('div');
  divEl13.setAttribute('class', 'footer-bottom');

  const divEl14 = document.createElement('div');
  divEl14.setAttribute('class', 'legal-links');

  const aEl65 = document.createElement('a');
  aEl65.setAttribute('href', '#');
  aEl65.textContent = 'Private Import Policy';
  divEl14.append(aEl65);

  const aEl66 = document.createElement('a');
  aEl66.setAttribute('href', '#');
  aEl66.textContent = 'Privacy Policy';
  divEl14.append(aEl66);

  const aEl67 = document.createElement('a');
  aEl67.setAttribute('href', '#');
  aEl67.textContent = 'Terms & Conditions';
  divEl14.append(aEl67);

  const aEl68 = document.createElement('a');
  aEl68.setAttribute('href', '#');
  aEl68.textContent = 'Cookies';
  divEl14.append(aEl68);
  divEl13.append(divEl14);

  const pEl2 = document.createElement('p');
  pEl2.textContent = '© 2023 Royal Enfield    *T&C apply. Images shown here may differ from actual product.';
  divEl13.append(pEl2);
  container.append(divEl13);


  block.textContent = '';
  block.append(container);
}