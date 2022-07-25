const quiet = document.getElementById('quiet-btn')
const loud = document.getElementById('loud-btn')
const sarc = document.getElementById('sarc-btn')
const pat = document.getElementById('patrick')

upper = () => {
    pat.innerText = pat.innerText.toUpperCase()
}

lower = () => {
    pat.innerText = pat.innerText.toLowerCase()
}

sarcasm = () => {
    count = 0;
    for (i of pat.innerText){
        console.log(i.toUpperCase())
        if (i != ' ') {
            if (count % 2) {
                pat.innerText = pat.innerText.slice(0, count) + i.toUpperCase() + pat.innerText.slice(count + 1, pat.innerText.length)
            }
            else {
                pat.innerText = pat.innerText.slice(0, count) + i.toLowerCase() + pat.innerText.slice(count + 1, pat.innerText.length)
            }
        }count++
    }
}

quiet.addEventListener("click", lower)
loud.addEventListener("click", upper)
sarc.addEventListener("click", sarcasm)
