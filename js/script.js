document.addEventListener('DOMContentLoaded', function() {
  var value = 0;
  var list = document.querySelector('#list1');
  document.querySelector('#addElement1').addEventListener('click', function() {
    var li = document.createElement('li');
    li.textContent = `element ${++value}`; // TODO later
    list.appendChild(li)
  })

  list.addEventListener('click', function(event) {
    event.target.parentNode.removeChild(event.target)
  })
})
document.addEventListener('DOMContentLoaded', function() {
  var value = 0;
  var list = document.querySelector('#list2');
  document.querySelector('#addElement2').addEventListener('click', function() {
    var li = document.createElement('li');
    li.textContent = `element ${++value}`; // TODO later
    list.appendChild(li)
  })

  list.addEventListener('click', function(event) {
    event.target.parentNode.removeChild(event.target)
  })
})