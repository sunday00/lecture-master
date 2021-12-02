// require('colors');
// const jokes   = require('give-me-a-joke')
// const cowsay = require("cowsay")
// const figlet = require("figlet")
import colors from 'colors'

import jokes from 'give-me-a-joke'

import cowsay from 'cowsay'
import figlet from 'figlet'

import { franc, francAll } from 'franc';
import langs from 'langs';

switch (process.argv[2]){
  case "color-joke":
    jokes.getRandomDadJoke((joke) => {
      console.log(joke.rainbow);
    })
    break;
  case "f":
    figlet(process.argv.slice(3).join(' '), (err, data) => {
      if(err) console.dir(err)
      else console.log(data)
    })
    break
  case "fc":
  case "cf":


      figlet(process.argv.slice(3).join(' '), (err, data) => {
        if(err) console.dir(err)
        else console.log(data.rainbow)
      })
      break  
  case "cow":
    console.log(cowsay.say({
      text: process.argv.slice(3).join(' '),
      r: true
    }));
    break
  case "franc":
    let fLang = franc(process.argv.slice(3).join(" "))

    if( fLang === 'und' || fLang === 'uzn'){
      fLang = franc(
        process.argv.slice(3).join(" ") 
        + " " + process.argv.slice(3).join(" ") 
        + " " + process.argv.slice(3).join(" ")
      )
    }

    if( fLang === 'und'  || fLang === 'uzn'){
      fLang = franc(
        process.argv.slice(3).join(" ") 
        + " " + process.argv.slice(3).join(" ") 
        + " " + process.argv.slice(3).join(" ")
        + " " + process.argv.slice(3).join(" ")
        + " " + process.argv.slice(3).join(" ")
        + " " + process.argv.slice(3).join(" ")
        + " " + process.argv.slice(3).join(" ")
        + " " + process.argv.slice(3).join(" ")
        + " " + process.argv.slice(3).join(" ")
        + " " + process.argv.slice(3).join(" ")
      )
    }

    if( fLang === 'und' || fLang === 'uzn'){
      console.log("more sample word needed".yellow)
    }

    const langNames = langs.where("3", fLang)
    langNames && console.log(langNames.name)
    break
}



