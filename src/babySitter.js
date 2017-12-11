// Time of day (hours) is written in military time.

export function babySitter(hours, hoursWorked) {
  var startTime = 17;
  var bedTime = 21;
  var endTime = 4;
  var newDay = 23;
  var hour = Math.ceil(hours);
  var nightlyTotal = 0;

  if (hour > bedTime && hour <= newDay && hoursWorked === 4) {
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

// if the babysitter works the whole night, below is their pay.
  if (hours === 12) {
    nightlyTotal = 32 + 64 + 48;
    return nightlyTotal;
  }

}
