const lefts = document.querySelectorAll('.left');
const rights = document.querySelectorAll('.right');
const container = document.querySelector('.container');
let unorderList = document.querySelectorAll('ul');

  container.addEventListener('click', ev => {
    if(ev.target.style.backgroundColor === 'red' && ev.target.className == 'textBox'){
      ev.target.style.backgroundColor = ''
    } else if(ev.target.className == 'textBox'){
      ev.target.style.backgroundColor = 'red'
    }
  })
  lefts.forEach(left => {
   left.addEventListener('click', e => {
     let listRed = []
     let listUnRed = []
     let div = left.parentElement.parentElement
     let lis = div.querySelectorAll('li')
     let ul = div.querySelector('ul')
     lis.forEach(list => {
       if(list.style.backgroundColor == 'red' && !listRed.includes(list)){
         listRed.push(list.outerHTML)
       } else if(!listRed.includes(list)) {
        listUnRed.push(list.outerHTML)
       }
     })
     unorderList[Array.from(unorderList).indexOf(ul)-1].innerHTML += listRed.join('')
     unorderList[Array.from(unorderList).indexOf(ul)].innerHTML = listUnRed.join('')
     listRed = []
     listUnRed = []
   })
  })

  rights.forEach(right => {
    right.addEventListener('click', e => {
      let listRed = []
      let listUnRed = []
      console.log(e.target)
      let div = right.parentElement.parentElement
      let lis = div.querySelectorAll('li')
      let ul = div.querySelector('ul')
      lis.forEach(list => {
        if(list.style.backgroundColor == 'red' && !listRed.includes(list)){
          listRed.push(list.outerHTML)
        } else if(!listRed.includes(list)) {
         listUnRed.push(list.outerHTML)
        }
      })

      unorderList[Array.from(unorderList).indexOf(ul)+1].innerHTML += listRed.join('')
      unorderList[Array.from(unorderList).indexOf(ul)].innerHTML = listUnRed.join('')
      listRed = []
      listUnRed = []
    })
   })



