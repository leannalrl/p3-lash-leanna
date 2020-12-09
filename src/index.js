import {header} from './modules/header';
import {footer} from './modules/footer';

class App{
  constructor(){
    this.renderTemplate();
  }

  renderTemplate(){
    const template = `
      <h1>${header.title}</h1>
      <footer>${footer.footerContent}</footer>
    `;

    document.body.innerHTML = template;
  }
}

new App;
