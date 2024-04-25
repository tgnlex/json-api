import {serverStatus} from 'src/_lib/status.js';

const greet = {
  greet: function(args, callback) {
    callback(null, "JSON RPC Service Root.!")}
}

const status = {
  status: function(args, callback) {
    callback(null, serverStatus)}
}
const add = {
  add: function(args, callback) {
    callback(null, args[0] + args[1]);
  }
}
const subtract = {
  subtract: function(args, callback) {
    callback(null, args[0] - args[1])
  }
}
const multiply = {
  multiply: function(args, callback) {
    callback(null, args[0] * args[1]);
  }
}

const divide = {
  divide: function(args, callback) {
    callback(null, args[0] / args[1]);
  }
}

export {greet, status, add, subtract, multiply, divide}