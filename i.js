const draggableElement = document.getElementById("draggableElement");
const group26 = document.getElementById("group26");
const dropTarget = document.getElementById("dropTarget");
const group27 = document.getElementById("group27");
const group28 = document.getElementById("group28");
count=0;

//  document.querySelector("#vuzaw")
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
const problemData =[
{
   number:1,
   question:"Please drag and drop the vertical line of the",
   solution:{
              id:'group28'
           },
  possibleSolutions:
   ['Group 26.svg','Group 28.svg','Group 25.svg','Group 27.svg']
  
},
]







//  const line9 = document.getElementById("line9");
const group25 = document.getElementById("group25");
//   const dropTarge3 = document.getElementById("dropTarge3");
const dropTarge4 = document.getElementById("dropTarge4");

// Event listener to start dragging
draggableElement.addEventListener("dragstart", (event) => {
event.dataTransfer.setData("text/plain", draggableElement.id);
});
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
// Event listener to allow the drop
// dropTarget.addEventListener("dragover", (event) => {
//     event.preventDefault(); // Allow the drop by preventing the default behavior
// });


dropTarge2.addEventListener("dragover", (event) => {
// alert('I am green')
event.preventDefault(); // Allow the drop by preventing the default behavior
});

// dropTarge3.addEventListener("dragover", (event) => {
//     console.log(1)
//     event.preventDefault(); // Allow the drop by preventing the default behavior
// });
// dropTarge4.addEventListener("dragover", (event) => {
//     console.log(1)
//     event.preventDefault(); // Allow the drop by preventing the default behavior
// });

vuza.addEventListener("dragover", (event) => {
console.log(1)
event.preventDefault(); // Allow the drop by preventing the default behavior
});

// vuza.addEventListener("dragover", (event) => {
//     console.log(1)
//     event.preventDefault(); // Allow the drop by preventing the default behavior
// });


// // Event listener for when an item is dropped
// dropTarget.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("text/plain");
//     const draggedElement = document.getElementById(data);

//     dropTarget.appendChild(draggedElement);
//     dropTarget.disabled = true;
//     // alert(1)
// });

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
//    setTimeout(()=>{
//     location.reload();
//    },100) 
}
dropTarge2.appendChild(draggedElement);


});
// dropTarge3.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("text/plain");
//     const draggedElement = document.getElementById(data);
//     dropTarge3.appendChild(draggedElement);
//     dropTarge3.disabled = true;

// });

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


// dropTarge4.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("text/plain");
//     const draggedElement = document.getElementById(data);
//     dropTarge4.appendChild(draggedElement);

// });


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
