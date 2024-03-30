const videoContainer = document.getElementById('videoContainer');
const timeSpentDisplay = document.getElementById('timeSpent'); // Reference to display time element

// Rest of your code...
// Simulated dataset of video links
const videoLinks = [
    { title: 'Video 1', source: 'https://xhamster.com/videos/beautiful-girl-fucked-and-creampied-12726059' },
    { title: 'Video 2', source: 'https://xhamster.com/videos/kagney-linn-karter-manuel-ferrara-cola-scene-1-digital-p-10378959' },
    { title: 'Video 3', source: 'https://xhamster.com/videos/the-countrys-favorite-heroine-rebelled-back-then-14818930' },
    { title: 'Video 4', source: 'https://xhamster.com/videos/cheating-husband-with-step-son-xhw2uT4' },
    { title: 'Video 5', source: 'https://xhamster.com/videos/hollywood-erotic-movie-sex-scene-xh98pbJ' },
    { title: 'Video 6', source: 'https://xhamster.com/videos/silvie-deluxe-in-burning-2013-12780223' },
    { title: 'Video 7', source: 'https://xhamster.com/videos/hayley-atwell-sex-and-oral-scene-on-scandalplanet-com-10713605' },
    { title: 'Video 8', source: 'https://xhamster.com/videos/florence-guerin-trine-michelsen-la-bonne-1986-xhQEcNe' },
    { title: 'Video 9', source: 'https://xhamster.com/videos/no-shame-at-all-7239456' },
    { title: 'Video 10', source: 'https://xhamster.com/videos/just-beautiful-boys-and-girls-14187124' },


    // Add more video links as needed
];

/// Function to create a video card element
function createVideoCard(video) {
    const card = document.createElement('div');
    card.classList.add('video-card');

    const videoFrame = document.createElement('iframe');
    videoFrame.setAttribute('src', video.source);
    videoFrame.setAttribute('frameborder', '0');
    videoFrame.setAttribute('allowfullscreen', '');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const title = document.createElement('h3');
    title.textContent = video.title;

    const source = document.createElement('p');
    source.textContent = 'Source: YouTube';

    infoDiv.appendChild(title);
    infoDiv.appendChild(source);

    card.appendChild(videoFrame);
    card.appendChild(infoDiv);

    return card;
}

// Function to populate the video container with video cards
function populateVideoContainer(videos) {
    videoContainer.innerHTML = '';
    videos.forEach(video => {
        const card = createVideoCard(video);
        videoContainer.appendChild(card);
    });
}

// Initially populate the video container with videos
populateVideoContainer(videoLinks);

// Track time spent on the page
let timeSpent = 0;

setInterval(function() {
    timeSpent += 1;
    timeSpentDisplay.textContent = `Time spent on the page: ${timeSpent} seconds`; // Update display element
}, 1000);
