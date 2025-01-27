
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("email");
var addContactButton = document.getElementById("addContact");
var contactList = document.getElementById("contactList");


var contacts = [];


function addContact() {
    var name = nameInput.value.trim();
    var phone = phoneInput.value.trim();
    var email = emailInput.value.trim();


    if (!name || !phone || !email) {
        alert("Please fill in all fields!");
        return;
    }

    var newContact = { name: name, phone: phone, email: email };
    contacts.push(newContact);


    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";


    renderContacts();
}


function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}


function renderContacts() {
    contactList.innerHTML = "";

    contacts.forEach(function (contact, index) {
        var li = document.createElement("li");
        li.innerHTML = "<strong>" + contact.name + "</strong><br>" +
            "Phone: " + contact.phone + "<br>" +
            "Email: " + contact.email + "<br>";
        contactList.appendChild(li);
    });
}

addContactButton.addEventListener("click", addContact);
