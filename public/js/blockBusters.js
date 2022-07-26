const contain = document.getElementById('blocks')
const block = document.getElementById('block-1')
block.addEventListener("mouseover", function(){block.remove()})

for (i = 2; i <= 100; i++) {

    // Create each box element with class and id
    const el = document.createElement('div')

    el.setAttribute('class','red-block')
    el.setAttribute ('id',`block-${i}`)

    // Make the cursor invisible for boxes
    el.addEventListener("mouseover", function(){el.remove()});

    contain.appendChild(el)

}