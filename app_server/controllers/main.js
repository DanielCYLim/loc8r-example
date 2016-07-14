/* GET home page */
module.exports.index = function( reqest, response ) {
    response.render( 'index', {title: 'Express'}) ;
} ;