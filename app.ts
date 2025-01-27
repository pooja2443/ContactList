interface Contact {
    name: string;
    phone: string;
    email: string;
}

Input = document.getElementById("name") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const addContactButton = document.getElementById("addContact") as HTMLButtonElement;
const contactList = document.getElementById("contactList") as HTMLUListElement;

let contacts: Contact[] = [];

// Function to add a contact
function addContact(): void {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    
    if (!name || !phone || !email) {
        alert("Please fill in all fields!");
        return;
    }

    // Add contact to the array
    const newContact: Contact = { name, phone, email };
    contacts.push(newContact);

    // Clear input fields
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";

    renderContacts();
}

// Function to delete a contact
function deleteContact(index: number): void {
    contacts.splice(index, 1);
    renderContacts();
}

function renderContacts(): void {
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

addContactButton.addEventListener("click", addContact);
