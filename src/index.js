console.log("index.js");
import './styles/main.scss';
import { Footer, runSample } from './app/footer';
let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);

runSample();