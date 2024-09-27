const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "sH11VRCJ#MSN1BGh5b2cG_o59Gp2z0PFB2UUbaoL6p-m5kVtQy1E",
MONGODB: process.env.MONGODB || "mongodb://mongo:tZqOskNPFBvoJwXqFTbicqRdmVMzqKtt@autorack.proxy.rlwy.net:59140",//enter mongo db url
};
