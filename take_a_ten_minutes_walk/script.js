function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let northWalks = 0;
  let westWalks = 0;
  let southWalks = 0;
  let eastWalks = 0;

  walk.forEach((path) => {
    if (path === "n") northWalks++;
    if (path === "s") southWalks++;
    if (path === "e") eastWalks++;
    if (path === "w") westWalks++;
  });

  return northWalks === southWalks && westWalks === eastWalks;
}
