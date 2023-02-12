import { expect } from 'chai';
import { Game } from './../game.js';

describe('game level 1', () => {

    let i = 0;
    let sequence = [.3, .8, .6];
    function random() {
        return sequence[i++];
    }

    it('rotates between G, A and B', () => {

        let game = new Game(random);

        game.next();
        expect(game.note).to.equal('G');
        game.next();
        expect(game.note).to.equal('B');
        game.next();
        expect(game.note).to.equal('A');

    });

});