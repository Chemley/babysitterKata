export function babySitter(hours) {
  var startTime = 17;
  var bedTime = 21;
  var endTime = 4;
  var newDay = 23;
  var totalHoursWorked = 4;
  var totalCost;

  if (hours > startTime && hours <= bedTime) {
    return 12;
  }

  if (hours > bedTime && hours <= newDay) {
    return 8;
  }

  if (hours < endTime) {
    return 16;
  }


}
