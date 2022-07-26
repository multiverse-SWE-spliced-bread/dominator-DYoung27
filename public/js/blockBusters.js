const contain = document.getElementById('blocks')

for (i = 2; i <= 100; i++) {

    // Create each box element with class and id
    const el = document.createElement('div')

    el.className = 'red-block'
    el.id = `block-${i}`

    contain.appendChild(el)

    // Make the cursor invisible for boxes
    el.addEventListener("mouseover", function(){el.style.visibility = 'hidden'});
}