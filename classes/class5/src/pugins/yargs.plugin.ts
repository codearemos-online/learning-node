import yargs from "yargs";
const { hideBin } = require('yargs/helpers')

export const yarg = yargs(hideBin(process.argv)).parseSync();