document.getElementById('addEducationForm').addEventListener('click', function () {
    addEducationForm();
});

document.getElementById('addExperienceForm').addEventListener('click', function () {
    addExperienceForm();
});

function addEducationForm() {
    const educationSection = document.querySelector('.educationForm');
    const addButton = document.getElementById('addEducationForm');
    const newForm = document.createElement('form');
    newForm.classList.add('education');
    newForm.innerHTML = `
        <h4><label for="schoolInput">school :</label></h4>
        <input id="schoolInput" type="text" placeholder="enter your school">
        <span class="schoolError"></span>
        <h4><label for="checkinInput">check in date :</label></h4>
        <input id="checkinInput" type="date" placeholder="enter check in date">
        <span class="schoolcheckinError"></span>
        <h4><label for="checkoutInput">check out date :</label></h4>
        <input id="checkoutInput" type="date" placeholder="enter your check out date">
        <span class="schoolcheckoutError"></span>
    `;
    educationSection.insertBefore(newForm, addButton);
}

function addExperienceForm() {
    const experienceSection = document.querySelector('.experienceForm');
    const addButton = document.getElementById('addExperienceForm');
    const newForm = document.createElement('form');
    newForm.classList.add('experience');
    newForm.innerHTML = `
        <h4><label for="experienceCompany">company :</label></h4>
        <input id="experienceCompany" type="text" placeholder="where did you gain experience?">
        <span class="experienceError"></span>
        <h4><label for="experienceCheckinInput">check in date :</label></h4>
        <input id="experienceCheckinInput" type="date" placeholder="enter check in date">
        <span class="experienceCheckinError"></span>
        <h4><label for="experienceCheckoutInput">check out date :</label></h4>
        <input id="experienceCheckoutInput" type="date" placeholder="enter check out date">
        <span class="experienceCheckoutError"></span>
    `;
    experienceSection.insertBefore(newForm, addButton);
}

document.getElementById("generateCVBtn").addEventListener("click", function(event) {
    event.preventDefault();
    let isValid = true;
    let errorElements = document.querySelectorAll('.formError');
    errorElements.forEach(function(errorElement) {
        errorElement.textContent = '';
    });

    const imgInput = document.getElementById("imgInput");
    const imageError = document.getElementById("imageError");
    if (!imgInput.value) {
        imageError.textContent = "Image is required.";
        isValid = false;
    }

    const firstNameInput = document.getElementById("firstNameInput");
    const firstNameError = document.getElementById("firsNameError");
    if (!firstNameInput.value) {
        firstNameError.textContent = "First name is required.";
        isValid = false;
    }

    const lastNameInput = document.getElementById("lastNameInput");
    const lastNameError = document.getElementById("lastNameError");
    if (!lastNameInput.value) {
        lastNameError.textContent = "Last name is required.";
        isValid = false;
    }

    const jobeTitelInput = document.getElementById("jobeTitelInput");
    const jobeTiteError = document.getElementById("jobeTiteError");
    if (!jobeTitelInput.value) {
        jobeTiteError.textContent = "Job title is required.";
        isValid = false;
    }

    const ageInput = document.getElementById("ageInput");
    const ageError = document.getElementById("ageError");
    if (!ageInput.value) {
        ageError.textContent = "Age is required.";
        isValid = false;
    }

    const addressInput = document.getElementById("adressInput");
    const addressError = document.getElementById("adressError");
    if (!addressInput.value) {
        addressError.textContent = "Address is required.";
        isValid = false;
    }

    const emailForm = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  
    const emailInput = document.getElementById("emailInput");
    const emailError = document.getElementById("emailError");
    if (!emailInput.value) {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailForm.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    const phoneInput = document.getElementById("phoneInput");
    const phoneNumberError = document.getElementById("phonenumberError");
    if (!phoneInput.value) {
        phoneNumberError.textContent = "Phone number is required.";
        isValid = false;
    }

    const aboutInput = document.getElementById("aboutInput");
    const aboutError = document.getElementById("aboutError");
    if (!aboutInput.value) {
        aboutError.textContent = "Description is required.";
        isValid = false;
    }

    const educationForms = document.querySelectorAll('.education');
    educationForms.forEach(function(form) {
        const schoolInput = form.querySelector('#schoolInput');
        const schoolError = form.querySelector('.schoolError');
        const checkinInput = form.querySelector('#checkinInput');
        const schoolCheckinError = form.querySelector('.schoolcheckinError');
        const checkoutInput = form.querySelector('#checkoutInput');
        const schoolCheckoutError = form.querySelector('.schoolcheckoutError');


        if (!schoolInput.value) {
            schoolError.textContent = "School is required.";
            isValid = false;
        }
        if (!checkinInput.value) {
            schoolCheckinError.textContent = "Check-in date is required.";
            isValid = false;
        }
        if (!checkoutInput.value) {
            schoolCheckoutError.textContent = "Check-out date is required.";
            isValid = false;
        }
    });

    const experienceForms = document.querySelectorAll('.experience');
    experienceForms.forEach(function(form) {
        const experienceCompany = form.querySelector('#experienceCompany');
        const experienceError = form.querySelector('.experienceError');
        const experienceCheckinInput = form.querySelector('#experienceCheckinInput');
        const experienceCheckinError = form.querySelector('.experienceCheckinError');
        const experienceCheckoutInput = form.querySelector('#experienceCheckoutInput');
        const experienceCheckoutError = form.querySelector('.experienceCheckoutError');

        if (!experienceCompany.value) {
            experienceError.textContent = "Company is required.";
            isValid = false;
        }
        if (!experienceCheckinInput.value) {
            experienceCheckinError.textContent = "Experience check-in date is required.";
            isValid = false;
        }
        if (!experienceCheckoutInput.value) {
            experienceCheckoutError.textContent = "Experience check-out date is required.";
            isValid = false;
        }

    });

    if (isValid) {
        document.getElementById("cvfirstname").textContent = document.getElementById("firstNameInput").value;
        document.getElementById("cvlastname").textContent = document.getElementById("lastNameInput").value;
        document.getElementById("cv_jobeTitel").textContent = document.getElementById("jobeTitelInput").value;
        document.getElementById("cvAge").textContent = document.getElementById("ageInput").value + " years old";
        document.getElementById("cvadress").textContent = document.getElementById("adressInput").value;
        document.getElementById("cvemail").textContent = document.getElementById("emailInput").value;
        document.getElementById("cvphonNumber").textContent = document.getElementById("phoneInput").value;
        document.getElementById("discriptionCV").textContent = document.getElementById("aboutInput").value;


        const educationForms = document.querySelectorAll('.education');
        educationForms.forEach(function(form, index) {
            const schoolInput = form.querySelector('#schoolInput');
            const checkinInput = form.querySelector('#checkinInput');
            const checkoutInput = form.querySelector('#checkoutInput');
            document.getElementById("cvSchool").textContent = schoolInput.value;
            document.getElementById("cvshcoolCHickin").textContent = checkinInput.value;
            document.getElementById("cvschoolCHickout").textContent = checkoutInput.value;
        });


        const experienceForms = document.querySelectorAll('.experience');
        experienceForms.forEach(function(form) {
            const experienceCompany = form.querySelector('#experienceCompany');
            const experienceCheckinInput = form.querySelector('#experienceCheckinInput');
            const experienceCheckoutInput = form.querySelector('#experienceCheckoutInput');
            document.getElementById("cvexperence").textContent = experienceCompany.value;
            document.getElementById("cvexperenceCHickin").textContent = experienceCheckinInput.value;
            document.getElementById("cvexperenceCHickout").textContent = experienceCheckoutInput.value;
        });
    }
});
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888

// put Image to cv froom inputs
document.getElementById("imgInput").addEventListener("change", function (event) {
    const imgInput = event.target;
    const imgElement = document.getElementById("cvImgProfel");
    
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            imgElement.src = e.target.result;  
        }
        
        reader.readAsDataURL(imgInput.files[0]);
    }
});

// Download CV 
document.getElementById("dowload").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const cvContent = document.querySelector('.CVartical');
    
    doc.html(cvContent, {
        callback: function (doc) {
            doc.save('CV.pdf');
        },
        x: 10,
        y: 10,
        width: 180
    });
});





