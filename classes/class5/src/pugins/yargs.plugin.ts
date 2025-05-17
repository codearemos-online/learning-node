import yargs, { string } from "yargs";
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
                    .option('n',{
                        alias:'name',
                        type:'string',
                        default:'table',
                        demandOption:true,
                        description:"Name of document to save"
                    })
                    .option('p',{
                        alias:'path',
                        type:'string',
                        default:'outputs/',
                        demandOption:true,
                        description:"path to save files"
                    })

                    .check((argv,options) => {
                        if(argv.b < 2) throw "B should be greater than 2"
                        return true;
                    })
                    .parseSync();