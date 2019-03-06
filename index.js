#!/usr/bin/env node

var Mnemonic = require('bitcore-mnemonic');
var code = new Mnemonic(Mnemonic.Words.ENGLISH);
console.log( code.toString() );
