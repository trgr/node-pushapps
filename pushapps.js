"use strict"

var util = require( 'util' )
var request = require( 'request' )

var API_URL = "https://ws.pushapps.mobi/%s"


/* 
 * The following config is transformed into an object which is then exported as this module.
 * If the hash element is an array, the array will be transformed to an object where each element becomes a key potinting to a function of the same name on the paylane webservice.
 * If the hash element is null, then it will point to a function of the same name on the paylane webservice.
 * If the hash element is a function, then it is kept as-is.
 *
 * The functions generated take two parameters, a paylane configuration object, and a callback.
 * The callback is a function with the standard error first function( err, succes)
 * 
 * This module can then be used like: paylane.cards.saleByToken( params, function( err , success ) {} )
 */

var setCredentials = function( user , pass){
	username = user
	password = pass
}

var routeConfig = {
	"RemoteAPI" : [ "RegisterDevice" , "CreateNotification" ]
}



function send( options , callback ){
	request( options, function( err , response, body ){
		callback( err , body )
	})	
}

function createRoute( pathArray ){
	return function( paylaneParameters , callback ){

		var route = pathArray.join("/")
		var options = {
			url : util.format(API_URL, route ),
			method : 'post',
			json : true,
			body : paylaneParameters			
		}
		send( options , callback )
	}
}

var routes = {}

Object.keys( routeConfig).forEach(function( resource ){
	if( routeConfig[resource] == null){
		routes[resource] = createRoute( [ resource ] )
	}else if( typeof( routeConfig[resource] ) == "function" ){
		routes[resource] = routeConfig[resource]
	}else{
		routes[resource] = routeConfig[resource].reduce(function( last , current , index , array ){
			last[current] = createRoute( [ resource , current ] )
			return last
		},{})
	}
})

module.exports = routes
