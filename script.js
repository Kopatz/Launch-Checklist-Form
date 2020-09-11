// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let faultyItems = document.querySelector("faultyItems");

   form.addEventListener("submit", function(event){
      
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let mass = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

   // validate user inputs 
      // validate that values are entered
      if(pilot.value === "" || copilot.value === "" || fuel.value === "" || mass.value === "" ){
         alert("All fields are required!");
         event.preventDefault();    
      }

      // validate that pilot name and copilot name are strings 
      if(!isNaN(pilot.value)){
         alert("Pilot name must be a string!");
         event.preventDefault();
      }

      if(!isNaN(copilot.value)){
         alert("Co-pilot name must be a string!");
         event.preventDefault();
      }

      // validate that fuel and cargo mass are a number 
      if(isNaN(fuel.value)){
         alert("Fuel level must be a number!");
         event.preventDefault();
      }

      if(isNaN(mass.value)){
         alert("Mass must be a number!");
         event.preventDefault();
      }

      //update launch status/shuttle requirements 
      if(Number(fuel.value < 10000)){
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilot.value} Ready`;
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
      }
     


      
      
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
