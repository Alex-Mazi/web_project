document.addEventListener("DOMContentLoaded", function () {
  window.EVENTS = [
    {
      title: "Live Python Class",
      start: "2025-03-05",
      description: "Beginner-friendly live coding session covering Python basics.",
      instructor: "Christina Perifana",
    },
    {
      title: "Frontend Workshop",
      start: "2025-03-12",
      description: "Hands-on workshop with HTML, CSS, and JavaScript.",
      instructor: "Alexandra Mazi",
    },
  ];

  const calendarEl = document.getElementById("fullcalendar-container");
  if (!calendarEl) return;

  // 🔹 Create ONE tooltip
  const tooltip = document.createElement("div");
  tooltip.className = "event-tooltip";
  document.body.appendChild(tooltip);

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    height: "auto",
    locale: "en",
    eventDisplay: "block",
    events: window.EVENTS,


    headerToolbar: {
      left: "prev",
      center: "title",
      right: "next",
    },

   

    eventDidMount: function (info) {
      const dayCell = info.el.closest(".fc-daygrid-day");
      if (dayCell) dayCell.classList.add("has-custom-event");

      info.el.style.backgroundColor = "#800020";
      info.el.style.borderColor = "#800020";

      info.el.addEventListener("mouseenter", (e) => {
        tooltip.innerHTML = `
          <strong>${info.event.title}</strong><br>
          ${info.event.extendedProps.description}<br>
          <em>${info.event.extendedProps.instructor}</em>
        `;
        tooltip.style.display = "block";
      });

      info.el.addEventListener("mousemove", (e) => {
        const padding = 12;
        tooltip.style.left = Math.min(
          e.pageX + padding,
          window.innerWidth - tooltip.offsetWidth - padding
        ) + "px";

        tooltip.style.top = Math.min(
          e.pageY + padding,
          window.innerHeight - tooltip.offsetHeight - padding
        ) + "px";
      });

      info.el.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });
    },
  });

  calendar.render();
});
