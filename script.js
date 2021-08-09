function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min+1)+min);
  }

  fetch("https://randomuser.me/api" + "/?results=" + randomNumber(50, 100))
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);

        let button = document.querySelector("#submit")
        let text = document.querySelector("#gender")

        button.onclick = function(event) {
            event.preventDefault()

            let body = document.querySelector("body")

            if (gender.value == "male") {
                profiles.innerHTML = " "

                for (i = 50; i < 101; i++) {
                    
                    if (myJson.results[i].gender == "male") {

                        let firstName = myJson.results[i].name.first
                        let lastName = myJson.results[i].name.last
                        // let phoneNumber = myJson.results[i].phone
                        let imageURL = myJson.results[i].picture.large
                        let fullName = firstName + " " + lastName

                        let image = document.createElement("img")
                        let text = document.createElement("p")

                        image.src = imageURL
                        text.innerHTML = "My name is " + fullName
                        
                        profiles.appendChild(image)
                        profiles.appendChild(text)
                    }
                }
            }
            else if (gender.value == "female") {
                profiles.innerHTML = " "

                for (i = 50; i < 101; i++) {
                    
                    if (myJson.results[i].gender == "female") {

                        let firstName = myJson.results[i].name.first
                        let lastName = myJson.results[i].name.last
                        // let phoneNumber = myJson.results[i].phone
                        let imageURL = myJson.results[i].picture.large
                        let fullName = firstName + " " + lastName

                        let image = document.createElement("img")
                        let text = document.createElement("p")

                        image.src = imageURL
                        text.innerHTML = "My name is " + fullName
                        
                        profiles.appendChild(image)
                        profiles.appendChild(text)
                    }
                }
            }

        }
    
    });