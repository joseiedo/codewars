function descendingOrder(n) {
  const arrayNumber = n.toString().split("");

  return Number(
    arrayNumber
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
}
