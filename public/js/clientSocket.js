var connected = false;

var socket = io("http://46.248.68.124");
socket.emit("setup", userLoggedIn);

socket.on("connected", () => connected = true);
socket.on("message recieved", (newMessage) => messageRecieved(newMessage));

socket.on("notification recieved", () => {
    $.get("/api/notifications/latest", (notificationData) => {
        showNotificationPopup(notificationData);
        refreshNotificationsBadge();
    })
})

function emitNotification(userId) {
    if(userId == userLoggedIn._id) return;

    socket.emit("notification recieved", userId);
}