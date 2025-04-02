

document.addEventListener("DOMContentLoaded", function() {
    const donorForm = document.getElementById("donorForm");

    if (donorForm) {
        donorForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Get form values
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let bloodType = document.getElementById("bloodType").value;
            let location = document.getElementById("location").value.trim();

            // Basic validation
            if (name === "" || email === "" || phone === "" || bloodType === "" || location === "") {
                alert("⚠ Please fill in all fields.");
                return;
            }

            if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert("⚠ Enter a valid email address.");
                return;
            }

            if (!/^\d{10}$/.test(phone)) {
                alert("⚠ Enter a valid 10-digit phone number.");
                return;
            }

            // Show success message
            document.getElementById("successMessage").style.display = "block";
            donorForm.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const requestForm = document.getElementById("requestForm");

    if (requestForm) {
        requestForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Get form values
            let patientName = document.getElementById("patientName").value.trim();
            let recipientEmail = document.getElementById("recipientEmail").value.trim();
            let recipientPhone = document.getElementById("recipientPhone").value.trim();
            let neededBloodType = document.getElementById("neededBloodType").value;
            let unitsRequired = document.getElementById("unitsRequired").value.trim();
            let hospitalName = document.getElementById("hospitalName").value.trim();
            let recipientLocation = document.getElementById("recipientLocation").value.trim();

            // Basic validation
            if (patientName === "" || recipientEmail === "" || recipientPhone === "" || neededBloodType === "" || unitsRequired === "" || hospitalName === "" || recipientLocation === "") {
                alert("⚠ Please fill in all fields.");
                return;
            }

            if (!/^\S+@\S+\.\S+$/.test(recipientEmail)) {
                alert("⚠ Enter a valid email address.");
                return;
            }

            if (!/^\d{10}$/.test(recipientPhone)) {
                alert("⚠ Enter a valid 10-digit phone number.");
                return;
            }

            if (unitsRequired <= 0) {
                alert("⚠ Please enter a valid number of blood units.");
                return;
            }

            // Show success message
            document.getElementById("requestSuccessMessage").style.display = "block";
            requestForm.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const bloodTypeSearch = document.getElementById("bloodTypeSearch");
    const bloodStockTable = document.getElementById("bloodStockTable");

    if (bloodTypeSearch) {
        bloodTypeSearch.addEventListener("change", function() {
            const selectedBloodType = bloodTypeSearch.value.toUpperCase();
            const rows = bloodStockTable.querySelectorAll("tbody tr");

            rows.forEach(row => {
                const bloodType = row.cells[0].textContent;
                if (selectedBloodType === "" || bloodType.includes(selectedBloodType)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const loginErrorMessage = document.getElementById("loginErrorMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Basic validation for empty fields
            if (email === "" || password === "") {
                alert("⚠ Please fill in all fields.");
                return;
            }

            // Validate email format
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert("⚠ Please enter a valid email.");
                return;
            }

            // Simple login validation (this could be expanded to check against a database)
            if (email === "user@example.com" && password === "password123") {
                alert("✔ Login successful!");
                // Redirect to the home page or dashboard (for example)
                window.location.href = "dashboard.html";  // Change this as needed
            } else {
                // Show error message if credentials are wrong
                loginErrorMessage.style.display = "block";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Example of user role (in a real system, this would come from user data)
    const userRole = "donor"; // Set this dynamically based on user data (donor/recipient)

    // Show donor-related options
    if (userRole === "donor") {
        document.getElementById("donorSection").style.display = "block";
        document.getElementById("recipientSection").style.display = "none";
    }
    // Show recipient-related options
    else if (userRole === "recipient") {
        document.getElementById("donorSection").style.display = "none";
        document.getElementById("recipientSection").style.display = "block";
    }

    // Handle Logout
    const logoutLink = document.getElementById("logoutLink");
    logoutLink.addEventListener("click", function(event) {
        event.preventDefault();
        alert("You have been logged out.");
        // Redirect to login page
        window.location.href = "login.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic form validation
            if (name === "" || email === "" || message === "") {
                alert("⚠ Please fill in all fields.");
                return;
            }

            // Email validation
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert("⚠ Please enter a valid email.");
                return;
            }

            // Simulate sending the message (in real implementation, this could send an email or store the message in a database)
            setTimeout(function() {
                // Show success or error message after "sending" the message
                successMessage.style.display = "block";
                contactForm.reset();
                setTimeout(function() {
                    successMessage.style.display = "none";
                }, 5000);
            }, 1000);
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const adminLoginForm = document.getElementById("adminLoginForm");
    const adminLoginError = document.getElementById("adminLoginError");

    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("adminUsername").value.trim();
            const password = document.getElementById("adminPassword").value.trim();

            // Example admin credentials (Replace with actual backend authentication)
            const adminCredentials = {
                username: "admin",
                password: "admin123"
            };

            if (username === adminCredentials.username && password === adminCredentials.password) {
                alert("✔ Admin Login Successful!");
                window.location.href = "admin-dashboard.html";  // Redirect to admin dashboard
            } else {
                adminLoginError.style.display = "block";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("logout").addEventListener("click", function(event) {
        event.preventDefault();
        alert("You have been logged out.");
        window.location.href = "admin-login.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const donorForm = document.getElementById("addDonorForm");
    const donorTable = document.getElementById("donor-list");

    donorForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("donorName").value;
        const bloodGroup = document.getElementById("donorBloodGroup").value;
        const phone = document.getElementById("donorPhone").value;
        const city = document.getElementById("donorCity").value;

        // Create new row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${bloodGroup}</td>
            <td>${phone}</td>
            <td>${city}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        // Append to table
        donorTable.appendChild(newRow);

        // Reset form & close modal
        donorForm.reset();
        closeDonorForm();

        // Add delete functionality to new delete button
        newRow.querySelector(".delete-btn").addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this donor?")) {
                newRow.remove();
            }
        });
    });

    // Delete functionality for existing donors
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this donor?")) {
                this.closest("tr").remove();
            }
        });
    });
});

// Open and Close Form Functions
function openDonorForm() {
    document.getElementById("donor-form").style.display = "block";
}

function closeDonorForm() {
    document.getElementById("donor-form").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    const recipientForm = document.getElementById("addRecipientForm");
    const recipientTable = document.getElementById("recipient-list");

    recipientForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("recipientName").value;
        const bloodGroup = document.getElementById("recipientBloodGroup").value;
        const phone = document.getElementById("recipientPhone").value;
        const city = document.getElementById("recipientCity").value;

        // Create new row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${bloodGroup}</td>
            <td>${phone}</td>
            <td>${city}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        // Append to table
        recipientTable.appendChild(newRow);

        // Reset form & close modal
        recipientForm.reset();
        closeRecipientForm();

        // Add delete functionality to new delete button
        newRow.querySelector(".delete-btn").addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this recipient?")) {
                newRow.remove();
            }
        });

        // Add edit functionality
        newRow.querySelector(".edit-btn").addEventListener("click", function() {
            editRecipient(newRow);
        });
    });

    // Delete functionality for existing recipients
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this recipient?")) {
                this.closest("tr").remove();
            }
        });
    });

    // Edit functionality
    function editRecipient(row) {
        const cells = row.getElementsByTagName("td");
        document.getElementById("recipientName").value = cells[0].textContent;
        document.getElementById("recipientBloodGroup").value = cells[1].textContent;
        document.getElementById("recipientPhone").value = cells[2].textContent;
        document.getElementById("recipientCity").value = cells[3].textContent;
        
        openRecipientForm();

        recipientForm.onsubmit = function(event) {
            event.preventDefault();
            cells[0].textContent = document.getElementById("recipientName").value;
            cells[1].textContent = document.getElementById("recipientBloodGroup").value;
            cells[2].textContent = document.getElementById("recipientPhone").value;
            cells[3].textContent = document.getElementById("recipientCity").value;
            recipientForm.reset();
            closeRecipientForm();
        };
    }
});

// Open and Close Form Functions
function openRecipientForm() {
    document.getElementById("recipient-form").style.display = "block";
}

function closeRecipientForm() {
    document.getElementById("recipient-form").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const stockForm = document.getElementById("addStockForm");
    const stockTable = document.getElementById("stock-list");

    stockForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const bloodGroup = document.getElementById("bloodGroup").value;
        const units = document.getElementById("bloodUnits").value;

        // Check if blood group already exists
        let existingRow = [...stockTable.rows].find(row => row.cells[0].textContent === bloodGroup);
        if (existingRow) {
            existingRow.cells[1].textContent = parseInt(existingRow.cells[1].textContent) + parseInt(units);
        } else {
            // Create new row
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${bloodGroup}</td>
                <td>${units}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            `;

            // Append to table
            stockTable.appendChild(newRow);

            // Add delete functionality to new delete button
            newRow.querySelector(".delete-btn").addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this stock?")) {
                    newRow.remove();
                }
            });

            // Add edit functionality
            newRow.querySelector(".edit-btn").addEventListener("click", function() {
                editStock(newRow);
            });
        }

        // Reset form & close modal
        stockForm.reset();
        closeStockForm();
    });

    // Delete functionality for existing stocks
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this stock?")) {
                this.closest("tr").remove();
            }
        });
    });

    // Edit functionality
    function editStock(row) {
        const cells = row.getElementsByTagName("td");
        document.getElementById("bloodGroup").value = cells[0].textContent;
        document.getElementById("bloodUnits").value = cells[1].textContent;
        
        openStockForm();

        stockForm.onsubmit = function(event) {
            event.preventDefault();
            cells[1].textContent = document.getElementById("bloodUnits").value;
            stockForm.reset();
            closeStockForm();
        };
    }
});

// Open and Close Form Functions
function openStockForm() {
    document.getElementById("stock-form").style.display = "block";
}

function closeStockForm() {
    document.getElementById("stock-form").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const requestTable = document.getElementById("request-list");

    // Approve Request
    document.querySelectorAll(".approve-btn").forEach(button => {
        button.addEventListener("click", function() {
            let row = this.closest("tr");
            row.querySelector(".status").textContent = "Approved";
            row.querySelector(".status").classList.add("approved");
            row.querySelector(".status").classList.remove("pending", "rejected");
            this.remove();  // Remove approve button
            row.querySelector(".reject-btn").remove();  // Remove reject button
        });
    });

    // Reject Request
    document.querySelectorAll(".reject-btn").forEach(button => {
        button.addEventListener("click", function() {
            let row = this.closest("tr");
            row.querySelector(".status").textContent = "Rejected";
            row.querySelector(".status").classList.add("rejected");
            row.querySelector(".status").classList.remove("pending", "approved");
            this.remove();  // Remove reject button
            row.querySelector(".approve-btn").remove();  // Remove approve button
        });
    });
});





// Donor Statistics Chart
const donorChart = new Chart(document.getElementById("donorChart"), {
    type: "bar",
    data: {
        labels: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        datasets: [{
            label: "Donors",
            data: [120, 45, 85, 40, 150, 30, 60, 20], // Example Data
            backgroundColor: "red"
        }]
    }
});

// Blood Stock Chart
const bloodStockChart = new Chart(document.getElementById("bloodStockChart"), {
    type: "pie",
    data: {
        labels: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"],
        datasets: [{
            data: [10, 15, 20, 5, 8, 10, 6, 4], // Example Data
            backgroundColor: ["#f44336", "#2196F3", "#FF9800", "#4CAF50", "#9C27B0", "#00BCD4", "#E91E63", "#FFC107"]
        }]
    }
});

// Blood Requests Analysis Chart
const requestChart = new Chart(document.getElementById("requestChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Blood Requests",
            data: [30, 50, 45, 70, 90, 120], // Example Data
            borderColor: "red",
            fill: false
        }]
    }
});

// Function to Download Report (Example Placeholder)
function downloadReport() {
    alert("Downloading report (Feature to be implemented)");
}
