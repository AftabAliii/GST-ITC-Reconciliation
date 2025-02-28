// Hide all data sections initially
document.querySelectorAll('.data-content').forEach(div => {
    div.style.display = "none";
});

function showData(monthId, element) {
    // Hide all data sections
    document.querySelectorAll('.data-content').forEach(div => {
        div.style.display = "none";
    });

    // Remove active class from all month buttons
    document.querySelectorAll('.month-item').forEach(btn => {
        btn.classList.remove("active");
    });

    // Show the selected data section
    document.getElementById(monthId).style.display = "block";

    // Highlight the clicked button
    element.classList.add("active");
}