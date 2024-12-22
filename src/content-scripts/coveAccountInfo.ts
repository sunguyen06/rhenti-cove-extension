// Main Initialization function
function initializeCoveAccountInfo() {
    console.log("Initializing extension...");

    // Add the Cove Account Info tab to the sidebar
    addCoveAccountInfoTab();
}

// Opens the account info page in main container
function openCoveAccountInfo() {
    console.log("Opening Cove Account Info...");

    const mainContainer = document.querySelector(".main-container");
    if (!mainContainer) {
        console.error("Main container not found. Retrying...");
        setTimeout(openCoveAccountInfo, 500); // Retry if the main container isn't ready yet
        return;
    }

    // Replace the content with an iframe
    mainContainer.innerHTML = `
        <iframe src="https://cove-stage.vercel.app/agent/enterprise" 
                style="width:100%; height:100%; border:none;"></iframe>
    `;
    console.log("Cove Account Info iframe added to main container.");

    const activeTab = document.querySelector(".cove-account-info-tab") as HTMLElement;
    if (activeTab) updateActiveTab(activeTab);
}

// Adds the Cove Account Info button to Sidebar
// TODO: Add UI/UX features that align with rest of website
function addCoveAccountInfoTab() {
    console.log("Adding Cove Account Info tab...");

    // Locate the sidebar wrapper
    const sidebarWrapper = document.querySelector("#sidebar-wrapper");
    if (!sidebarWrapper) {
        console.error("Sidebar wrapper not found. Retrying...");
        setTimeout(addCoveAccountInfoTab, 500); // Retry until the DOM is ready
        return;
    }

    // Locate the sidebar menu to append the item
    const sidebarMenu = sidebarWrapper.querySelector(".sidebar-body ul.sidebar-menu:last-child");
    if (!sidebarMenu) {
        console.error("Sidebar menu not found. Retrying...");
        setTimeout(addCoveAccountInfoTab, 500); // Retry until the DOM is ready
        return;
    }

    // Check if the tab already exists
    if (document.querySelector(".cove-account-info-tab")) {
        console.log("Cove Account Info tab already exists.");
        return;
    }

    // Create the new tab
    const newTab = document.createElement("a");
    newTab.href = "#/coveAccountInfo";
    newTab.className = "cove-account-info-tab sidebar-item";
    newTab.innerHTML = `
        <img src="../images/icons/cove-account-icon.svg" alt="Cove Account Icon">
        <span class="sidebar-item-title">Cove Account Info</span>
    `;

    // Add event listener for tab click
    newTab.addEventListener("click", (e) => {
        e.preventDefault();
        openCoveAccountInfo();
    });

    // Append to the sidebar menu
    sidebarMenu.appendChild(newTab);
    console.log("Cove Account Info tab added successfully.");
}

// Updates your current tab
// FIXME: Fix the bug where you sometimes can't access another sidebar button on the cove account info interface.
function updateActiveTab(activeTab: HTMLElement) {
    // Remove active class from all sidebar items
    document.querySelectorAll(".sidebar-item").forEach((tab) => {
        (tab as HTMLElement).classList.remove("active");
    });

    // Add active class to the clicked tab
    activeTab.classList.add("active");
}

(window as any).initializeCoveAccountInfo = initializeCoveAccountInfo;
(window as any).openCoveAccountInfo = openCoveAccountInfo;
