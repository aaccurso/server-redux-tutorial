import {expect} from 'chai';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('a list', () => {

    function addMovie(currentState, movie) {
      return [...currentState, movie];
    }

    it('is immutable', () => {
      let state = ['Trainspotting', '28 Days Later'];
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState.length).to.equal(3);
      expect(state.length).to.equal(2);
    });

  });

});
