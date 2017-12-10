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

  it("time is between 5-9pm, pay $12 an hour", function() {
    expect(babySitter(18)).toEqual(12);
  });

  it("time is between 9-12pm, pay $8 an hour", function() {
    expect(babySitter(22)).toEqual(8);
  });

  it("time is between midnight - 4am, pay $16 an hour", function() {
    expect(babySitter(3)).toEqual(16);
  });

  it("time is between 9pm - 12am, & half-hour, pay $8 an hour", function() {
    expect(babySitter(22.5)).toEqual(8);
  });

  it("babysitter worked from 5pm - 9pm, total $/hr is 48", function() {
    expect(babySitter(20)).toEqual(12, 48);
  });

  it("babysitter worked from 9pm - 12pm, total $/hr is 32", function() {
    expect(babySitter(20)).toEqual(8, 32);
  });

});
