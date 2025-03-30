const fs = require('fs');

const messages = JSON.parse(process.env.DAILY_MESSAGES);
const today = new Date();
const index = today.getDay(); // 0 = Sunday, 6 = Saturday
const dailyMessage = messages[index];

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/dailyMessage.json', JSON.stringify({ message: dailyMessage }, null, 2));