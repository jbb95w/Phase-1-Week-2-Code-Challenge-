document.addEventListener('DOMContentLoaded', function() {
    const aniList = document.getElementById('characters');
    const img = document.getElementById('animal-image');
    const name = document.getElementById('animal-name');
    const votes = document.getElementById('animal-votes');
    const voteBtn = document.getElementById('vote-button');
    let currentAnimal = null;

    fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(animals => {
            animals.forEach(animal => {
                const li = document.createElement('li');
                li.textContent = animal.name;
                li.onclick = () => showAnimal(animal);
                aniList.appendChild(li);
            });
        });

    function showAnimal(animal) {
        currentAnimal = animal;
        img.src = animal.image;
        name.textContent = animal.name;
        votes.textContent = animal.votes;
    }

    voteBtn.onclick = function() {
        if (currentAnimal) {
            currentAnimal.votes += 1;
            votes.textContent = currentAnimal.votes;
        }
    };
});

