import scry from './library/scry';

import './modules/navbar';
import './modules/romance-captions';
import './modules/ft-carousel';
import './modules/downtown-map';
import './modules/contact-form';
import './modules/unit-table';


const scryTriggers = document.querySelectorAll('[data-scry]');
for(let i = 0; i < scryTriggers.length; i++) {
  scryTriggers[i].addEventListener('click', function(event) {
    event.preventDefault();
    scry(this);
  });
}
