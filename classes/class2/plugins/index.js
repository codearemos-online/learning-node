const {  getAge} = require("./get-age.plugin");
const { uuidv4 } = require("./get-uuid.plugin");
const { http } = require("./http-client.plugin");

module.exports = {
    getAge,
    uuidv4,
    http,
}