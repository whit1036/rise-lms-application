const events = {
    '2023-10-05': 'event1',
    '2023-10-12': 'event2',
    '2023-10-20': 'event3',
    // Add more events as needed
};

const currentDate = document.getElementById("current-month"),

daysofMonth = document.querySelector(".days"),

arrowsIcons = document.querySelectorAll(".calendar-arrows img");

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
        const hasEvent = events[dateStr] ? 'has-event' : '';

        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        // Jia and qing add tab index="0"
        liTag += `<li class="${isToday} ${hasEvent} tabindex=0">${i}</li>`
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${ i - lastDayofMonth + 1}</li>`  
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysofMonth.innerHTML = liTag
}

renderCalendar();

arrowsIcons.forEach(icon => {
    icon.addEventListener('click', () => {
    console.log(icon)

    currMonth = icon.id === "left" ? currMonth - 1 : currMonth + 1;

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