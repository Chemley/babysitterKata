// Time of day (hours) is written in military time.

export function babySitter(hours, hoursWorked) {
  var startTime = 17;
  var bedTime = 21;
  var endTime = 4;
  var newDay = 23;
  var hour = Math.round(hours);
  var totalCost = null;

  if (hour > bedTime && hour <= newDay && hoursWorked === 4) {
    totalCost += 32;
    console.log(totalCost);
    return 32;
  } else if (hour > bedTime && hour <= newDay) {
    return 8;
  } else if (hour <= endTime && hoursWorked === 4) {
    return 64;
  } else if (hour <= endTime) {
    return 16;
  } else if (hour > startTime && hour <= bedTime && hoursWorked === 4) {
    return 48;
  } else if (hour > startTime && hour <= bedTime) {
    return 12;
  }

console.log(totalCost);

}
