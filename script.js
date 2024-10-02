function showAlert(message) {window.onload = function () {alert(message);};}
function toggleText() {var text = document.getElementById("text"); if (text.style.display === "none" || text.style.display === "") { text.style.display = "block"; } else { text.style.display = "none";}  }
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); 