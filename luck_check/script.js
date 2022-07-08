function luckCheck(ticket) {
  if (!ticket || !!(ticket % 1)) {
    return false;
  }

  let firstHalf = 0;
  let secondHalf = 0;

  for (let i = 0; i < ticket.length / 2; i++) {
    firstHalf += parseInt(ticket[i]);
    if (ticket.length % 2) {
      secondHalf += parseInt(ticket[i + ticket.length / 2 - 0.5]);
    } else {
      secondHalf += parseInt(ticket[i + ticket.length / 2]);
    }
  }

  return firstHalf === secondHalf;
}
