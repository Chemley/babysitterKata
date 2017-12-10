export function babySitter(hours) {
  var cost = 0;
  if (hours > 21 && hours <= 23) {
    return 8;
    cost ++;
  }

  if (hours >= 17 && hours <= 21) {
    return 12;
  }

  if (hours < 4) {
    return 16;
  }


}
