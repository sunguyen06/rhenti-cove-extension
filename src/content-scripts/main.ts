console.log("Rhenti Chrome Extension: Script injected!");

if (document.readyState === "complete" || document.readyState === "interactive") {
    console.log("DOM is already loaded. Running script...");
    initializeTab();
} else {
    document.addEventListener("DOMContentLoaded", initializeTab);
}

function initializeTab() {
    (window as any).initializeCoveAccountInfo();
    const currentUrl = window.location.href;

    if (currentUrl.includes("#/leadHub")) {
        console.log("LeadHub tab detected.");
        const activeTab = document.querySelector(".lead-hub-tab") as HTMLElement;
        if (activeTab) updateActiveTab(activeTab);

        if ((window as any).initializeLeadHub) {
            (window as any).initializeLeadHub();
        } else {
            console.error("initializeLeadHub is not defined.");
        }
    } else if (currentUrl.includes("#/coveAccountInfo")) {
        console.log("Cove Account Info tab detected.");
        const activeTab = document.querySelector(".cove-account-info-tab") as HTMLElement;
        if (activeTab) updateActiveTab(activeTab);

        if ((window as any).openCoveAccountInfo) {
            (window as any).openCoveAccountInfo();
        } else {
            console.error("openCoveAccountInfo is not defined.");
        }
    } else {
        console.log("No matching tab detected.");
    }
}

// Initialize the extension
document.addEventListener("DOMContentLoaded", () => {
    console.log("Initializing tabs...");
    if ((window as any).addCoveAccountInfoTab) {
        (window as any).addCoveAccountInfoTab();
    }
    initializeTab();
});

// Handle hash changes for dynamic navigation
window.addEventListener("hashchange", initializeTab);
