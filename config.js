//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Hechem254@gmail.com";
global.location = "Nairobi, Africa.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Afica/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Hammy254/VENOM_MD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/LqYfmGAmfbnHhtSWSsXP1v";
global.website = process.env.GURL || "https://chat.whatsapp.com/LqYfmGAmfbnHhtSWSsXP1v";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f713683bc977188572040.jpg";
global.devs = "254737991043";
global.sudo = process.env.SUDO || "254737991043";
global.owner = process.env.OWNER_NUMBER || "254737991043";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://venommd-68da3806b609.herokuapp.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZNOVM1VFRNNmNrQUNSc3g2bS9naVM0SGQ2N1c5YmtBNU5scS9ZbjhFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejF6elAwWDdUWmZwZlUzbW9UOS8vbzgrOXFTNEMxQ0hHSlI0cjN2ckEzbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSGpTMUtvblJhdGRGamthdkhYc2t2WVBBMnlzNE5vQ3hDODVKV2RTU0ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLMUdFNDUvT0FJMm91eDg5MkhBdFIzTmJzT1NsQkVDY2hXTk5STHNCYmpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LTmwwczdUU3dKRG5QenhwRkFTS1pUTW11cHNCektmZy96SGYxN0VSbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ4YU9zdXdCYkV3K0ZJU0FNcFo0Wm42OFpDTWRPcFBlbys2ZFB1LzF3VHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklGakUyRERnK3h0Q1YxdW1XK2Q3eWpHdUQxcXBuR05CbWY5d3lzQTFYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDlXMmFVNDhucDMxVzQvQjhYQmVwRE80cTlSc3dHMmN0MXBveTlrVmozaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHYUVwVEFwd3hMU3FidWdFV1RwaWN6YUhjWHdSTGNvaW9zb01oY09zb0dxWE1idTN3ZHVQOWh2ekJMd2ZFUXRERFZpalhYUm5Bc3NWWHhhVEhKUkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJPdk9iejNIMHpUc1p2RTJDY1dNeUVUY1YvWUFkZTcvUStONUNmaDFwOWxNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkRUx0SUcwOVROMmZ3eERpcVRkTU1BIiwicGhvbmVJZCI6IjVhMDJhZmI3LTkyMWQtNDY0Ny1iYWE3LTIxZDdiY2NmNTgwOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwUkQxTDhDY05yL1UybmhleFd1a25mRmFGb2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzVIZTVCUGNDbkthaGNhaGVIQVlDMEFoaHA4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNIN0M0R0pIIiwibWUiOnsiaWQiOiIyNjM3ODczODI4NTI6MzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSzI5cHJvbWF4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZnA4dk1GRUp2V2piWUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZK2JoYytGZHhpdFRyK0ltVURRM3NDQmhONllSL2tUaUxUdVg5TlBZYVQwPSIsImFjY291bnRTaWduYXR1cmUiOiJET3VUTEw3dzhsZVRSOU9PY3BZYzJqK3pwZThjTWIyeHpaY2d1OGo4VGs5ZkRSZzRzeXFVUDBZWERKb0RVVXVxVGVjNlU4YW9RVlJ3a3ZPOXRkaERCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoib29laDcwVWhYcS9rK05YV3hnNk02S2xNdVFMMjlkZnNhdGFUeERKMHZ5dHU2SUtzRUN6U0x2ZDE2UnVMWE5oV3dLc1ozL3lNVEhnekpRWGg3VUE3REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODczODI4NTI6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1BtNFhQaFhjWXJVNi9pSmxBME43QWdZVGVtRWY1RTRpMDdsL1RUMkdrOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA4Mjk4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCa1gifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 𝐕𝐄𝐍𝐎𝐌_𝐌𝐃",
  author: process.env.PACK_AUTHER || "〄༒𝐇𝐀𝐌𝐌𝐘➳ᴹᴿ᭄\n\n+254 737991043",
  packname: process.env.PACK_NAME || "𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐁𝐘",
  botname: process.env.BOT_NAME || "𝐕𝐄𝐍𝐎𝐌_𝐌𝐃",
  ownername: process.env.OWNER_NAME || "⟠ 〄༒𝐇𝐀𝐌𝐌𝐘➳ᴹᴿ᭄",
  errorChat: process.env.ERROR_CHAT || "254737991043",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
