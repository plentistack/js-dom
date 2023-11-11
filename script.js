// Store data in Local Storage
function storeLocalData() {
  var username = document.getElementById("localDataInput").value;
  localStorage.setItem("username", username);
  alert("Data stored in Local Storage: username=" + username);
}

// Retrieve data from Local Storage
function retrieveLocalData() {
  var storedUsername = localStorage.getItem("username");
  alert("Retrieved data from Local Storage: username=" + storedUsername);
}

// Remove data from Local Storage
function removeLocalData() {
  localStorage.removeItem("username");
  alert("Data removed from Local Storage: username");
}

// Store data in Session Storage
function storeSessionData() {
  var theme = document.getElementById("sessionDataInput").value;
  sessionStorage.setItem("theme", theme);
  alert("Data stored in Session Storage: theme=" + theme);
}

// Retrieve data from Session Storage
function retrieveSessionData() {
  var theme = sessionStorage.getItem("theme");
  alert("Retrieved data from Session Storage: theme=" + theme);
}

// Clear all data in Session Storage
function clearSessionStorage() {
  sessionStorage.clear();
  alert("Cleared all data in Session Storage");
}
