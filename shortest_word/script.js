function findShort(s){
  const shortestWord = s.split(' ').reduce((acc,item,index)=>{
    return acc.length < item.length ? acc : item 
  },0)
  
  return shortestWord.length
}