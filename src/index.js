
// You should implement your task here.

module.exports = function towelSort (towel) {
  if(!towel){
    return []
  }
  let newArr = []
  for(let i = 0; i < towel.length; i++){
    if(i % 2 === 0){
      newArr.push(towel[i])
    } else {
      newArr.push(towel[i].reverse())
    }
  }
  return newArr.flat()
}
