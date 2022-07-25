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
    let count = 0;
    for (i = 0; i < pat.innerText.length; i++) {
        if (pat.innerText.charAt(i) != ' ') {
            if (count % 2) {
                pat.innerText = pat.innerText.substring(0, i) + pat.innerText.charAt(i).toUpperCase() + pat.innerText.substring(i + 1)
            }
            else {pat.innerText = pat.innerText.substring(0, i) + pat.innerText.charAt(i).toLowerCase() + pat.innerText.substring(i + 1)
            }
            count++
        }
    }
}


quiet.addEventListener("click", lower)
loud.addEventListener("click", upper)
sarc.addEventListener("click", sarcasm)
