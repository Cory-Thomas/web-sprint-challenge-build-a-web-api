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

router.post( '/:id', ( req, res ) => {
    Actions.insert( req.body )
        .then( newAction => {
            res.status( 200 ).json({ message: "action added!", data: newAction });
        })
        .catch(error => {
            res.status( 500 ).json({ error: "could not add action" });
        })
});

router.put( '/:id/:actionid', ( req, res ) => {
    Actions.update( req.params.actionid, req.body )
        .then( updatedAction => {
            if( updatedAction !== null ){
                res.status( 200 ).json({ updatedAction });
            } else {
                res.status( 500 ).json({ error: "the action does not exist!" });
            }
        })
        .catch( error => {
            res.status( 500 ).json({ error: "could not update action" });
        })
});

router.delete( '/:id/:actionid', ( req, res ) => {
    Actions.remove( req.params.actionid )
        .then( numberRemoved => {
            res.status( 200 ).json({ numberRemoved });
        })
        .catch(error => {
            res.status( 500 ).json({ error: "could not delete action" });
        })
});

module.exports = router;