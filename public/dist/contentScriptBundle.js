/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content-scripts/coveAccountInfo.ts":
/*!************************************************!*\
  !*** ./src/content-scripts/coveAccountInfo.ts ***!
  \************************************************/
/***/ (() => {


function initializeCoveAccountInfo() {
    console.log("Initializing extension...");
    // Add the Cove Account Info tab to the sidebar
    addCoveAccountInfoTab();
}
function openCoveAccountInfo() {
    console.log("Opening Cove Account Info...");
    var mainContainer = document.querySelector(".main-container");
    if (!mainContainer) {
        console.error("Main container not found. Retrying...");
        setTimeout(openCoveAccountInfo, 500); // Retry if the main container isn't ready yet
        return;
    }
    // Replace the content with an iframe
    mainContainer.innerHTML = "\n        <iframe src=\"https://cove-stage.vercel.app/agent/enterprise\" \n                style=\"width:100%; height:100%; border:none;\"></iframe>\n    ";
    console.log("Cove Account Info iframe added to main container.");
    var activeTab = document.querySelector(".cove-account-info-tab");
    if (activeTab)
        updateActiveTab(activeTab);
}
function addCoveAccountInfoTab() {
    console.log("Adding Cove Account Info tab...");
    // Locate the sidebar wrapper
    var sidebarWrapper = document.querySelector("#sidebar-wrapper");
    if (!sidebarWrapper) {
        console.error("Sidebar wrapper not found. Retrying...");
        setTimeout(addCoveAccountInfoTab, 500); // Retry until the DOM is ready
        return;
    }
    // Locate the sidebar menu to append the item
    var sidebarMenu = sidebarWrapper.querySelector(".sidebar-body ul.sidebar-menu:last-child");
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
    var newTab = document.createElement("a");
    newTab.href = "#/coveAccountInfo";
    newTab.className = "cove-account-info-tab sidebar-item";
    newTab.innerHTML = "\n        <img src=\"../images/icons/cove-account-icon.svg\" alt=\"Cove Account Icon\">\n        <span class=\"sidebar-item-title\">Cove Account Info</span>\n    ";
    // Add event listener for tab click
    newTab.addEventListener("click", function (e) {
        e.preventDefault();
        openCoveAccountInfo();
    });
    // Append to the sidebar menu
    sidebarMenu.appendChild(newTab);
    console.log("Cove Account Info tab added successfully.");
}
function updateActiveTab(activeTab) {
    // Remove active class from all sidebar items
    document.querySelectorAll(".sidebar-item").forEach(function (tab) {
        tab.classList.remove("active");
    });
    // Add active class to the clicked tab
    activeTab.classList.add("active");
}
window.initializeCoveAccountInfo = initializeCoveAccountInfo;
window.openCoveAccountInfo = openCoveAccountInfo;


/***/ }),

/***/ "./src/content-scripts/leadHub.ts":
/*!****************************************!*\
  !*** ./src/content-scripts/leadHub.ts ***!
  \****************************************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Main initialization function
function initializeLeadHub() {
    if (!window.location.href.includes("#/leadHub")) {
        console.log("Not on LeadHub tab. Skipping initialization.");
        return;
    }
    console.log("Initializing Lead Hub...");
    var mainContainer = document.querySelector(".main-container");
    if (!mainContainer) {
        console.error("Main container not found. Retrying...");
        setTimeout(initializeLeadHub, 500); // Retry if the main container isn't ready yet
        return;
    }
    var newLeadButton = document.querySelector(".create-btn");
    if (newLeadButton) {
        console.log("New Lead button found:", newLeadButton);
        attachNewLeadListener(newLeadButton);
    }
    else {
        console.log("New Lead button not found. Retrying...");
        setTimeout(initializeLeadHub, 1000); // Retry in case the button isn't available yet
    }
}
// Attach listener to the "New Lead" button
function attachNewLeadListener(button) {
    button.addEventListener("click", function () {
        console.log("New Lead button clicked!");
        addCustomButtonsToModal();
        waitForSaveButton();
    });
}
// Wait for the "Save" button and add custom buttons to the modal
function waitForSaveButton() {
    console.log("Waiting for Save button to appear...");
    var observer = new MutationObserver(function () {
        var saveButton = document.querySelector(".btn-saving"); // Replace with actual Save button selector
        if (saveButton) {
            console.log("Save button found:", saveButton);
            attachSaveButtonListener(saveButton);
            observer.disconnect(); // Stop observing once the button is found
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}
// Function to add custom buttons to the left of the modal
function addCustomButtonsToModal() {
    var modal = document.querySelector(".modal-content"); // Cast modal to HTMLElement
    if (!modal) {
        console.log("Modal not found. Skipping custom button insertion.");
        return;
    }
    // Create a wrapper div for the buttons
    var buttonWrapper = document.createElement("div");
    buttonWrapper.className = "custom-button-wrapper"; // Apply the CSS class
    // Create toggle switch for "Screen this Lead"
    var toggleWrapper = document.createElement("div");
    toggleWrapper.className = "toggle-wrapper";
    toggleWrapper.style.display = "flex";
    toggleWrapper.style.alignItems = "center";
    var toggleLabel = document.createElement("span");
    toggleLabel.textContent = "Screen this Lead";
    toggleLabel.style.marginRight = "10px";
    var toggleSwitch = document.createElement("label");
    toggleSwitch.className = "toggle-switch";
    var toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.className = "toggle-input"; // Add a class for styling
    toggleInput.addEventListener("change", function () {
        console.log("Screen this Lead toggled!", toggleInput.checked);
    });
    var toggleSlider = document.createElement("span");
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
function attachSaveButtonListener(button) {
    var _this = this;
    button.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var formData, toggleInput, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Save button clicked!");
                    formData = collectFormData();
                    console.log("Collected Form Data:", formData);
                    toggleInput = document.querySelector(".toggle-switch input[type='checkbox']");
                    if (!(toggleInput && toggleInput.checked)) return [3 /*break*/, 5];
                    console.log("Toggle is ON: Sending screening...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, sendToAPI(formData)];
                case 2:
                    _a.sent();
                    console.log("Screening successfully sent.");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Failed to send screening:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    console.log("Toggle is OFF: Screening will not be sent.");
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); });
}
// Collect form data from the modal
function collectFormData() {
    var _a, _b, _c, _d;
    var firstName = ((_a = document.querySelector('input[ng-model="$ctrl.model"]')) === null || _a === void 0 ? void 0 : _a.value) || "";
    var lastName = ((_b = document.querySelectorAll('input[ng-model="$ctrl.model"]')[1]) === null || _b === void 0 ? void 0 : _b.value) || "";
    var email = ((_c = document.querySelectorAll('input[ng-model="$ctrl.model"]')[2]) === null || _c === void 0 ? void 0 : _c.value) || "";
    var phone = ((_d = document.querySelectorAll('input[ng-model="$ctrl.model"]')[3]) === null || _d === void 0 ? void 0 : _d.value) || "";
    return { firstName: firstName, lastName: lastName, email: email, phone: phone };
}
// Send data to the API
function sendToAPI(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var response, responseData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("https://cove-stage-a687fd333000.herokuapp.com/api/screenings/create", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer YOUR_API_KEY_HERE", // Replace with your actual API key
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
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseData = _a.sent();
                    console.log("Screening sent successfully:", responseData);
                    alert("Screening sent successfully!");
                    return [3 /*break*/, 4];
                case 3:
                    console.error("Failed to send screening:", response.statusText);
                    alert("Failed to send screening. Please try again.");
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Error sending screening:", error_2);
                    alert("An error occurred while sending the screening.");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
window.initializeLeadHub = initializeLeadHub;


/***/ }),

/***/ "./src/content-scripts/main.ts":
/*!*************************************!*\
  !*** ./src/content-scripts/main.ts ***!
  \*************************************/
/***/ (() => {


console.log("Rhenti Chrome Extension: Script injected!");
if (document.readyState === "complete" || document.readyState === "interactive") {
    console.log("DOM is already loaded. Running script...");
    initializeTab();
}
else {
    document.addEventListener("DOMContentLoaded", initializeTab);
}
function initializeTab() {
    window.initializeCoveAccountInfo();
    var currentUrl = window.location.href;
    if (currentUrl.includes("#/leadHub")) {
        console.log("LeadHub tab detected.");
        var activeTab = document.querySelector(".lead-hub-tab");
        if (activeTab)
            updateActiveTab(activeTab);
        if (window.initializeLeadHub) {
            window.initializeLeadHub();
        }
        else {
            console.error("initializeLeadHub is not defined.");
        }
    }
    else if (currentUrl.includes("#/coveAccountInfo")) {
        console.log("Cove Account Info tab detected.");
        var activeTab = document.querySelector(".cove-account-info-tab");
        if (activeTab)
            updateActiveTab(activeTab);
        if (window.openCoveAccountInfo) {
            window.openCoveAccountInfo();
        }
        else {
            console.error("openCoveAccountInfo is not defined.");
        }
    }
    else {
        console.log("No matching tab detected.");
    }
}
// Initialize the extension
document.addEventListener("DOMContentLoaded", function () {
    console.log("Initializing tabs...");
    if (window.addCoveAccountInfoTab) {
        window.addCoveAccountInfoTab();
    }
    initializeTab();
});
// Handle hash changes for dynamic navigation
window.addEventListener("hashchange", initializeTab);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_modules__["./src/content-scripts/leadHub.ts"]();
/******/ 	__webpack_modules__["./src/content-scripts/coveAccountInfo.ts"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/content-scripts/main.ts"]();
/******/ 	var __webpack_export_target__ = window;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7OztBQ3ROYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQtc2NyaXB0cy9jb3ZlQWNjb3VudEluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQtc2NyaXB0cy9sZWFkSHViLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50LXNjcmlwdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBpbml0aWFsaXplQ292ZUFjY291bnRJbmZvKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIGV4dGVuc2lvbi4uLlwiKTtcbiAgICAvLyBBZGQgdGhlIENvdmUgQWNjb3VudCBJbmZvIHRhYiB0byB0aGUgc2lkZWJhclxuICAgIGFkZENvdmVBY2NvdW50SW5mb1RhYigpO1xufVxuZnVuY3Rpb24gb3BlbkNvdmVBY2NvdW50SW5mbygpIHtcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5pbmcgQ292ZSBBY2NvdW50IEluZm8uLi5cIik7XG4gICAgdmFyIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuICAgIGlmICghbWFpbkNvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWFpbiBjb250YWluZXIgbm90IGZvdW5kLiBSZXRyeWluZy4uLlwiKTtcbiAgICAgICAgc2V0VGltZW91dChvcGVuQ292ZUFjY291bnRJbmZvLCA1MDApOyAvLyBSZXRyeSBpZiB0aGUgbWFpbiBjb250YWluZXIgaXNuJ3QgcmVhZHkgeWV0XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVwbGFjZSB0aGUgY29udGVudCB3aXRoIGFuIGlmcmFtZVxuICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcXG4gICAgICAgIDxpZnJhbWUgc3JjPVxcXCJodHRwczovL2NvdmUtc3RhZ2UudmVyY2VsLmFwcC9hZ2VudC9lbnRlcnByaXNlXFxcIiBcXG4gICAgICAgICAgICAgICAgc3R5bGU9XFxcIndpZHRoOjEwMCU7IGhlaWdodDoxMDAlOyBib3JkZXI6bm9uZTtcXFwiPjwvaWZyYW1lPlxcbiAgICBcIjtcbiAgICBjb25zb2xlLmxvZyhcIkNvdmUgQWNjb3VudCBJbmZvIGlmcmFtZSBhZGRlZCB0byBtYWluIGNvbnRhaW5lci5cIik7XG4gICAgdmFyIGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZS1hY2NvdW50LWluZm8tdGFiXCIpO1xuICAgIGlmIChhY3RpdmVUYWIpXG4gICAgICAgIHVwZGF0ZUFjdGl2ZVRhYihhY3RpdmVUYWIpO1xufVxuZnVuY3Rpb24gYWRkQ292ZUFjY291bnRJbmZvVGFiKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIENvdmUgQWNjb3VudCBJbmZvIHRhYi4uLlwiKTtcbiAgICAvLyBMb2NhdGUgdGhlIHNpZGViYXIgd3JhcHBlclxuICAgIHZhciBzaWRlYmFyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhci13cmFwcGVyXCIpO1xuICAgIGlmICghc2lkZWJhcldyYXBwZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNpZGViYXIgd3JhcHBlciBub3QgZm91bmQuIFJldHJ5aW5nLi4uXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGFkZENvdmVBY2NvdW50SW5mb1RhYiwgNTAwKTsgLy8gUmV0cnkgdW50aWwgdGhlIERPTSBpcyByZWFkeVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIExvY2F0ZSB0aGUgc2lkZWJhciBtZW51IHRvIGFwcGVuZCB0aGUgaXRlbVxuICAgIHZhciBzaWRlYmFyTWVudSA9IHNpZGViYXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1ib2R5IHVsLnNpZGViYXItbWVudTpsYXN0LWNoaWxkXCIpO1xuICAgIGlmICghc2lkZWJhck1lbnUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNpZGViYXIgbWVudSBub3QgZm91bmQuIFJldHJ5aW5nLi4uXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGFkZENvdmVBY2NvdW50SW5mb1RhYiwgNTAwKTsgLy8gUmV0cnkgdW50aWwgdGhlIERPTSBpcyByZWFkeVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIHRoZSB0YWIgYWxyZWFkeSBleGlzdHNcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlLWFjY291bnQtaW5mby10YWJcIikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb3ZlIEFjY291bnQgSW5mbyB0YWIgYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHRhYlxuICAgIHZhciBuZXdUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBuZXdUYWIuaHJlZiA9IFwiIy9jb3ZlQWNjb3VudEluZm9cIjtcbiAgICBuZXdUYWIuY2xhc3NOYW1lID0gXCJjb3ZlLWFjY291bnQtaW5mby10YWIgc2lkZWJhci1pdGVtXCI7XG4gICAgbmV3VGFiLmlubmVySFRNTCA9IFwiXFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vaW1hZ2VzL2ljb25zL2NvdmUtYWNjb3VudC1pY29uLnN2Z1xcXCIgYWx0PVxcXCJDb3ZlIEFjY291bnQgSWNvblxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2lkZWJhci1pdGVtLXRpdGxlXFxcIj5Db3ZlIEFjY291bnQgSW5mbzwvc3Bhbj5cXG4gICAgXCI7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0YWIgY2xpY2tcbiAgICBuZXdUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb3BlbkNvdmVBY2NvdW50SW5mbygpO1xuICAgIH0pO1xuICAgIC8vIEFwcGVuZCB0byB0aGUgc2lkZWJhciBtZW51XG4gICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQobmV3VGFiKTtcbiAgICBjb25zb2xlLmxvZyhcIkNvdmUgQWNjb3VudCBJbmZvIHRhYiBhZGRlZCBzdWNjZXNzZnVsbHkuXCIpO1xufVxuZnVuY3Rpb24gdXBkYXRlQWN0aXZlVGFiKGFjdGl2ZVRhYikge1xuICAgIC8vIFJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgc2lkZWJhciBpdGVtc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1pdGVtXCIpLmZvckVhY2goZnVuY3Rpb24gKHRhYikge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIHRoZSBjbGlja2VkIHRhYlxuICAgIGFjdGl2ZVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxud2luZG93LmluaXRpYWxpemVDb3ZlQWNjb3VudEluZm8gPSBpbml0aWFsaXplQ292ZUFjY291bnRJbmZvO1xud2luZG93Lm9wZW5Db3ZlQWNjb3VudEluZm8gPSBvcGVuQ292ZUFjY291bnRJbmZvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuLy8gTWFpbiBpbml0aWFsaXphdGlvbiBmdW5jdGlvblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUxlYWRIdWIoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIiMvbGVhZEh1YlwiKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBvbiBMZWFkSHViIHRhYi4gU2tpcHBpbmcgaW5pdGlhbGl6YXRpb24uXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIExlYWQgSHViLi4uXCIpO1xuICAgIHZhciBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcbiAgICBpZiAoIW1haW5Db250YWluZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1haW4gY29udGFpbmVyIG5vdCBmb3VuZC4gUmV0cnlpbmcuLi5cIik7XG4gICAgICAgIHNldFRpbWVvdXQoaW5pdGlhbGl6ZUxlYWRIdWIsIDUwMCk7IC8vIFJldHJ5IGlmIHRoZSBtYWluIGNvbnRhaW5lciBpc24ndCByZWFkeSB5ZXRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmV3TGVhZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLWJ0blwiKTtcbiAgICBpZiAobmV3TGVhZEJ1dHRvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBMZWFkIGJ1dHRvbiBmb3VuZDpcIiwgbmV3TGVhZEJ1dHRvbik7XG4gICAgICAgIGF0dGFjaE5ld0xlYWRMaXN0ZW5lcihuZXdMZWFkQnV0dG9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IExlYWQgYnV0dG9uIG5vdCBmb3VuZC4gUmV0cnlpbmcuLi5cIik7XG4gICAgICAgIHNldFRpbWVvdXQoaW5pdGlhbGl6ZUxlYWRIdWIsIDEwMDApOyAvLyBSZXRyeSBpbiBjYXNlIHRoZSBidXR0b24gaXNuJ3QgYXZhaWxhYmxlIHlldFxuICAgIH1cbn1cbi8vIEF0dGFjaCBsaXN0ZW5lciB0byB0aGUgXCJOZXcgTGVhZFwiIGJ1dHRvblxuZnVuY3Rpb24gYXR0YWNoTmV3TGVhZExpc3RlbmVyKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBMZWFkIGJ1dHRvbiBjbGlja2VkIVwiKTtcbiAgICAgICAgYWRkQ3VzdG9tQnV0dG9uc1RvTW9kYWwoKTtcbiAgICAgICAgd2FpdEZvclNhdmVCdXR0b24oKTtcbiAgICB9KTtcbn1cbi8vIFdhaXQgZm9yIHRoZSBcIlNhdmVcIiBidXR0b24gYW5kIGFkZCBjdXN0b20gYnV0dG9ucyB0byB0aGUgbW9kYWxcbmZ1bmN0aW9uIHdhaXRGb3JTYXZlQnV0dG9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiV2FpdGluZyBmb3IgU2F2ZSBidXR0b24gdG8gYXBwZWFyLi4uXCIpO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zYXZpbmdcIik7IC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgU2F2ZSBidXR0b24gc2VsZWN0b3JcbiAgICAgICAgaWYgKHNhdmVCdXR0b24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBidXR0b24gZm91bmQ6XCIsIHNhdmVCdXR0b24pO1xuICAgICAgICAgICAgYXR0YWNoU2F2ZUJ1dHRvbkxpc3RlbmVyKHNhdmVCdXR0b24pO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOyAvLyBTdG9wIG9ic2VydmluZyBvbmNlIHRoZSBidXR0b24gaXMgZm91bmRcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG59XG4vLyBGdW5jdGlvbiB0byBhZGQgY3VzdG9tIGJ1dHRvbnMgdG8gdGhlIGxlZnQgb2YgdGhlIG1vZGFsXG5mdW5jdGlvbiBhZGRDdXN0b21CdXR0b25zVG9Nb2RhbCgpIHtcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7IC8vIENhc3QgbW9kYWwgdG8gSFRNTEVsZW1lbnRcbiAgICBpZiAoIW1vZGFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9kYWwgbm90IGZvdW5kLiBTa2lwcGluZyBjdXN0b20gYnV0dG9uIGluc2VydGlvbi5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGEgd3JhcHBlciBkaXYgZm9yIHRoZSBidXR0b25zXG4gICAgdmFyIGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NOYW1lID0gXCJjdXN0b20tYnV0dG9uLXdyYXBwZXJcIjsgLy8gQXBwbHkgdGhlIENTUyBjbGFzc1xuICAgIC8vIENyZWF0ZSB0b2dnbGUgc3dpdGNoIGZvciBcIlNjcmVlbiB0aGlzIExlYWRcIlxuICAgIHZhciB0b2dnbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2dnbGVXcmFwcGVyLmNsYXNzTmFtZSA9IFwidG9nZ2xlLXdyYXBwZXJcIjtcbiAgICB0b2dnbGVXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0b2dnbGVXcmFwcGVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIHZhciB0b2dnbGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRvZ2dsZUxhYmVsLnRleHRDb250ZW50ID0gXCJTY3JlZW4gdGhpcyBMZWFkXCI7XG4gICAgdG9nZ2xlTGFiZWwuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjEwcHhcIjtcbiAgICB2YXIgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvZ2dsZVN3aXRjaC5jbGFzc05hbWUgPSBcInRvZ2dsZS1zd2l0Y2hcIjtcbiAgICB2YXIgdG9nZ2xlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9nZ2xlSW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICB0b2dnbGVJbnB1dC5jbGFzc05hbWUgPSBcInRvZ2dsZS1pbnB1dFwiOyAvLyBBZGQgYSBjbGFzcyBmb3Igc3R5bGluZ1xuICAgIHRvZ2dsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNjcmVlbiB0aGlzIExlYWQgdG9nZ2xlZCFcIiwgdG9nZ2xlSW5wdXQuY2hlY2tlZCk7XG4gICAgfSk7XG4gICAgdmFyIHRvZ2dsZVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRvZ2dsZVNsaWRlci5jbGFzc05hbWUgPSBcInNsaWRlclwiO1xuICAgIC8vIEFwcGVuZCBpbnB1dCBhbmQgc2xpZGVyIHRvIHRoZSBzd2l0Y2hcbiAgICB0b2dnbGVTd2l0Y2guYXBwZW5kQ2hpbGQodG9nZ2xlSW5wdXQpO1xuICAgIHRvZ2dsZVN3aXRjaC5hcHBlbmRDaGlsZCh0b2dnbGVTbGlkZXIpO1xuICAgIC8vIEFkZCB0b2dnbGUgY29tcG9uZW50cyB0byB0aGUgd3JhcHBlclxuICAgIHRvZ2dsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodG9nZ2xlTGFiZWwpO1xuICAgIHRvZ2dsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodG9nZ2xlU3dpdGNoKTtcbiAgICAvLyBBZGQgdG9nZ2xlIHRvIHRoZSBidXR0b24gd3JhcHBlclxuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQodG9nZ2xlV3JhcHBlcik7XG4gICAgLy8gQXBwZW5kIHRoZSB3cmFwcGVyIHRvIHRoZSBtb2RhbFxuICAgIG1vZGFsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiOyAvLyBFbnN1cmUgbW9kYWwgaGFzIGEgcmVsYXRpdmUgcG9zaXRpb25cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcbiAgICBjb25zb2xlLmxvZyhcIkN1c3RvbSB0b2dnbGUgc3dpdGNoIGFkZGVkIHRvIHRoZSBtb2RhbC5cIik7XG59XG4vLyBBdHRhY2ggYSBsaXN0ZW5lciB0byB0aGUgXCJTYXZlXCIgYnV0dG9uXG5mdW5jdGlvbiBhdHRhY2hTYXZlQnV0dG9uTGlzdGVuZXIoYnV0dG9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZvcm1EYXRhLCB0b2dnbGVJbnB1dCwgZXJyb3JfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZlIGJ1dHRvbiBjbGlja2VkIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEgPSBjb2xsZWN0Rm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb2xsZWN0ZWQgRm9ybSBEYXRhOlwiLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtc3dpdGNoIGlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHRvZ2dsZUlucHV0ICYmIHRvZ2dsZUlucHV0LmNoZWNrZWQpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUb2dnbGUgaXMgT046IFNlbmRpbmcgc2NyZWVuaW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZW5kVG9BUEkoZm9ybURhdGEpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTY3JlZW5pbmcgc3VjY2Vzc2Z1bGx5IHNlbnQuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBzY3JlZW5pbmc6XCIsIGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUb2dnbGUgaXMgT0ZGOiBTY3JlZW5pbmcgd2lsbCBub3QgYmUgc2VudC5cIik7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0pO1xufVxuLy8gQ29sbGVjdCBmb3JtIGRhdGEgZnJvbSB0aGUgbW9kYWxcbmZ1bmN0aW9uIGNvbGxlY3RGb3JtRGF0YSgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgdmFyIGZpcnN0TmFtZSA9ICgoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuZy1tb2RlbD1cIiRjdHJsLm1vZGVsXCJdJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZSkgfHwgXCJcIjtcbiAgICB2YXIgbGFzdE5hbWUgPSAoKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmctbW9kZWw9XCIkY3RybC5tb2RlbFwiXScpWzFdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudmFsdWUpIHx8IFwiXCI7XG4gICAgdmFyIGVtYWlsID0gKChfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25nLW1vZGVsPVwiJGN0cmwubW9kZWxcIl0nKVsyXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnZhbHVlKSB8fCBcIlwiO1xuICAgIHZhciBwaG9uZSA9ICgoX2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuZy1tb2RlbD1cIiRjdHJsLm1vZGVsXCJdJylbM10pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC52YWx1ZSkgfHwgXCJcIjtcbiAgICByZXR1cm4geyBmaXJzdE5hbWU6IGZpcnN0TmFtZSwgbGFzdE5hbWU6IGxhc3ROYW1lLCBlbWFpbDogZW1haWwsIHBob25lOiBwaG9uZSB9O1xufVxuLy8gU2VuZCBkYXRhIHRvIHRoZSBBUElcbmZ1bmN0aW9uIHNlbmRUb0FQSShmb3JtRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlLCByZXNwb25zZURhdGEsIGVycm9yXzI7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgNSwgLCA2XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiaHR0cHM6Ly9jb3ZlLXN0YWdlLWE2ODdmZDMzMzAwMC5oZXJva3VhcHAuY29tL2FwaS9zY3JlZW5pbmdzL2NyZWF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBZT1VSX0FQSV9LRVlfSEVSRVwiLCAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgQVBJIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhbnRGaXJzdE5hbWU6IGZvcm1EYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYW50TGFzdE5hbWU6IGZvcm1EYXRhLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhbnRFbWFpbDogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2FudFBob25lOiBmb3JtRGF0YS5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYW50UGF5czogZmFsc2UsIC8vIEV4YW1wbGUgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpdGVDaGVjazogZmFsc2UsIC8vIEV4YW1wbGUgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUlkOiBcIjY3MzdjMTBhZjE2MGY3YWUyYjQ1ZjU0XCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgcHJvcGVydHlJZCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTY3JlZW5pbmcgc2VudCBzdWNjZXNzZnVsbHk6XCIsIHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiU2NyZWVuaW5nIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgc2NyZWVuaW5nOlwiLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gc2VuZCBzY3JlZW5pbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIHNjcmVlbmluZzpcIiwgZXJyb3JfMik7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc2VuZGluZyB0aGUgc2NyZWVuaW5nLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxud2luZG93LmluaXRpYWxpemVMZWFkSHViID0gaW5pdGlhbGl6ZUxlYWRIdWI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnNvbGUubG9nKFwiUmhlbnRpIENocm9tZSBFeHRlbnNpb246IFNjcmlwdCBpbmplY3RlZCFcIik7XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIikge1xuICAgIGNvbnNvbGUubG9nKFwiRE9NIGlzIGFscmVhZHkgbG9hZGVkLiBSdW5uaW5nIHNjcmlwdC4uLlwiKTtcbiAgICBpbml0aWFsaXplVGFiKCk7XG59XG5lbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplVGFiKTtcbn1cbmZ1bmN0aW9uIGluaXRpYWxpemVUYWIoKSB7XG4gICAgd2luZG93LmluaXRpYWxpemVDb3ZlQWNjb3VudEluZm8oKTtcbiAgICB2YXIgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGlmIChjdXJyZW50VXJsLmluY2x1ZGVzKFwiIy9sZWFkSHViXCIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGVhZEh1YiB0YWIgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB2YXIgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWFkLWh1Yi10YWJcIik7XG4gICAgICAgIGlmIChhY3RpdmVUYWIpXG4gICAgICAgICAgICB1cGRhdGVBY3RpdmVUYWIoYWN0aXZlVGFiKTtcbiAgICAgICAgaWYgKHdpbmRvdy5pbml0aWFsaXplTGVhZEh1Yikge1xuICAgICAgICAgICAgd2luZG93LmluaXRpYWxpemVMZWFkSHViKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiaW5pdGlhbGl6ZUxlYWRIdWIgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnJlbnRVcmwuaW5jbHVkZXMoXCIjL2NvdmVBY2NvdW50SW5mb1wiKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvdmUgQWNjb3VudCBJbmZvIHRhYiBkZXRlY3RlZC5cIik7XG4gICAgICAgIHZhciBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmUtYWNjb3VudC1pbmZvLXRhYlwiKTtcbiAgICAgICAgaWYgKGFjdGl2ZVRhYilcbiAgICAgICAgICAgIHVwZGF0ZUFjdGl2ZVRhYihhY3RpdmVUYWIpO1xuICAgICAgICBpZiAod2luZG93Lm9wZW5Db3ZlQWNjb3VudEluZm8pIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuQ292ZUFjY291bnRJbmZvKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwib3BlbkNvdmVBY2NvdW50SW5mbyBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbWF0Y2hpbmcgdGFiIGRldGVjdGVkLlwiKTtcbiAgICB9XG59XG4vLyBJbml0aWFsaXplIHRoZSBleHRlbnNpb25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyB0YWJzLi4uXCIpO1xuICAgIGlmICh3aW5kb3cuYWRkQ292ZUFjY291bnRJbmZvVGFiKSB7XG4gICAgICAgIHdpbmRvdy5hZGRDb3ZlQWNjb3VudEluZm9UYWIoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVRhYigpO1xufSk7XG4vLyBIYW5kbGUgaGFzaCBjaGFuZ2VzIGZvciBkeW5hbWljIG5hdmlnYXRpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBpbml0aWFsaXplVGFiKTtcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb250ZW50LXNjcmlwdHMvbGVhZEh1Yi50c1wiXSgpO1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvbnRlbnQtc2NyaXB0cy9jb3ZlQWNjb3VudEluZm8udHNcIl0oKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvY29udGVudC1zY3JpcHRzL21haW4udHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==