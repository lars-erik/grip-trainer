export class Game {
    notes = ['G', 'A', 'B'];

    note = 'G';
    random = Math.random;

    constructor(random) {
        this.random = random || this.random;
    }

    next() {
        const rnd = this.random();
        const index = Math.floor(rnd * this.notes.length);
        this.note = this.notes[index];   
    }
}