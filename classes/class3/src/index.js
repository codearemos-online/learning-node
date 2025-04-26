const {buildLogger} = require("../plugins")

const logger = buildLogger("class3")

logger.log("Hola")
logger.error("Error")
