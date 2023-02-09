import "./node_modules/bootstrap/js/src/tab";

import styles from './main.scss?inline';

let el = document.createElement("style");
el.innerHTML = styles;
document.head.append(el);

class GUI extends HTMLElement {
    current = null;

    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <slot></slot>
        `;

        this.addEventListener('navigate', this.navigate);
        window.addEventListener('popstate', () => this.back());

        this.navigateToHash();
    }

    hideAll() {
        Array.from(this.children).forEach(n =>
            {
                n.classList.remove("d-flex");
                n.classList.add("d-none");
            });
    }

    navigate(evt) {
        const target = evt.detail.to;
        const targetSelector = "#" + target;
        const el = this.querySelector(targetSelector);

        if (!el) {
            return;
        }

        this.hideAll();

        el.classList.add("d-flex");
        el.classList.remove("d-none");

        if (!evt.detail.noPush) {
            window.history.pushState([], null, './' + targetSelector);
        }
    }

    navigateToHash() {
        // TODO: Inform whitch one is first
        const defaultTarget = this.querySelector("#frontpage");
        const hashTarget = this.querySelector(window.location.hash || '#nothing');

        this.hideAll();

        if (hashTarget) {
            this.navigate({detail:{to: hashTarget.id, noPush: true}});
        } else {
            this.current = defaultTarget;
            this.current.classList.add('d-flex');
            this.current.classList.remove('d-none');
        }
    }

    back(evt) {
        this.navigateToHash();
    }
}

customElements.define("gt-gui", GUI);

class Frontpage extends HTMLElement {
    playButton = null;
    chartButton = null;

    constructor() {
        super();
        this.innerHTML = `
        <gt-flute class="logo-flute"></gt-flute>
        <h1 class="mt-2">Grep-trenær'n</h1>
        <div class="d-grid gap-2 col-xl-2 col-lg-4 col-md-6 col-12 mx-auto mt-4">
            <button type="button" name="game" class="btn btn-lg btn-outline-dark">Spill</button>
            <button type="button" name="chart" class="btn btn-lg btn-outline-dark">Greptabell</button>
        </div>
        `;

        this.playButton = this.querySelector('[name="game"]');
        this.chartButton = this.querySelector('[name="chart"]');

        this.playButton.addEventListener('click', this.game);
        this.chartButton.addEventListener('click', this.chart);
    }

    game() {
        this.dispatchEvent(new CustomEvent('navigate', {bubbles: true, detail: { to: 'game' }}));
    }

    chart() {
        this.dispatchEvent(new CustomEvent('navigate', {bubbles: true, detail: { to: 'chart' }}));
    }
}

customElements.define("gt-frontpage", Frontpage);

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

class Chart extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="justify-content-start">
            <button name="back" type="button" class="btn btn-lg btn-outline-dark">&lt;</button>
        </div>
        <h1 class="mt-5">Fløytegrep</h1>
        <table class="grip-table col-xxl-4 col-xl-6 col-md-8 col-12 mx-auto mt-4">
            <tr><td>D1:      </td><td><gt-flute class="D"></gt-flute></td></tr>
            <tr><td>D#1,Eb1: </td><td><gt-flute class="Ds"></gt-flute></td></tr>
            <tr><td>E1:      </td><td><gt-flute class="E"></gt-flute></td></tr>
            <tr><td>F1:      </td><td><gt-flute class="F"></gt-flute></td></tr>
            <tr><td>F#1,Gb1: </td><td><gt-flute class="Fs"></gt-flute></td></tr>
            <tr><td>G1:      </td><td><gt-flute class="G"></gt-flute></td></tr>
            <tr><td>G#1,Ab1: </td><td><gt-flute class="Gs"></gt-flute></td></tr>
            <tr><td>A1:      </td><td><gt-flute class="A"></gt-flute></td></tr>
            <tr><td>A#1,Bb1: </td><td><gt-flute class="As"></gt-flute></td></tr>
            <tr><td>B1:      </td><td><gt-flute class="B"></gt-flute></td></tr>
            <tr><td>C2:      </td><td><gt-flute class="C2"></gt-flute></td></tr>
            <tr><td>C#2,Db2: </td><td><gt-flute class="Cs2"></gt-flute></td></tr>
            <tr><td>D2:      </td><td><gt-flute class="D2"></gt-flute></td></tr>
        </table>`;

        this.querySelector('[name="back"]').addEventListener('click', () => {
            window.history.back();
        });
    }
}

customElements.define("gt-chart", Chart);

const grips = ["D", "Eb", "E", "F", "Gb", "A", "Bb", "B", "C2", "Db2", "D2"];

class Game extends HTMLElement {
    questionElement = null;
    answerElement = null;
    optionElements = [];
    currentQuestion = '';
    stalling = false;

    constructor() {
        super();

        this.innerHTML = `
        <div class="justify-content-start">
            <button name="back" type="button" class="btn btn-lg btn-outline-dark">&lt;</button>
        </div>
        <h1 class="mt-5">
            <span class="question" id="question"></span>
            <span id="answer"></span>
        </h1>
        <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-9 col-12 mx-auto mt-4">
        <div class="options">
            <div class="option"><gt-flute id="optionA"></gt-flute></div>
            <div class="option"><gt-flute id="optionB"></gt-flute></div>
            <div class="option"><gt-flute id="optionC"></gt-flute></div>
        </div>
        </div>`;

        this.querySelector('[name="back"]').addEventListener('click', () => {
            window.history.back();
        });

        this.questionElement = this.querySelector("#question");
        this.answerElement = this.querySelector("#answer");
        this.optionElements = [
            this.querySelector("#optionA"),
            this.querySelector("#optionB"),
            this.querySelector("#optionC")
        ];
        this.optionElements.forEach(el => {
            el.addEventListener('click', () => this.checkAnswer(el));
        });

        // TODO: Level selection and some game state (?)
        this.newQuestion();
    }

    randIndex = (arr) => Math.floor(Math.random()*arr.length);
    pickOptions = (arr, q) => {
        const deck = arr.slice();
        deck.splice(deck.indexOf(q), 1);
        const options = [q]
            .concat(deck.splice(this.randIndex(deck), 1))
            .concat(deck.splice(this.randIndex(deck), 1));
        options.sort(() => Math.random() * 2 - 1);
        return options;
    }

    newQuestion() {
        this.stalling = false;
        this.answerElement.className = ""
    
        this.currentQuestion = grips[this.randIndex(grips)];
        let options = this.pickOptions(grips, this.currentQuestion);
    
        this.questionElement.innerHTML = this.currentQuestion;
        this.optionElements[0].className = options[0];
        this.optionElements[1].className = options[1];
        this.optionElements[2].className = options[2];
    }

    checkAnswer(el) {
        if (this.stalling) return;
    
        console.log(el, this.currentQuestion);
        if (el.className == this.currentQuestion) {
            this.stalling = true;
            this.answerElement.className = "correct";
            setTimeout(() => this.newQuestion(), 2000);
        } else {
            this.answerElement.className = "wrong"
        }
    }
}

customElements.define("gt-game", Game);
