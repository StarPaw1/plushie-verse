// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDXCjpBW0cPgCniJo2HH4lMVXTu2g9_c20",
  authDomain: "plushieverse-585e1.firebaseapp.com",
  projectId: "plushieverse-585e1",
  storageBucket: "plushieverse-585e1.appspot.com",
  messagingSenderId: "922619785908",
  appId: "1:922619785908:web:003751bd980698215d9de1",
  measurementId: "G-R3DRW3Z7B0"
};
function showXP() {
  const userId = localStorage.getItem("plushieUser");
  db.collection("users").doc(userId).get().then(doc => {
    if (doc.exists) {
      console.log(`🧵 ${userId}'s XP:`, doc.data().xp);
    } else {
      console.log("👻 No such user found.");
    }
  });
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set up Firestore reference
const db = firebase.firestore();
let currentUserId = localStorage.getItem("plushieUser");
const userDoc = db.collection("users").doc(currentUserId);
document.getElementById("welcomeMessage").textContent = `🌟 Welcome, ${currentUserId}!`;

function loadUserData() {
  userDoc.get().then(doc => {
    if (doc.exists) {
      const data = doc.data();
      document.getElementById("xpDisplay").textContent = `✨ XP: ${data.xp || 0}`;
      const tasks = data.tasksCompleted || {};

      // Load checkbox states
      document.getElementById("task-feedMeowbug").checked = tasks.feedMeowbug || false;
      document.getElementById("task-codeHour").checked = tasks.codeHour || false;
    }
  });
}

function saveTaskProgress(taskId, xpReward) {
  userDoc.get().then(doc => {
    const currentXP = doc.data().xp || 0;
    const update = {
      [`tasksCompleted.${taskId}`]: true,
      xp: currentXP + xpReward
    };
    userDoc.set(update, { merge: true });
    document.getElementById("xpDisplay").textContent = `✨ XP: ${currentXP + xpReward}`;
    document.getElementById("saveStatus").textContent = "✅ Task saved!";
    showXP();
  });
}

// Hook up events
document.getElementById("task-feedMeowbug").addEventListener("change", function () {
  if (this.checked) saveTaskProgress("feedMeowbug", 50);
});

document.getElementById("task-codeHour").addEventListener("change", function () {
  if (this.checked) saveTaskProgress("codeHour", 100);
});

loadUserData();



