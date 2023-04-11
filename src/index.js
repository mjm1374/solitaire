import kat from './assets/kat.jpg';

import './style.css';

const title = document.createElement('h3');
title.textContent = 'JS-Solitaire V0.02';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = kat;

page.appendChild(img);
