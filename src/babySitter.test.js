import { babySitter } from './babySitter';

describe ("Babysitter Nightly Charge", function() {
  it("babysitter gets paid $12", function() {
  expect(babySitter(18)).toEqual(12);
  });

  it("babysitter gets paid $8", function() {
  expect(babySitter(22)).toEqual(8);
  });
});
