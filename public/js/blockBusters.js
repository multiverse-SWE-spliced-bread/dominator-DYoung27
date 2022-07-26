const contain = document.getElementById('blocks')
const block = document.getElementById('block-1')
block.addEventListener("mouseover", function(){block.remove()})

for (i = 1; i <= 100; i++) {

    // Create each box element with class and id
    const el = document.createElement('div')

    el.className = 'red-block'
    el.id = `block-${i}`

    contain.appendChild(el)

    // Make the cursor invisible for boxes
    el.addEventListener("mouseover", function(){el.remove()});
}