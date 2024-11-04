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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_37_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDksXG4gICAgICAgIDM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDczLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2LFxuICAgICAgICA0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZKMk1uUU04VTJRbnd3VEswYmJWcjBFQ25uTk9qZ3lQY0V2WkhSdkdXREE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRhWW81Q1FSUVNHQm5tV1I3WTVZdUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjgxNjQwMDQtNDNiMC00NWQwLWE2MDMtYzk4Yjg2ZGExN2EzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDIyMSxcbiAgICAgIDMxLFxuICAgICAgMTc5LFxuICAgICAgNjQsXG4gICAgICA3NCxcbiAgICAgIDgsXG4gICAgICAxOTAsXG4gICAgICAyMTEsXG4gICAgICA3NyxcbiAgICAgIDIzNixcbiAgICAgIDkxLFxuICAgICAgMjMwLFxuICAgICAgMTc1LFxuICAgICAgMTU4LFxuICAgICAgNTYsXG4gICAgICAxMTYsXG4gICAgICAxNjgsXG4gICAgICAxNDgsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAxMTQsXG4gICAgICAyMjAsXG4gICAgICA4OCxcbiAgICAgIDc3LFxuICAgICAgNyxcbiAgICAgIDEyNixcbiAgICAgIDk3LFxuICAgICAgMjAxLFxuICAgICAgNDksXG4gICAgICAyNDIsXG4gICAgICAyMDIsXG4gICAgICAyMzEsXG4gICAgICA4NixcbiAgICAgIDYsXG4gICAgICAxMjksXG4gICAgICAyMzIsXG4gICAgICAxMTcsXG4gICAgICA1NCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1UldYUjJKTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjkzOTU3MTY1OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MjM2NzYwNTk5MzUyODo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM3gxcGdDRU83bW9Ma0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjN1U1BCS0lpRlNZVVVvdmZUS3N0ekFoRmJmMUh4T3dzUm9QTGN2MjZ2UXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK2luMFlLUExra0pYL29PaWNBZ3puMGtMMXNvczRjS0Faa1lveW1nb3VZK1JOV3JLcjE2RFNuQXJQeVlYOHoyRjNzNXppdm5Kb3l5bzZhZlhFTW83RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV3g5VWFRUWphdG5lRU56ei9PS0wvVkxZeFZjZkpxdnpiTnN3TXF1ckUrekU5aFlEYi9kMzE4YjFneEN4OE15Q01PU0tUT01GUzZHWFk1N3hadFYyaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjkzOTU3MTY1OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2ODc4NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPUTBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9RMC5qc29uIjogIntcImtleURhdGFcIjpcIklRNFpoUWVFT2U1aWF3VXFCVnU5aDZGYkpuVDB1WlBmWm5PcjlXUlJBR0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTg4NjI2MDU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNTE0MjE3NTgzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
