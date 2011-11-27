drink = {}
setTemp = (temperature) -> @temp = temperature
setTemp.apply drink, ['hot']
console.log drink.temp
