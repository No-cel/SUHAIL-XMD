const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237693957165";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_58_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUyLFxuICAgICAgICA3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtSzJmQUkyWUlkY255SU93Mkx1MlJ4eHFVRmh4bytpREFLN1BLZDdBNlQwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY5Mzk1NzE2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTA4RDI5REI3MEJBQjY2RUIwRDZCQzExMzMzM0JCRkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzY0Njk2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInh5V1dzeUQ2UjJTMFNOOWF2bFliTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmI4OTQyZjQtNDAxMC00MzhkLTliM2QtZTBjODM2YjRlZjIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDE2MyxcbiAgICAgIDk2LFxuICAgICAgMTM1LFxuICAgICAgMTc0LFxuICAgICAgMjQ3LFxuICAgICAgMjQ0LFxuICAgICAgMjAzLFxuICAgICAgNjUsXG4gICAgICAyMTQsXG4gICAgICAxNjYsXG4gICAgICAyMTYsXG4gICAgICAxMjAsXG4gICAgICA5OSxcbiAgICAgIDU3LFxuICAgICAgMTM2LFxuICAgICAgNDMsXG4gICAgICAxNzYsXG4gICAgICAzMSxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTQ0LFxuICAgICAgMTAwLFxuICAgICAgMTQyLFxuICAgICAgMjIyLFxuICAgICAgNzEsXG4gICAgICA4OCxcbiAgICAgIDQ3LFxuICAgICAgMTcwLFxuICAgICAgMTkwLFxuICAgICAgMTE2LFxuICAgICAgMjEwLFxuICAgICAgMTQ0LFxuICAgICAgMjI4LFxuICAgICAgMTIyLFxuICAgICAgMTY4LFxuICAgICAgOSxcbiAgICAgIDg4LFxuICAgICAgMjcsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVlZWThYNVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5Mzk1NzE2NTo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjIzNjc2MDU5OTM1Mjg6NTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTN4MXBnQ0VJNi9wYmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzdVNQQktJaUZTWVVVb3ZmVEtzdHpBaEZiZjFIeE93c1JvUExjdjI2dlFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm4rbEJsR2lERVhMQWVtOXVxcmgyd2hvZnNuOStDMzRjdWw1QmNWNDdkQUg3UUdGcG5MQ0Yyd1lRY09UUHIzaGxoTitXV2NHdHM2NC9xQkpUcDIxMER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhMZEdvSUh4TkxvUDBVeGlVbWNHaHNUclNqbEVOVnNZRzhkUzVuWjZOeE00MzZlN0ZUZ3MvTjNFQXoxZXhMaVJGYW1oMFVlY0lJN2Zjd2V6YUZyWURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5Mzk1NzE2NTo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzY0NjkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1E4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUTguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOYy9oaGhqRFdVNmkyMTFRVzdlNWF4OXJZYVVUczg3d3VnL1dYOFAzUEt3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4ODYyNjA2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNzE5MDMwMTk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
