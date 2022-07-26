const contain = document.getElementById('blocks')
const block = document.getElementById('block-1')

remove = (x) => {
    x.remove()
}

for (i = 2; i <= 100; i++) {

    // Create each box element with class and id
    const el = document.createElement('div')

    el.setAttribute('class','red-block')
    el.setAttribute ('id',`block-${i}`)
    el.setAttribute ('onmouseover','remove(this)')

    contain.appendChild(el)

}