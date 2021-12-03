const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", showUser(), false)

function showUser (nameUser) {
    
    const User = nameUser;
    const url = "https://api.github.com/users/"+ `${User}`;
    const option = {
        method: 'GET',
        mode: "cors",
        cache: "default"
    }
   
    fetch(url, option)
    .then (response => {
        response.json().then( data => {
            const userName = (data.name);
            const userAvatar = (data.avatar_url);
            const userLocation = (data.location);
            const userBio = (data.bio);
            const userUrl = (data.html_url);            
            
                       
            const nameInput = document.querySelector(".profileName");         

            const localeInput = document.querySelector(".profileLocation");
            
            const bioInput = document.querySelector(".profileBio");
            
            const urlInput = document.querySelector(".profileUrl");

            const avatarInput = document.querySelector(".topCard");


            nameInput.innerHTML = `${userName}`;
            localeInput.innerHTML = `${userLocation} <i class="bi bi-geo-alt"></i>`;
            bioInput.innerHTML = `"${userBio}""`;
            urlInput.innerHTML = `<div class="profileBtn"><a href="${userUrl}" target="_blank"><i class="bi-github" role="img" aria-label="GitHub"></i></a>`;
            avatarInput.innerHTML = `<img src="${userAvatar}" />"`;
            
            

        }).catch(error => console.log(error))
    })
    .catch(error => console.log(error))
    
    
};





