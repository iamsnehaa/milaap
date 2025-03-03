const profiles = [
    {
        name: "Virat Kohli",
        age: 33,
        bio: "Indian cricketer & former captain of the Indian national team. Plays for RCB in IPL.",
        image: "images/profile1.jpg"
    },
    {
        name: "Elon Musk",
        age: 52,
        bio: "CEO of Tesla, SpaceX, and Twitter. Innovator, entrepreneur, and meme enthusiast.",
        image: "images/profile2.jpg"
    },
    {
        name: "Emma Watson",
        age: 34,
        bio: "Actress, activist, and UN Women Goodwill Ambassador. Known for playing Hermione Granger.",
        image: "images/profile3.jpg"
    },
    {
        name: "Cristiano Ronaldo",
        age: 39,
        bio: "Portuguese professional footballer who plays as a forward. 5-time Ballon d'Or winner.",
        image: "images/profile4.jpg"
    }
];

const profileContainer = document.querySelector('.profile-cards');
let currentIndex = 0;

// Function to load profiles
function loadProfiles() {
    profileContainer.innerHTML = '';

    profiles.forEach((profile, index) => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');
        profileCard.style.backgroundImage = `url(${profile.image})`;
        profileCard.innerHTML = `
            <div class="profile-info">
                <h2>${profile.name} <span>${profile.age}</span></h2>
                <p>${profile.bio}</p>
            </div>
        `;
        if (index !== currentIndex) {
            profileCard.style.opacity = "0";
        }
        profileContainer.appendChild(profileCard);
    });
}

// Function to swipe profiles
function swipeProfile(direction) {
    const currentCard = document.querySelectorAll('.profile-card')[currentIndex];
    currentCard.style.transform = `translateX(${direction === "right" ? "100%" : "-100%"}) rotate(${direction === "right" ? "15deg" : "-15deg"})`;
    currentCard.style.opacity = "0";

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % profiles.length;
        loadProfiles();
    }, 500);
}

// Event Listeners
document.querySelector('.like').addEventListener('click', () => swipeProfile("right"));
document.querySelector('.dislike').addEventListener('click', () => swipeProfile("left"));
document.querySelector('.super-like').addEventListener('click', () => swipeProfile("up"));

// Load Initial Profiles
loadProfiles();
