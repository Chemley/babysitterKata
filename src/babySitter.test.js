import { babySitter } from './babySitter';

describe ("Babysitter Nightly Charge", function() {
  it("pay $12 an hour", function() {
  expect(babySitter(18)).toEqual(12);
  });
}
