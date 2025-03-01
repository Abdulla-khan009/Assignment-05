// new date new-date
document.getElementById("new-date").innerText = new Date().toDateString();


// body color change
document.getElementById("multi-color").addEventListener('click', function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})
// get the value 
let decreaseNumber = document.getElementById("decreaseNumber").innerText
let converteddecreaseNumber=parseInt(decreaseNumber)
let increaseNumber = document.getElementById("increaseNumber").innerText
let convertedincreaseNumber = parseInt(increaseNumber)
let number=6
// complete button 1
document.getElementById("completebtn-1").addEventListener('click', function () {
    document.getElementById("decreaseNumber").innerText = converteddecreaseNumber -= 1
    document.getElementById("increaseNumber").innerText = convertedincreaseNumber += 1
    number-=1
    alert("Board Updated Successfully!")
    this.disabled = true;
    this.style.backgroundColor = "white"
    if (number === 0) {
        alert("congratulation !!  You hve completed all the tasks")
    }
     let time = new Date().toLocaleTimeString();
    let text = `You have complete the Fix Mobile Button Issue at ${time}`
    let p = document.createElement("p")
    
    p.setAttribute("class","my-4 mx-3 bg-slate-200 py-4 px-2 rounded-md")
    p.innerText = text
    document.getElementById("activity").appendChild(p)
    
})
// complete button 2
document.getElementById("completebtn-2").addEventListener('click', function () {
    document.getElementById("decreaseNumber").innerText = converteddecreaseNumber -= 1
    document.getElementById("increaseNumber").innerText = convertedincreaseNumber += 1
    number-=1
    alert("Board Updated Successfully!")
    this.disabled = true;
    this.style.backgroundColor = "white"
    if (number === 0) {
        alert("congratulation !!  You hve completed all the tasks")
    }
    let time = new Date().toLocaleTimeString();
    let text = `You have complete the Add Dark Mode at ${time}`
    let p = document.createElement("p")
    
    p.setAttribute("class","my-4 mx-3 bg-slate-200 py-4 px-2 rounded-md")
    p.innerText = text
    document.getElementById("activity").appendChild(p)
})
// complete button 3
document.getElementById("completebtn-3").addEventListener('click', function () {
    document.getElementById("decreaseNumber").innerText = converteddecreaseNumber -= 1
    document.getElementById("increaseNumber").innerText = convertedincreaseNumber += 1
    number-=1
    alert("Board Updated Successfully!")
    this.disabled = true;
    this.style.backgroundColor = "white"
    if (number === 0) {
        alert("congratulation !!  You hve completed all the tasks")
    }
    let time = new Date().toLocaleTimeString();
    let text = `You have complete the Optimize Home page at ${time}`
    let p = document.createElement("p")
    
    p.setAttribute("class","my-4 mx-3 bg-slate-200 py-4 px-2 rounded-md")
    p.innerText = text
    document.getElementById("activity").appendChild(p)
})
// complete button 4
document.getElementById("completebtn-4").addEventListener('click', function () {
    document.getElementById("decreaseNumber").innerText = converteddecreaseNumber -= 1
    document.getElementById("increaseNumber").innerText = convertedincreaseNumber += 1
    number-=1
    alert("Board Updated Successfully!")
    this.disabled = true;
    this.style.backgroundColor = "white"
    if (number === 0) {
        alert("congratulation !!  You hve completed all the tasks")
    }

    let time = new Date().toLocaleTimeString();
    let text = `You have complete the Add new emoji at ${time}`
    let p = document.createElement("p")
    
    p.setAttribute("class","my-4 mx-3 bg-slate-200 py-4 px-2 rounded-md")
    p.innerText = text
    document.getElementById("activity").appendChild(p)
})
// complete button 5
document.getElementById("completebtn-5").addEventListener('click', function () {
    document.getElementById("decreaseNumber").innerText = converteddecreaseNumber -= 1
    document.getElementById("increaseNumber").innerText = convertedincreaseNumber += 1
    number-=1
    alert("Board Updated Successfully!")
    this.disabled = true;
    this.style.backgroundColor = "white"
    if (number === 0) {
        alert("congratulation !!  You hve completed all the tasks")
    }

    let time = new Date().toLocaleTimeString();
    let text = `You have complete the Integrate OpenAI API at ${time}`
    let p = document.createElement("p")
    
    p.setAttribute("class","my-4 mx-3 bg-slate-200 py-4 px-2 rounded-md")
    p.innerText = text
    document.getElementById("activity").appendChild(p)
})
// complete button 6
document.getElementById("completebtn-6").addEventListener('click', function () {
    document.getElementById("decreaseNumber").innerText = converteddecreaseNumber -= 1
    document.getElementById("increaseNumber").innerText = convertedincreaseNumber += 1
    number-=1
    alert("Card added Successfully")
    this.disabled = true;
    this.style.backgroundColor = "white"
    if (number === 0) {
        alert("congratulation !!  You hve completed all the tasks")
    }

    let time = new Date().toLocaleTimeString();
    let text = `You have complete the Improve Job searching ${time}`
    let p = document.createElement("p")
    
    p.setAttribute("class","my-4 mx-3 bg-slate-200 py-4 px-2 rounded-md")
    p.innerText = text
    document.getElementById("activity").appendChild(p)
})
// remove activity
document.getElementById("remove-activity").addEventListener("click", function () {
    document.getElementById("activity").innerHTML = "";
})


