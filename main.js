document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("daily-message");
    if (messageElement) {
        const date = new Date();
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        const dailyMessages = [
            "Welcome to a brand new week!",
            "Tackle Tuesday like a boss!",
            "Halfway there!",
            "Thursday thoughts!",
            "It's finally Friday!",
            "Super chill Saturday.",
            "Lazy Sunday vibes."
        ];
        let index = dayOfYear;
        index += 3;
        messageElement.textContent = dailyMessages[index % dailyMessages.length];
    }
});