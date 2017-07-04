import {expect} from 'chai';

const createStore = require('redux').createStore;
import mainReducer from '../browser/reducers/';

describe('Main reducer', () => {

    let testStore;
    beforeEach('Create testing store', () => {
        testStore = createStore(mainReducer);
    });

    it('has expected initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({
			  users: [],

        });
    });


});
