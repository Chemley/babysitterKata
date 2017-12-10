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

  it("time is between 5-9pm, pay $12 an hour", function(){
    expect(babySitter(18)).toEqual(12);
  });

  it("time is between 9-12pm, pay $8 an hour", function(){
    expect(babySitter(22)).toEqual(8);
  });


});
