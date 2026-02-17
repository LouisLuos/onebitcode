const args = process.argv
console.log(`Argumentos informados ${args}`)
console.log(args)

const namedArguments = {}

process.argv.slice(2).forEach((arg, index, arr) => {
    if(arg.startsWith("--")) {
    const argName = arg.slice(2)   
    const argValue = arr[index + 1]
    namedArguments[argName] = argValue
    }
})

console.log(namedArguments)