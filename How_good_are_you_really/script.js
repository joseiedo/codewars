function betterThanAverage(classPoints, yourPoints) {
  const averagePointsArray = classPoints.concat(yourPoints)
  const averagePoints = averagePointsArray.reduce((acc,item)=> acc + item,0) / averagePointsArray.length
    
  return yourPoints > averagePoints
}
