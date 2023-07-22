import 'normalize.css';
import './styles.css';

console.log('a');

window.addEventListener('DOMContentLoaded',() => {
    const saverCoverIMG = document.querySelector('.screen-saver') as HTMLElement;
    const dekstopCoverIMG = document.querySelector('.dekstop') as HTMLElement;

    dekstopCoverIMG.style.display = 'none';

});
