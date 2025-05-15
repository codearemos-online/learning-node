import yargs from "yargs";
const { hideBin } = require('yargs/helpers')

export const yarg = yargs(hideBin(process.argv))
                    .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        description:'multiplication base'
                    })
                    .option('l',{
                        alias:'limit',
                        default:15,
                        demandOption:true,
                        description:"Limit multiplication number"
                    })
                    .check((argv,options) => {
                        if(argv.b < 2) throw "B should be greater than 2"
                        return true;
                    })
                    .parseSync();