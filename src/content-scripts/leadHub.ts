// Main initialization function
function initializeLeadHub() {
    if (!window.location.href.includes("#/leadHub")) {
        console.log("Not on LeadHub tab. Skipping initialization.");
        return;
    }

    addScreeningButton();
    console.log("Initializing Lead Hub...");
    const mainContainer = document.querySelector(".main-container");
    if (!mainContainer) {
        console.error("Main container not found. Retrying...");
        setTimeout(initializeLeadHub, 500); // Retry if the main container isn't ready yet
        return;
    }

    const newLeadButton = document.querySelector(".create-btn");
    if (newLeadButton) {
        console.log("New Lead button found:", newLeadButton);
        attachNewLeadListener(newLeadButton);
    } else {
        console.log("New Lead button not found. Retrying...");
        setTimeout(initializeLeadHub, 1000); // Retry in case the button isn't available yet
    }
}

// Attach listener to the "New Lead" button
function attachNewLeadListener(button: Element) {
    button.addEventListener("click", () => {
        console.log("New Lead button clicked!");
        addCustomButtonsToModal();
        waitForSaveButton();
    });
}

// Wait for the "Save" button and add custom buttons to the modal
function waitForSaveButton() {
    console.log("Waiting for Save button to appear...");

    const observer = new MutationObserver(() => {
        const saveButton = document.querySelector(".btn-saving"); // Replace with actual Save button selector
        if (saveButton) {
            console.log("Save button found:", saveButton);

            attachSaveButtonListener(saveButton);
            observer.disconnect(); // Stop observing once the button is found
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Function to add custom buttons to the left of the modal
// TODO: Add the Check Balance button
function addCustomButtonsToModal() {
    const modal = document.querySelector(".modal-content") as HTMLElement; // Cast modal to HTMLElement
    if (!modal) {
        console.log("Modal not found. Skipping custom button insertion.");
        return;
    }

    // Create a wrapper div for the buttons
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "custom-button-wrapper"; // Apply the CSS class

    // Create toggle switch for "Screen this Lead"
    const toggleWrapper = document.createElement("div");
    toggleWrapper.className = "toggle-wrapper";
    toggleWrapper.style.display = "flex";
    toggleWrapper.style.alignItems = "center";

    const toggleLabel = document.createElement("span");
    toggleLabel.textContent = "Screen this Lead";
    toggleLabel.style.marginRight = "10px";

    const toggleSwitch = document.createElement("label");
    toggleSwitch.className = "toggle-switch";

    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.className = "toggle-input"; // Add a class for styling
    toggleInput.addEventListener("change", () => {
        console.log("Screen this Lead toggled!", toggleInput.checked);
    });

    const toggleSlider = document.createElement("span");
    toggleSlider.className = "slider";

    // Append input and slider to the switch
    toggleSwitch.appendChild(toggleInput);
    toggleSwitch.appendChild(toggleSlider);

    // Add toggle components to the wrapper
    toggleWrapper.appendChild(toggleLabel);
    toggleWrapper.appendChild(toggleSwitch);

    // Add toggle to the button wrapper
    buttonWrapper.appendChild(toggleWrapper);

    // Append the wrapper to the modal
    modal.style.position = "relative"; // Ensure modal has a relative position
    modal.appendChild(buttonWrapper);
    console.log("Custom toggle switch added to the modal.");
}

// Attach a listener to the "Save" button
function attachSaveButtonListener(button: Element) {
    button.addEventListener("click", async () => {
        console.log("Save button clicked!");
        
        const formData = collectFormData();
        console.log("Collected Form Data:", formData);

        // Find the toggle button and check its state
        const toggleInput = document.querySelector(".toggle-switch input[type='checkbox']") as HTMLInputElement;
        if (toggleInput && toggleInput.checked) {
            console.log("Toggle is ON: Sending screening...");
            try {
                await sendToAPI(formData);
                console.log("Screening successfully sent.");
            } catch (error) {
                console.error("Failed to send screening:", error);
            }
        } else {
            console.log("Toggle is OFF: Screening will not be sent.");
        }
    });
}

// Collect form data from the modal
function collectFormData() {
    const firstName = (document.querySelector('input[ng-model="$ctrl.model"]') as HTMLInputElement)?.value || "";
    const lastName = (document.querySelectorAll('input[ng-model="$ctrl.model"]')[1] as HTMLInputElement)?.value || "";
    const email = (document.querySelectorAll('input[ng-model="$ctrl.model"]')[2] as HTMLInputElement)?.value || "";
    const phone = (document.querySelectorAll('input[ng-model="$ctrl.model"]')[3] as HTMLInputElement)?.value || "";

    return { firstName, lastName, email, phone };
}

// Send data to the API
// TODO: Test to see if it works properly, check if API is linked
async function sendToAPI(formData: { firstName: string; lastName: string; email: string; phone: string }) {
    try {
        const response = await fetch("https://cove-stage-a687fd333000.herokuapp.com/api/screenings/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzI1NzFlMDZkMDQwZDY5MzBiZjg1OWEiLCJpYXQiOjE3MzE0NTExMjAsImV4cCI6MTc2MjU1NTEyMH0.kQDoKcLdPgng0W68tbbQZQXIPQHvPdaf-wo2f0ULQjo", // Replace with your actual API key
            },
            body: JSON.stringify({
                applicantFirstName: formData.firstName,
                applicantLastName: formData.lastName,
                applicantEmail: formData.email,
                applicantPhone: formData.phone,
                applicantPays: false, // Example data
                isLiteCheck: false, // Example data
                propertyId: "6737c10af160f7ae2b45f54", // Replace with actual propertyId if available
            }),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log("Screening sent successfully:", responseData);
            alert("Screening sent successfully!");
        } else {
            console.error("Failed to send screening:", response.statusText);
            alert("Failed to send screening. Please try again.");
        }
    } catch (error) {
        console.error("Error sending screening:", error);
        alert("An error occurred while sending the screening.");
    }
}

// Adds the screening button to the leadhub interface
// TODO: Add button UI/UX features such as colour change on click 
// TODO: Resize the iframe upon button click
function addScreeningButton() {
    // and make the website add to container properly
    const buttonContainer = document.querySelector("div[style*='border-radius: 4px;'][style*='border: 1px solid #E0E0E0;']");
    if (!buttonContainer) {
        console.error("Button container not found. Retrying...");
        setTimeout(addScreeningButton, 500); // Retry until the DOM is ready
        return;
    }

    // Check if the button already exists to prevent duplicates
    if (buttonContainer.querySelector(".screening-button")) {
        console.log("Screening button already exists.");
        return;
    }

    // Create the new button
    const newButton = document.createElement("div");
    newButton.className = "listCard screening-button";
    newButton.style.cssText = `
        border-left: solid 1px #E0E0E0;
        border-right: solid 1px #E0E0E0;
        background: #E0E0E0;
        cursor: pointer;
    `;
    newButton.innerHTML = `<span style="color: #1C2630;">SCREENING</span>`;

    // Add click event listener to the new button
    newButton.addEventListener("click", () => {
        const leadDashboard = document.querySelector("#lead-dashboard");
        if (leadDashboard) {
            leadDashboard.innerHTML = `
                <iframe src="https://cove-stage.vercel.app/agent/applicants/672571e06d040d6930bf859a" 
                        style="width:100%; height:100%; border:none;"></iframe>
            `;
            console.log("lead dashboard updated to show screening view.");
        } else {
            console.error("lead dashboard not found.");
        }
    });

    // Append the new button to the container
    buttonContainer.appendChild(newButton);
    console.log("Applicants button added to the button container.");
}

(window as any).initializeLeadHub = initializeLeadHub;
