// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(astronautsData) {
            
            astronautsData.sort((a,b) => b.hoursInSpace - a.hoursInSpace);
           
            const counter = document.getElementById("count");
            counter.innerHTML = `Number of Astronauts: ${astronautsData.length}`;          

        for (let i = 0; i < astronautsData.length; i++) {
                
            
            let div = document.getElementById("container");
            let astronaut = astronautsData[i];
            let activeClass = astronaut.active ? "active" : "";
            let astronautCounter = astronautsData.length;
            
            div.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ui>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li class=${activeClass}>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills}</li>
                </ui>
            </div>
            <img class ="avatar" src="${astronaut.picture}">
            </div>
                    `;
            }
        });
    });

});