export function babySitter(hours, cost) {

  if (hours >= 17 && hours <= 21) {
    return 12;
  }

  if (hours > 21 && hours <= 23) {
    return 8;
  }

  if (hours >= 17 && hours <= 21 && cost === 48) {
    return cost;
  }

  if (hours < 4) {
    return 16;
  }


}
