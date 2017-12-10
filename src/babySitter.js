export function babySitter(hours) {

  if (hours > 22) {
    return 8;
  }

  if (hours > 17) {
    return 12;
  }

  if (hours < 4) {
    return 16;
  }
}
