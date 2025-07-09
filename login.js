let currentUserId = null;

function startSession() {
  const input = document.getElementById("usernameInput").value.trim();

  if (!input) {
    document.getElementById("loginStatus").textContent = "⚠️ Please enter a username!";
    return;
  }

  currentUserId = input; // Store it globally!
  localStorage.setItem("plushieUser", currentUserId); // Optional: persist it

  document.getElementById("loginStatus").textContent = `🧵 Welcome, ${currentUserId}!`;

  // Now you're ready to load that user's XP or tasks:
  loadUserData();
  window.location.href = "tasks.html";

}
function setup(){
createCanvas(windowWidth,windowHeight);

}
function loadUserData() {
  if (!currentUserId) {
    console.log("⚠️ No user is logged in.");
    return;
  }

  const userDoc = db.collection("users").doc(currentUserId);

  userDoc.get().then(doc => {
    if (doc.exists) {
      console.log(`✅ Found ${currentUserId}'s data:`, doc.data());
      // update checkboxes or XP bar here
    } else {
      console.log("👶 New user! Creating starter profile...");
      userDoc.set({ xp: 0, tasksCompleted: {} });
    }
  });
}
window.addEventListener("DOMContentLoaded", () => {
  const savedUser = localStorage.getItem("plushieUser");
  if (savedUser) {
    currentUserId = savedUser;
    document.getElementById("usernameInput").value = savedUser;
    document.getElementById("loginStatus").textContent = `🌈 Welcome back, ${currentUserId}!`;
    loadUserData(); // optional: auto-load saved tasks/XP
  }
});



