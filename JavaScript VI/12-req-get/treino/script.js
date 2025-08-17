async function searchAllPostsApi() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos")
    const finalResult = await result.json()
    console.log(finalResult)
}


searchAllPostsApi()