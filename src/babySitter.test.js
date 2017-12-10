import { babySitter } from './babySitter';

describe ("Babysitter Nightly Charge", function() {
  it("babysitter gets paid $12", function() {
  expect(babySitter(18)).toEqual(12);
  });

  it("babysitter gets paid $8", function() {
  expect(babySitter(23)).toEqual(8);
  });

  it("babysitter gets paid $16", function() {
  expect(babySitter(2)).toEqual(16);
  });


});
