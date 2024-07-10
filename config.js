excellentconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // ,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3b0fad875133ac87b65f6.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_18_57_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNE42bG9Rc0VDQzlYN0s4b1hRbTF4U3dncThxZ2JldTlvb3k2a2pWK25Waz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieWpUU3JzZ1JRSVNTelh0dXZ2Vm1iZ1wiLFxuICBcInBob25lSWRcIjogXCIzMzkyZDg3Yi1jNGZjLTRhYzgtYjkxNi04ZmM5YWMwMTNmNjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMTUsXG4gICAgICAyNDEsXG4gICAgICAyOSxcbiAgICAgIDEyOSxcbiAgICAgIDEyNCxcbiAgICAgIDE1MyxcbiAgICAgIDkwLFxuICAgICAgMjgsXG4gICAgICA2MyxcbiAgICAgIDMzLFxuICAgICAgMTQ5LFxuICAgICAgMTAsXG4gICAgICAxNzIsXG4gICAgICAyMjksXG4gICAgICAxNzMsXG4gICAgICAxOTcsXG4gICAgICAxNjIsXG4gICAgICAxMDUsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMzgsXG4gICAgICA4NixcbiAgICAgIDIxNyxcbiAgICAgIDI1MSxcbiAgICAgIDg3LFxuICAgICAgMTg5LFxuICAgICAgMTUzLFxuICAgICAgNTEsXG4gICAgICAxMzIsXG4gICAgICAyMDYsXG4gICAgICAxMCxcbiAgICAgIDczLFxuICAgICAgMTI3LFxuICAgICAgMzYsXG4gICAgICAxOTYsXG4gICAgICAxNDEsXG4gICAgICAxNzIsXG4gICAgICAxMzYsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDNkQyVk5WWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTg2NjY1NjE4OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNTEyNDI0MjYwNDE2Nzo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObmJ5NlVERUp1UXRyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVQbHo5aVhKZzIwcGRna1ZJdmQrbzdJZGluUnh3aDR1K3czd3lmaWRJM0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSVR3Z1pKR0dpWUlHdmt0TW9adFlralhTaFR6QXlKSHovTUpDUHRpTWl5ZEVNMDZ6NDFhYXNTNk1ReVY2QmxiRi94dXJTZk80cG9lRThMcng0YmdCRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRU9BM1diTkgrcnV2N2FvR0RFcWU1QzlKbXRqSzA1a21uN0dVbE9WdXZad250SEpNeDRMNTEwZHBxQTlYUGpJcFlOblBYWEtTbysvMWpqcFY5RUkvaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTg2NjY1NjE4OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU1MTQ1NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
