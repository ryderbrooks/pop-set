import {assert}    from 'chai';
import {PopSet}    from '..';
import { IPopSet } from '../meta/interfaces';


describe('#shift', ()=>{
    it('removes element from set', ()=>{
        const pSet: IPopSet<number> = new PopSet([1, 2, 3]);
        assert.equal(pSet.size, 3);
        pSet.shift();
        assert.equal(pSet.size, 2);
    });

    it('returns first element from set', ()=>{
        const pSet: IPopSet<number> = new PopSet([1, 2, 3]);
        const value: number = pSet.shift();
        assert.equal(value, 1);
    });

    it('throws when "shifting" from an empty set', ()=>{
        const pSet: IPopSet<number> = new PopSet();
        assert.equal(pSet.size, 0);
        assert.throws(pSet.shift, Error);
    });
});


describe('#pop', ()=>{
   it('removes element from set', ()=>{
       const pSet: IPopSet<number> = new PopSet([1, 2, 3]);
       assert.equal(pSet.size, 3);
       pSet.pop();
       assert.equal(pSet.size, 2);
   });

   it('returns last element from set', ()=>{
       const pSet: IPopSet<number> = new PopSet([1, 2, 3]);
       const value: number = pSet.pop();
       assert.equal(value, 3);
   });

   it('throws when "popping" from empty set', ()=>{
       const pSet: IPopSet<number> = new PopSet();
       assert.equal(pSet.size, 0);
       assert.throws(pSet.pop, Error);
   });
});