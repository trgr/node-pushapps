var should = require( 'should' )
var assert = require( 'assert' )

var pushapps = require( '../pushapps' )

describe( 'RemoteAPI' , function() {
	it( 'Should have function RegisterDevice' , function( done ){
		pushapps.RemoteAPI.should.have.property('RegisterDevice')
		done()
	})
})


