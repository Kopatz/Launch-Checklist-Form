// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let faultyItems = document.getElementById("faultyItems");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then( function(json){
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[1].name}</li>
                  <li>Diameter: ${json[1].diameter}</li>
                  <li>Star: ${json[1].star}</li>
                  <li>Distance from Earth: ${json[1].distance}</li>
                  <li>Number of Moons: ${json[1].moons}</li>
               </ol>
               <img src="${json[1].image}">
         `;
      });
   });
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

      
      // fetch json data and display destination
     

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

      //update launch status/shuttle requirements if fuel too low
      if(Number(fuel.value >= 10000) && Number(mass.value) <= 10000){
         launchStatus.innerHTML = `Shuttle Ready for Launch`;
         launchStatus.style.color = "green";
         event.preventDefault();
      }
      
     if (Number(fuel.value <= 9999)){
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilot.value} Ready`;
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
         launchStatus.style.color = "red";
         event.preventDefault();

      }

      // update launch status/shuttle requirements if cargo mass too high
      if(Number(mass.value > 10000)){
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilot.value} Ready`;
         fuelStatus.innerHTML = `Fuel level enough for launch`;
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
         launchStatus.style.color = "red";
         event.preventDefault();
      }
     

      
      
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
