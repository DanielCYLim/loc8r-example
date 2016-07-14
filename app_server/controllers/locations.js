/* GET 'home' page */
module.exports.homelist = function( request, response ) {
    response.render( 'index', {title: 'Home'}) ;
} ;

/* GET 'Location info' page */
module.exports.locationInfo = function( request, response ) {
    response.render( 'index', {title: 'Location info'}) ;
} ;

/* GET 'Add review' page */
module.exports.addReview = function( request, response ) {
    response.render( 'index', {title: 'Add review'}) ;
} ;