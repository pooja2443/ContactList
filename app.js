// Contact constructor function
function Contact(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

// Get elements from the DOM
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const addContactButton = document.getElementById("addContact");
const contactList = document.getElementById("contactList");

let contacts = [];

// Function to validate phone number
function isValidPhone(phone) {
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;
    return phoneRegex.test(phone);
}

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to add a contact
function addContact() {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !phone || !email) {
        alert("Please fill in all fields!");
        return;
    }

    if (!isValidPhone(phone)) {
        alert("Please enter a valid phone number");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email");
        return;
    }

    // Add contact to the array
    const newContact = new Contact(name, phone, email);
    contacts.push(newContact);

    // Clear input fields
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";

    renderContacts();
}

// Function to delete a contact
function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

// Function to render contacts list
function renderContacts() {
    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${contact.name}</strong><br>
            Phone: ${contact.phone}<br>
            Email: ${contact.email}<br>
            <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(li);
    });
}

// Attach event listener safely
if (addContactButton) {
    addContactButton.addEventListener("click", addContact);
} else {
    console.error("Add Contact Button is missing in HTML.");
}
