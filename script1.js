// Assume `data` is already fetched and available
let allEvents = []; // For main events
let moreEvents = []; // For additional events

fetch('content.json')
    .then(response => response.json())
    .then(data => {
        allEvents = data.online; // Main dataset
        moreEvents = data.online_more; // Additional dataset
        renderEvents(allEvents, '.events-cards-container'); // Render main events
        renderEvents(moreEvents, '.event-cards-bottom-section'); // Render additional events
    });

// Function to render events
function renderEvents(events, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ''; // Clear existing content in the container
    events.forEach(event => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'feed-card-cell';

        cardContainer.innerHTML = `
        <div class="card-container">
            <div style="position: absolute;height: 100%;width: 100%;pointer-events: none;top: 0;left: 0;"></div>
            <a class="event-card-link">
                <div class="event-card-image container">
                    <img height="256" width="512" class="event-card-image" src="${event.eventCard.img}">
                </div>
            </a>
            <section class="event-card-details">
                <div class="card-content-div">
                    <a class="event-card-link">
                        <h3 class="card-content-head">${event.eventCard.title}</h3>
                    </a>
                    <p class="event-card-para md-bold-para">
                        ${event.eventCard.date}
                    </p>
                    <div class="event-price-details">
                        <p class="event-card-para md-bold-para">
                            ${event.eventCard.price}
                        </p>
                    </div>
                    <div>
                        <p class="md-bold-para">${event.eventCard.hostName}</p>
                        <div style="display:flex;align-items:center;">
                            <i class="user-icon"><svg id="user-chunky_svg__eds-icon--user-chunky_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="user-chunky_svg__eds-icon--user-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M12 18c-1.2 0-2.4-.3-3.5-.7.6-1.3 2-2.2 3.5-2.2s2.9.9 3.5 2.2c-1.1.4-2.3.7-3.5.7zm6.5-2.9c-.4.4-.8.8-1.3 1.1a5.989 5.989 0 00-10.6 0c-.5-.3-.9-.7-1.3-1.1L4 16.5c2.1 2.3 5 3.5 8 3.5s5.9-1.3 8-3.5l-1.5-1.4z"></path><path id="user-chunky_svg__eds-icon--user-chunky_circle" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.7 4 7.8 5.9 7.8 8.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2S14.3 4 12 4zm0 6.4c-1.2 0-2.2-1-2.2-2.2C9.8 7 10.8 6 12 6s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"></path></svg></i>
                            <span class="md-bold-para">${event.eventCard.followers}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>`;
        container.appendChild(cardContainer);
    });
}

// Function to filter events for both containers
function filterEvents(filter) {
    const today = new Date();
    let filteredMainEvents = [];
    let filteredMoreEvents = [];

    if (filter === 'all') {
        filteredMainEvents = allEvents;
        filteredMoreEvents = moreEvents;
    } else if (filter === 'today') {
        filteredMainEvents = allEvents.filter(event => event.eventCard.date.includes('Today'));
        filteredMoreEvents = moreEvents.filter(event => event.eventCard.date.includes('Today'));
    } else if (filter === 'this-weekend') {
        filteredMainEvents = allEvents.filter(event => {
            const eventDate = new Date(event.eventCard.date);
            const day = eventDate.getDay();
            return day === 6 || day === 0; // Saturday or Sunday
        });
        filteredMoreEvents = moreEvents.filter(event => {
            const eventDate = new Date(event.eventCard.date);
            const day = eventDate.getDay();
            return day === 6 || day === 0; // Saturday or Sunday
        });
    } else if (filter === 'free') {
        filteredMainEvents = allEvents.filter(event => event.eventCard.price.toLowerCase() === 'free');
        filteredMoreEvents = moreEvents.filter(event => event.eventCard.price.toLowerCase() === 'free');
    }

    renderEvents(filteredMainEvents, '.events-cards-container');
    renderEvents(filteredMoreEvents, '.event-cards-bottom-section');
}



// Add event listeners
document.getElementById('all').addEventListener('click', () => filterEvents('all'));
document.getElementById('today').addEventListener('click', () => filterEvents('today'));
document.getElementById('this-weekend').addEventListener('click', () => filterEvents('this-weekend'));
document.getElementById('free').addEventListener('click', () => filterEvents('free'));



const tabs = document.querySelectorAll('.tabs-item .eds-btn--button')

function toggleActiveClass(event){
    tabs.forEach(tab => {
        const span = tab.querySelector('.eds-text')
        if(span){
            span.classList.remove('active')
        }
    });

    const clickedSpan = event.currentTarget.querySelector('.eds-text')
    if(clickedSpan){
        clickedSpan.classList.add('active')
    }
}

tabs.forEach(tab =>{
    tab.addEventListener('click', toggleActiveClass)
})