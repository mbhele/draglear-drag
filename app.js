
document.addEventListener("DOMContentLoaded", function () {
  var btnNext = document.querySelector('#next_question');

  function getRandomNumber() {
    return Math.floor(Math.random() * 3);
  }

  function clearPreviousQuestion() {
    var vuzaDiv = document.getElementById("vuza");
    while (vuzaDiv.firstChild) {
      vuzaDiv.removeChild(vuzaDiv.firstChild);
    }
    var question = document.querySelector('.divQuestions');
    question.textContent = '';
  }

  function loadQuestion(n) {
   var problemData = [
      {
        number: 1,
        question: "Please drag and drop the vertical line of the",
        solution: {
          id: 'group28'
        },
        possibleSolutions: [
          { id: "group26", image: 'Group 26.svg', "data-clicked": "false", draggable: "true" },
          { id: "group28", image: 'Group 28.svg', draggable: "true", "data-clicked": "false" },
          { id: "group25", image: 'Group 25.svg', draggable: "true", "data-clicked": "false" },
          { id: "group27", image: 'Group 27.svg', draggable: "true", "data-clicked": "false" }
        ]
      },

      {
          number: 2,
          question: "Please select the Natural numbers",
          solution: {
            id: 'group29'
          },
          possibleSolutions: [
            { id: "group29", image: 'Group 29.svg', "data-clicked": "false", draggable: "true" },
            { id: "group30", image: 'Group 30.svg', draggable: "true", "data-clicked": "false" },
            { id: "group31", image: 'Group 31.svg', draggable: "true", "data-clicked": "false" },
            { id: "group32", image: 'Group 32.svg', draggable: "true", "data-clicked": "false" }
          ]
        },
        {
          number: 3,
          question: "In Math we have BODMASS, operations when simplifying mathematical expressions. What does B- stand for?",
          solution: {
            id: 'group29'
          },
          possibleSolutions: [
            { id: "group33", image: 'Group 33.svg', "data-clicked": "false", draggable: "true" },
            { id: "group34", image: 'Group 34.svg', draggable: "true", "data-clicked": "false" },
            { id: "group35", image: 'Group 35.svg', draggable: "true", "data-clicked": "false" },
            { id: "group36", image: 'Group 36.svg', draggable: "true", "data-clicked": "false" }
          ]
        },

    ];

    var vuzaDiv = document.getElementById("vuza");
    var question = document.querySelector('.divQuestions');

    problemData[n].possibleSolutions.forEach(item => {
      const imgElement = document.createElement("img");
      imgElement.src = '/images/' + item.image;
      imgElement.id = item.id;
      imgElement.draggable = item.draggable;
      imgElement.dataset.clicked = item["data-clicked"];
      vuzaDiv.appendChild(imgElement);
    });

    question.textContent = problemData[n].question;

    // Call the respective solution function
    if (n == 0) {
      solutionOne();
    } else if (n == 1) {
      solutionTwo();
    } else if (n == 2) {
      solutionThree();
    }
  }

  // Load an initial random question when the page loads
  var initialRandomNumber = getRandomNumber();
  loadQuestion(initialRandomNumber);

  btnNext.addEventListener('click', () => {
    var n = getRandomNumber(); // Generate a new random number
    console.log(n);
    document.querySelector('#dropTarge2').innerHTML='';
    clearPreviousQuestion(); // Clear previous question and options

    loadQuestion(n); // Load the new question
  });
});




  




// function nextQuestion(){

// }



function solutionOne(){
  const group26 = document.getElementById("group26");
  const dropTarge2 = document.getElementById("dropTarge2");
  const group27 = document.getElementById("group27");
  const group28 = document.getElementById("group28");
  //  const line9 = document.getElementById("line9");
  const group25 = document.getElementById("group25");
  //   const dropTarge3 = document.getElementById("dropTarge3");
  const dropTarge4 = document.getElementById("dropTarge4");
  count=0;
  
  //  document.querySelector("#vuzaw")
  dataOfclicks()
  // const vuzaContainer = document.getElementById('vuza');
  // const children = vuzaContainer.children;
  
  
  // for (let i = 0; i < children.length; i++) {
  // const child = children[i];
  // child.addEventListener('click', (e) => {
  //   console.log(`Child ${i + 1} clicked! ${child.id}`);
  //   console.log(e.target)
  //   // You can perform any action you want here for the clicked child
  // });
  // }
  
  
  
  
  
  
  
  
  
  // Event listener to start dragging
  // draggableElement.addEventListener("dragstart", (event) => {
  // event.dataTransfer.setData("text/plain", draggableElement.id);
  // });
  group26.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group26.id);
  console.log(1)
  });
  group27.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group27.id);
  console.log(1)
  });
  group28.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group28.id);
  console.log(1)
  });
  
  
  group25.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group25.id);
  console.log(1)
  });

  
  dropTarge2.addEventListener("dragover", (event) => {

  event.preventDefault(); // Allow the drop by preventing the default behavior
  });
  

  
  vuza.addEventListener("dragover", (event) => {
  console.log(1)
  event.preventDefault(); // Allow the drop by preventing the default behavior
  });
  

  
  dropTarge2.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  // if()
  console.log(draggedElement.id)
  if(draggedElement.id=="group28"){
    points()
   alert("Well done!!!")
   clearboxOne()
  }else {
    alert("Please select the correct picture");
    location.reload();
  
  }
  dropTarge2.appendChild(draggedElement);
  
  
  });

  
  group25.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  group25.appendChild(draggedElement);
  
  });
  
  vuza.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  vuza.appendChild(draggedElement);
  
  });
  
  

  
  function points(){
  // var goodMessage=
  count++;
  console.log("point is:",count);
  document.querySelector("#points").textContent="Your point are:"+count;
  }
  
  // function clearboxOne(){
  // setTimeout(()=>{
  //   location.reload();  
  // },1000)
  // }



}

function solutionTwo(){
  const group29 = document.getElementById("group29");
  const dropTarge2 = document.getElementById("dropTarge2");
  const group31 = document.getElementById("group31");
  const group30 = document.getElementById("group30");
  //  const line9 = document.getElementById("line9");
  const group32 = document.getElementById("group32");
  //   const dropTarge3 = document.getElementById("dropTarge3");
  // const dropTarge4 = document.getElementById("dropTarge4");
  count=0;
  
  //  document.querySelector("#vuzaw")

  dataOfclicks()
  
  
  
  

  group29.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group29.id);
  console.log(1)
  });
  group30.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group30.id);
  console.log(1)
  });
  group31.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group31.id);
  console.log(1)
  });
  
  
  group32.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group32.id);
  console.log(1)
  });

  
  
  dropTarge2.addEventListener("dragover", (event) => {
  // alert('I am green')
  event.preventDefault(); // Allow the drop by preventing the default behavior
  });
  

  vuza.addEventListener("dragover", (event) => {
  console.log(1)
  event.preventDefault(); // Allow the drop by preventing the default behavior
  });
  

  dropTarge2.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  // if()
  console.log(draggedElement.id)
  if(draggedElement.id=="group29"){
    points()
   alert("Well done!!!")
  //  clearboxOne()
  }else {
    alert("Please select the correct picture");
    location.reload();
 
  }
  dropTarge2.appendChild(draggedElement);
  
  
  });

  
  group32.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  group32.appendChild(draggedElement);
  
  });
  
  vuza.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  vuza.appendChild(draggedElement);
  
  });
  
  
 
  
  function points(){
  // var goodMessage=
  count++;
  console.log("point is:",count);
  document.querySelector("#points").textContent="Your point are:"+count;
  }
  
  function clearboxOne(){
  setTimeout(()=>{
    location.reload();  
  },1000)
  }
}



function dataOfclicks(){
  const vuzaContainer = document.getElementById('vuza');
  const children = vuzaContainer.children;
  
  
  for (let i = 0; i < children.length; i++) {
  const child = children[i];
  child.addEventListener('click', (e) => {
    console.log(`Child ${i + 1} clicked! ${child.id}`);
    console.log(e.target)
    // You can perform any action you want here for the clicked child
  });
  }
  
  
}

function solutionThree(){
  const group33 = document.getElementById("group33");
  const dropTarge2 = document.getElementById("dropTarge2");
  const group34 = document.getElementById("group34");
  const group35 = document.getElementById("group35");
  //  const line9 = document.getElementById("line9");
  const group36 = document.getElementById("group36");
  //   const dropTarge3 = document.getElementById("dropTarge3");
  // const dropTarge4 = document.getElementById("dropTarge4");
  count=0;
  
  //  document.querySelector("#vuzaw")

  dataOfclicks()
  
  
  
  

  group33.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group33.id);
  console.log(1)
  });
  group34.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group34.id);
  console.log(1)
  });
  group35.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group35.id);
  console.log(1)
  });
  
  
  group36.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", group36.id);
  console.log(1)
  });

  
  
  dropTarge2.addEventListener("dragover", (event) => {
  // alert('I am green')
  event.preventDefault(); // Allow the drop by preventing the default behavior
  });
  

  vuza.addEventListener("dragover", (event) => {
  console.log(1)
  event.preventDefault(); // Allow the drop by preventing the default behavior
  });
  

  dropTarge2.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  // if()
  console.log(draggedElement.id)
  if(draggedElement.id=="group34"){
    points()
   alert("Well done!!!")
   clearboxOne()
  }else {
    alert("Please select the correct picture");
    location.reload();
 
  }
  dropTarge2.appendChild(draggedElement);
  
  
  });

  
  group33.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  group33.appendChild(draggedElement);
  
  });
  
  vuza.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  vuza.appendChild(draggedElement);
  
  });
  
  
 
  
  function points(){
  // var goodMessage=
  count++;
  console.log("point is:",count);
  document.querySelector("#points").textContent="Your point are:"+count;
  }
  
  function clearboxOne(){
  setTimeout(()=>{
    location.reload();  
  },1000)
  }
}



function dataOfclicks(){
  const vuzaContainer = document.getElementById('vuza');
  const children = vuzaContainer.children;
  
  
  for (let i = 0; i < children.length; i++) {
  const child = children[i];
  child.addEventListener('click', (e) => {
    console.log(`Child ${i + 1} clicked! ${child.id}`);
    console.log(e.target)
    // You can perform any action you want here for the clicked child
  });
  }
  
  
}