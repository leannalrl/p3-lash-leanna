import {header} from './modules/header';
import {lunch} from './modules/lunch-generator';
import {footer} from './modules/footer';

class App{
  constructor(){
    this.renderTemplate();
    lunch.button_action();
  }

  renderTemplate(){
    const template = `
      <h1>${header.title}</h1>
      <img id="logo" src="images/logo.png" alt="logo">
      <br>
      <button class="button primary" id="lunch">Get Lunch</button>
      <p id="message">${lunch.lunchContent}</p>
      <footer>${footer.footercontent}</footer>
    `;

    document.body.innerHTML = template;
  }
}

new App;
