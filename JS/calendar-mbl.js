document.addEventListener("DOMContentLoaded", function() {
    const events = {
        '2023-10-05': 'Event 1 Example',
        '2023-10-12': 'Event 2 Example',
        '2023-10-20': 'Event 3 Example',
        // Add more events as needed
    };

    const currentDate = document.getElementById("current-month-mobile");
    const daysofMonth = document.querySelector(".days-mobile");
    const arrowsIcons = document.querySelectorAll(".calendar-arrows-mobile img");
    const eventsList = document.getElementById("events-list-mobile");

    //Getting new date, current month and year
    let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

    console.log(date, currMonth, currYear)

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
        let liTag = "";
        

        for (let i = firstDayofMonth; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
        }
        
        for (let i = 1; i <= lastDateofMonth; i++) {
            console.log(i);
            const dateStr = `${currYear}-${(currMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
            const hasEvent = events[dateStr] ? 'has-event-mobile' : '';

            let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active-mobile" : "";
            // Jia and qing add tab index="0"
            liTag += `<li class="${isToday} ${hasEvent} tabindex=0">${i}</li>`
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            liTag += `<li class="inactive-mobile">${ i - lastDayofMonth + 1}</li>`  
        }

        currentDate.innerText = `${months[currMonth]} ${currYear}`;
        daysofMonth.innerHTML = liTag
    }

    renderCalendar();

    arrowsIcons.forEach(icon => {
        icon.addEventListener('click', () => {
        console.log(icon)

        currMonth = icon.id === "left-mobile" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth()
        } else {
            date = new Date();
        }


        renderCalendar()
        });
    });

    document.getElementById("calendar-icon-mobile").addEventListener("click", () => {
        document.getElementById("calendar-content-mobile").style.display = "block";
        document.getElementById("events-list-mobile").style.display = "none";
        renderCalendar();
    });

    const renderEventList = () => {
        eventsList.innerHTML = '';

        for (const dateStr in events) {
            const eventDate = new Date(dateStr);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }).format(eventDate);
            const eventName = events[dateStr];
            const listItem = document.createElement('li');

            const eventDetails = document.createElement('div');
            eventDetails.innerText = `${formattedDate}: ${eventName}`;
            eventDetails.classList.add('event-list-item-mobile');
            
            listItem.appendChild(eventDetails);

            listItem.appendChild(document.createElement('hr'));
            eventsList.appendChild(listItem);
        }
    };

    document.getElementById("list-icon-mobile").addEventListener("click", () => {
        
        document.getElementById("calendar-content-mobile").style.display = "none";
        document.getElementById("events-list-mobile").style.display = "block";
        renderEventList();
    });

    const calendarIcon = document.getElementById("calendar-icon-mobile");
    const listIcon = document.getElementById("list-icon-mobile");

    calendarIcon.addEventListener("click", () => {
        calendarIcon.classList.add("active-mobile");
        listIcon.classList.remove("active-mobile");
    });

    listIcon.addEventListener("click", () => {
        listIcon.classList.add("active-mobile");
        calendarIcon.classList.remove("active-mobile");
    });

});