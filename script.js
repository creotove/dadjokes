let generate = document.getElementById("generate")
generate.addEventListener("click", joke)

result.innerText = "Genrating Joke";

async function joke() {
    let options = {
        headers: {
            Accept: 'application/json',
        }
    }
    
    
    let a = await fetch("https://icanhazdadjoke.com/", options);
    let b = await a.json()
    let result = document.querySelector(".result")
    console.log(b.joke);
    result.innerText = b.joke;

}
