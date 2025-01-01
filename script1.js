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
                    <section class= "event-card-actions">
                        <div><button class ="event-actions">
                        <i class="eds-vector-image eds-icon--small eds-vector-image--grey-700 eds-vector-image--block" title="" data-spec="icon" data-testid="icon"><svg id="heart-chunky_svg__eds-icon--user-chunky_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="heart-chunky_svg__eds-icon--heart-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z"></path></svg><span class="eds-is-hidden-accessible">Save this event: Women Unlock Your Full Manifesting Potential: A 4-Week Vision Board Retreat</span></i></div>
                        <div><button class = "event-actions"> <i class="eds-vector-image eds-icon--small eds-vector-image--block" title="" data-spec="icon" data-testid="icon"><svg id="share-ios-chunky_svg__eds-icon--share-ios-chunky_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="share-ios-chunky_svg__eds-icon--share-ios-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M18 16v2H6v-2H4v4h16v-4z"></path><path id="share-ios-chunky_svg__eds-icon--share-ios-chunky_arrow" fill-rule="evenodd" clip-rule="evenodd" d="M12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z"></path></svg><span class="eds-is-hidden-accessible">Share this event: Women Unlock Your Full Manifesting Potential: A 4-Week Vision Board Retreat</span></i></div>
                        <div><button class = "event-actions"> <i class="eds-vector-image eds-icon--small eds-vector-image--block" title="" data-spec="icon" data-testid="icon"><svg id="horizontal-dots-chunky_svg__eds-icon--horizontal-dots-chunky_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="horizontal-dots-chunky_svg__eds-icon--horizontal-dots-chunky_dot_2" fill-rule="evenodd" clip-rule="evenodd" d="M16 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path><circle id="horizontal-dots-chunky_svg__eds-icon--horizontal-dots-chunky_dot_1" fill-rule="evenodd" clip-rule="evenodd" cx="12" cy="12" r="2"></circle><circle id="horizontal-dots-chunky_svg__eds-icon--horizontal-dots-chunky_dot" fill-rule="evenodd" clip-rule="evenodd" cx="6" cy="12" r="2"></circle></svg><span class="eds-is-hidden-accessible">Promoted event actions</span></i></div>
                    </section>
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
    }else if(filter === 'music'){
        filteredMainEvents = allEvents.filter(event => event.eventCard.category === 'music')
        filteredMoreEvents = moreEvents.filter(event => event.eventCard.category === 'music')
    }else if(filter === 'online'){
        filteredMainEvents = allEvents.filter(event => event.eventCard.category === 'online')
        filteredMoreEvents = moreEvents.filter(event => event.eventCard.category === 'online')
    }

    renderEvents(filteredMainEvents, '.events-cards-container');
    renderEvents(filteredMoreEvents, '.event-cards-bottom-section');
}

const head = document.querySelector('.sec-section-head')

// Add event listeners
document.getElementById('all').addEventListener('click', () => {
    filterEvents('all')
    head.innerText = 'More online events'
});
document.getElementById('today').addEventListener('click', () => {
    filterEvents('today')
    head.innerText = 'More events today'
});
document.getElementById('this-weekend').addEventListener('click', () => {
    filterEvents('this-weekend')
    head.innerText = 'More events this weekend'
});
document.getElementById('free').addEventListener('click', () => {
    filterEvents('free')
    head.innerText = 'More free events'
});
document.getElementById('music').addEventListener('click',() =>{
    filterEvents('music')
    head.innerText = 'More music events'
});
document.getElementById('online').addEventListener('click', () => {
    filterEvents('online')
    head.innerText ='More online events'
})



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