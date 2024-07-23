// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar ul li a');
    const profile = document.querySelector('.profile');
    const dropdown = document.querySelector('.dropdown');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.content .card').forEach(card => {
                card.style.display = 'none';
            });
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target).style.display = 'block';
        });
    });

    profile.addEventListener('click', function () {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (e) {
        if (!profile.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    // Display the first section by default
    document.querySelector('.content .card').style.display = 'block';
});



// Add event listeners for form submissions if necessary
document.addEventListener('DOMContentLoaded', function () {
    // Existing code...

    // Add form submission handling if needed
    document.querySelectorAll('#general-settings-form, #account-settings-form, #privacy-settings-form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Handle form submission (e.g., send data via AJAX)
            alert('Settings saved!');
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-word-form');
    const tableBody = document.getElementById('vocabulary-table').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const word = document.getElementById('word').value;
        const meaning = document.getElementById('meaning').value;
        const example = document.getElementById('example').value;

        // Create a new row
        const newRow = tableBody.insertRow();

        // Insert cells
        newRow.insertCell().textContent = word;
        newRow.insertCell().textContent = meaning;
        newRow.insertCell().textContent = example;
        
        const actionsCell = newRow.insertCell();
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function () {
            tableBody.removeChild(newRow);
        });
        actionsCell.appendChild(deleteBtn);

        // Clear form
        form.reset();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.lesson-level');

    sections.forEach(section => {
        section.addEventListener('click', function () {
            this.classList.toggle('expanded');
            const isExpanded = this.classList.contains('expanded');
            this.querySelectorAll('ul').forEach(ul => {
                ul.style.display = isExpanded ? 'block' : 'none';
            });
        });
    });
});



    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }
