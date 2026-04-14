const mongoose = require('mongoose');
const dns = require('dns');

// Ép Node.js dùng Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = "mongodb+srv://new-user_31:HIvnNyBZozgzZ3qH@anmay9x2020.e5pge.mongodb.net/Company?appName=anmay9x2020";

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Kết nối MongoDB Atlas thành công!");
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error("❌ Lỗi:", err.message);
  });