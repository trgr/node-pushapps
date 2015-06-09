About
=====
A node.js implementation of the Pushapps REST API.
Implements all of http://devzone.pushapps.com/function-reference/

Disclaimer
==========
This package is not official, I am not affiliated with Pushapps. Us this package at your own risk.

Installation
============
```npm install pushapps```

Usage
=====
Usage is very simple, set your username and password with setCredentials , then call ```module.resource.method```
For example:

```
var pushapps = require( 'pushapps' )
pushapps.RemoteAPI.RegisterDevice({ options } , function( err , return ){
 console.log( return )
})						

```
