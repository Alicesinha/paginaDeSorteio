let input = document.getElementById("nameAdd");
let ulName = document.getElementById("allNames")
let ilName = document.getElementById ("nameList")
let arrayNames = [];

function sortear(){
    let np = arrayNames.length
    let ns = Math.floor(Math.random() * np)
    document.getElementById("display").innerHTML = arrayNames[ns].liName
    
}

function showNames(){
   let eachName = ""
   arrayNames.forEach((liName) => {
    eachName = eachName + `<li id="nameList">${liName.liName}</li>`

   })
ulName.innerHTML = eachName
}
function add() {
  arrayNames.push({
    liName: input.value
  });
showNames()

}


