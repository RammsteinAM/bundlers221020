import App from './App';
import 'styles/style.less';

const root = document.getElementById("root");
const app = new App("The App is working!");
const html = app.render();
root.innerHTML = html;