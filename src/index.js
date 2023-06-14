console.log('%c HI', 'color: firebrick')


 addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        data.message.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;

            imageContainer.appendChild(img);
        });
        
    })
    .catch(error => {
        console.error("error:", error);  

 });
})



const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedListContainer = document.getElementById('breed-list');


fetch(breedUrl)
.then(response => response.json()) 
.then(data => {
    const breeds = Object.keys(data.message);


    breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        breedListContainer.appendChild(li);

    });

})
.catch(error => {
    console.log("Error", error);

});


breedListContainer.addEventListener('click', event => {
    event.target.style.color = 'red';
  });
  
  const breedFilterDropdown = document.getElementById('breed-filter-dropdown');
  
  breedFilterDropdown.addEventListener('change', event => {
    const selectedLetter = event.target.value.toLowerCase();
    const breedListItems = breedListContainer.getElementsByTagName('li');
  
    Array.from(breedListItems).forEach(item => {
      const breedName = item.textContent.toLowerCase();
  
      if (breedName.startsWith(selectedLetter)) {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  });