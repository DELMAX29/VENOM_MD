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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENxelJxMnJ6ZFlVUFZsOHc4azJHakdic1o0amFsVHJpT1dMQVRqekowZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkp5ME1wSWpSK3ZINUZUS21LUTRuUGl5R2tRTnViemhxd21BYTRCSXFRQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRExxVUt3ckViMTlyejhvMzlzQXluMU9xMVozZTVtZCtKRkIvaTNMcFVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZ0RCYlY0c2pCUUxJYys1WnJWRERlYW9zMy9yU2hSVnRmZGozVEhmeWxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPY1Y3K1hVNlQyVndhTmtYaTlFQTNUc2ptWlJpTU4zcXBBNG5EaVlzWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZaL2RMT1A3UmZYQitqR1BmaTQ1b0kwblJyckR2c1RKTEVYU0kvazRHaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NRSlpQcDZUMnVrYVZvaDQxd2JMNlBzL1doTC91ckRGR0F4MlJEa2ptMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm9UTndaK3hQSHEvTFo4L3VRNitRalpYeEhXbVZsQXc3Rk1sWEVlNFRVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZobDNPSlVWb01CdWhJZTQ5TFpxOHRqL1lUeWFxWktCWHhpdDZNcEQrS3B6ZkVDVmpMWUk4Z0k1TVFEVG9STElxSkVtWXhPUUNiN0prcERVcUtWZ2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiIyYmtmcVg0Z1BNTW5hRXBrS1V4Uk8xY01udTN1aUJmUjFobTh4M2JQSXhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2SmNkMlNIRFNkYUY1NjVBQ1RUX0p3IiwicGhvbmVJZCI6ImQ3NTE3ZGYzLTRjMmYtNGM2Yi1hMGVlLWE1MDRmNDJiMGMxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQM2pmaHRCa1NYUHZYdnU3V1UzMFE1dllwZmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXVDaW9YUGRleFJNUWNXUE50Wkt5R1RsTUZ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRINVpWR0pXIiwibWUiOnsiaWQiOiIyNjM3MTc2NzIwNjg6NjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xiSjAvb0RFSys2enJZR0dCa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im04cDdnUm1Kb0FROEcvUU1qL2RaVEtybWVsUkZGQ0h1cnJyU1haa1FuMTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJtVkRDWkplN0MrRmdMNVQwZExSd3V5clZHa2tZLzRzOU5hQmppN2dNYlk4MzFXVU1WdVZLL2NZZDdMWHVOQisraVU2NmVQTG56eXhwcklnZzFmTEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHNnJiYU9LQ0t3WVd1aUNXVE9ubDR0WHExRTdyemhaRllTMUdKQlZpYUJ0SHVoZlR3V09YNG1USFNFZFdndS9uR0ZRNTRLSlp0MUFmY1k1TlI2R21qdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNzY3MjA2ODo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJadktlNEVaaWFBRVBCdjBESS8zV1V5cTVucFVSUlFoN3E2NjBsMlpFSjlmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MTQ0MzgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU4wViJ9"
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
