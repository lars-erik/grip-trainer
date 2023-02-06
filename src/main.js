import "./node_modules/bootstrap/js/src/tab";

import styles from './main.scss?inline';

let el = document.createElement("style");
el.innerHTML = styles;
document.head.append(el);

class Flute extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <svg version="1.2" baseProfile="tiny" class="Flute" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 253.8 64" overflow="visible"
            xml:space="preserve">
            <rect class="Body" x="8.4" y="24.3" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="234.2"
                height="18.7" />
            <path class="Mouthpiece" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M22.8,20.3h42.6c2.8,0,5.1,2.3,5.1,5.1v12.7
        c0,5.7-4.6,10.3-10.3,10.3H27.9c-5.6,0-10.2-4.6-10.2-10.2V25.4C17.8,22.6,20,20.3,22.8,20.3z" />
            <ellipse class="Hole" stroke="#000000" stroke-miterlimit="10" cx="43.8" cy="34.4" rx="9.9" ry="6" />
            <circle class="L1A" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="88.8" cy="43" r="6.9" />
            <circle class="L2" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="125.1" cy="33.7" r="6.9" />
            <circle class="L3" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="142.1" cy="33.7" r="6.9" />
            <circle class="L4" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="159.1" cy="33.7" r="6.9" />
            <circle class="R2" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="184" cy="33.7" r="6.9" />
            <circle class="R3" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="201" cy="33.7" r="6.9" />
            <circle class="R4" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="218" cy="33.7" r="6.9" />
            <rect class="L1B" x="95.7" y="36.1" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="13.8"
                height="13.8" />
            <path class="L5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M172.2,32.3c0,0-0.4-14-3.6-21.6c-3.1-7.6-8.7-4.4-8.9,0
        c-0.2,4.4,3.1,4.4,5.1,4.2C167,17.6,169.7,20.5,172.2,32.3z" />
            <path class="R5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M237.3,29.9c0,0-0.4,14-3.6,21.6s-8.7,4.4-8.9,0
        s3.1-4.4,5.1-4.2C232.2,44.6,234.9,41.7,237.3,29.9z" />
        </svg>
        `;
    }
}

customElements.define("gt-flute", Flute);

const grips = ["D", "Eb", "E", "F", "Gb", "A", "Bb", "B", "C2", "Db2", "D2"];

const answerEl = document.getElementById("answer");
const qEl = document.getElementById("question");
const optionEls = [
    document.getElementById("optionA"),
    document.getElementById("optionB"),
    document.getElementById("optionC")
];

const randIndex = (arr) => Math.floor(Math.random()*arr.length);

let qidx = randIndex(grips);
let q = grips[qidx];
let stalling = false;

const newQuestion = () => {
    stalling = false;
    answerEl.className = ""

    qidx = randIndex(grips);
    q = grips[qidx];

    qEl.innerHTML = q;

    const deck = grips.slice();
    deck.splice(deck.indexOf(q), 1);
    const options = [q]
        .concat(deck.splice(randIndex(deck)))
        .concat(deck.splice(randIndex(deck)));

    optionEls[0].className = options[0];
    optionEls[1].className = options[1];
    optionEls[2].className = options[2];

}

window.checkAnswer = (el) => {
    if (stalling) return;

    console.log(el, q);
    if (el.className == q) {
        stalling = true;
        answerEl.className = "correct";
        setTimeout(newQuestion, 2000);
    } else {
        answerEl.className = "wrong"
    }
}

newQuestion();