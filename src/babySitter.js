// Time of day (hours) is written in military time.

export function babySitter(hours, hoursWorked) {
  var startTime = 17;
  var bedTime = 21;
  var endTime = 4;
  var newDay = 23;
  var totalCost;
  var hour = Math.round(hours);

  if (hour > bedTime && hour <= newDay) {
    console.log(hour);
    return 8;
  } else if (hour < endTime) {
    return 16;
  } else if (hour > startTime && hour <= bedTime && hoursWorked === 4) {
    console.log(hoursWorked);
    return 48;
  } else if (hour > startTime && hour <= bedTime) {
    return 12;
  }

  // if (HoursWorked === 4) {
  //     if(hours > startTime && hours <= bedTime) {
  //     console.log(totalHoursWorked);
  //     return 48;
  //   }
  // } else if (totalHoursWorked !== 4) {
  //     if(hours > startTime && hours <= bedTime) {
  //     console.log(totalHoursWorked);
  //     return 12;
  //   }
  // }

}
