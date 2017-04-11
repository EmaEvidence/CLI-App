// JavaScript Document
var request = require("request");
var inquirer    = require('inquirer');
var fs = require("fs");

function getSmsCredentials(callback) {
  var questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your username or e-mail address:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username or e-mail address';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password';
        }
      }
    },
	{
      name: 'recipient',
      type: 'input',
      message: 'Enter Recipients number :',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter Recipients number';
        }
      }
    }
	,
	{
      name: 'filename',
      type: 'input',
      message: 'Enter the name you want this file called:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the name you want this file called.';
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
}
getSmsCredentials(function(){
	var v = (arguments[0]);
	var user = v.username;
	var pwd = v.password;
	var sms = v.filename;
	var rec = v.recipient;
 // console.log(user);
  	request("http://98.102.204.231/default.aspx?c=1&UN=sqimail&P=6tA4DDFA").pipe(fs.createWriteStream(sms));
	request("http://98.102.204.231/default.aspx?c=1&UN=sqimail&P=6tA4DDFA",function(error, response,body) {
  	console.log(body);
	console.log(response.statusCode);
	console.log(response.statusMessage)
});

});
