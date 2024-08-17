// script.js
document.addEventListener('DOMContentLoaded', function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    let currentDate = new Date();

    const monthYear = document.getElementById('month-year');
    const calendarBody = document.getElementById('calendar-body');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    function generateCalendar(date) {
        calendarBody.innerHTML = "";
        monthYear.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        let dayCount = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < firstDay) {
                    cell.textContent = "";
                } else if (dayCount > daysInMonth) {
                    cell.textContent = "";
                } else {
                    cell.textContent = dayCount;
                    if (dayCount === new Date().getDate() && 
                        date.getMonth() === new Date().getMonth() &&
                        date.getFullYear() === new Date().getFullYear()) {
                        cell.classList.add('today');
                    }
                    dayCount++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    generateCalendar(currentDate);
});
