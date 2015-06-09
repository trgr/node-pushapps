var pushapps = require( '../pushapps.js' )

pushapps.RemoteAPI.RegisterDevice( {
	SecretToken : '',
	PushToken   : '',
	DeviceType  : 1,
	CustomId    : 'foo-tester'
} ,function( err , response){		
	console.log( err )
	console.log( response )
});
