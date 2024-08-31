function forminfo(){
  var formdata = document.forms["form1"]["first"].value
  console.log(formdata)
}




function DeleteTask(event){
  console.log(event.target.parentElement)
  event.target.parentElement.remove()
}

function AddTask(){
  var textdata = document.getElementById('t1').value
  var element = document.createElement('div')
  element.setAttribute('id','task-ind')
  console.log(textdata)
  element.innerHTML = `<p>${textdata}</p><button onclick="DeleteTask(event)">Delete</button>`
  var existelement = document.querySelector('#task-container')
  existelement.append(element)
  console.log(element)
}

