const fs = require('fs');

console.log("🔄 Starting generateMessage.js...");

const messages = JSON.parse(process.env.DAILY_MESSAGES);
console.log("✅ Loaded DAILY_MESSAGES from environment");

const today = new Date();
const index = today.getDay();
const dailyMessage = messages[index];
console.log(`📆 Today's index: ${index}, message: "${dailyMessage}"`);

fs.mkdirSync('CyberCalendar/public', { recursive: true });
fs.writeFileSync('CyberCalendar/public/dailyMessage.json', JSON.stringify({ message: dailyMessage }, null, 2));
