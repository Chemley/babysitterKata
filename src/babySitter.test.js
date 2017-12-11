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

  it("time is between 9-12am, pay $8 an hour", function() {
    expect(babySitter(22)).toEqual(8);
  });

  it("time is between midnight - 4am, pay $16 an hour", function() {
    expect(babySitter(3)).toEqual(16);
  });

  it("time is between 5pm - 9pm, & half-hour, pay $12 an hour", function() {
    expect(babySitter(19.5)).toEqual(12);
  });

  it("time is between 9pm - 12am, & half-hour, pay $8 an hour", function() {
    expect(babySitter(22.5)).toEqual(8);
  });

  it("time is between midnight - 4am, & half-hour, pay $16 an hour", function() {
    expect(babySitter(2.5)).toEqual(16);
  });

  it("babysitter worked from 5pm - 9pm, total $/hr is 48", function() {
    var hours = 20;
    var hoursWorked = 4;
    expect(babySitter(hours, hoursWorked)).toEqual(48);
  });

  it("babysitter worked from 9pm - 12am, total $/hr is 32", function() {
    var hours = 21.5;
    var hoursWorked = 4;
    expect(babySitter(hours, hoursWorked)).toEqual(32);
  });

  it("babysitter worked from midnight - 4am, total $/hr is 64", function() {
    var hours = 3.5;
    var hoursWorked = 4;
    expect(babySitter(hours, hoursWorked)).toEqual(64);
  });

  it("babysitter nightly total", function() {
    expect(babySitter()).toEqual(144);
  });


});
