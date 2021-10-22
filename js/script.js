let people = ['Antonio', 'Dani', 'Pablo', 'Diego', 'Liam']
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
let names = people.slice()

function pickNameOutOfHat(names) {
    random = Math.floor(Math.random() * names.length)
    person = names[random]
    names.splice(random, 1)
    return person
}

function generateNames(){
  let namesToGenerate = names.slice()
  days.forEach(function (day, index) {
      if(namesToGenerate.length == 0) { namesToGenerate = names.slice() }
      person = pickNameOutOfHat(namesToGenerate)
      person = person == "Liam" && day == "Friday" ? person + " ;)": person
      updateElement(day, person)
    });
    names = names.slice()
}

function updateElement(id, person){
  document.getElementById(id).innerHTML = person
}

function addName(name) {
  names.push(name);
}

function removeName(name) {
  position = names.indexOf(name);
  names.splice(position, 1)
}

function updateEmployeesList(checkbox, name){
    //If it is checked.
    if(checkbox.checked){
        addName(name)
    }
    //If it has been unchecked.
    else{
      removeName(name)
    }
}

function copyNames() {
  var toCopy = "";
  days.forEach(function (day, index) {
    var name = document.getElementById(day).innerHTML;
    toCopy = toCopy + day + ": " + name + "\n"; 
  });

  navigator.clipboard.writeText(toCopy)

}

