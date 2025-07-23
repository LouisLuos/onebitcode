const tempsCelsius = [0, 15, 22, 30, -5]

const tempsFahrenheit = tempsCelsius.map(index => index = index * 9/5 + 32)

console.log(tempsFahrenheit)