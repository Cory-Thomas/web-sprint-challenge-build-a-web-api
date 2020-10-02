const router = require( 'express' ).Router();

const Actions = require( '../data/helpers/actionModel' );
const Projects = require( '../data/helpers/projectModel' );

router.get( '/:id', ( req, res ) => {
    Projects.getProjectActions( req.params.id )
        .then( listOfActions => {
            res.status( 200 ).json({ listOfActions });
        })
        .catch( error => {
            console.log( error );
            res.status( 500 ).json({ error: "could not retrieve actions" });
        })
});

module.exports = router;