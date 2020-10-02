const router = require( 'express' ).Router();

const Projects = require( '../data/helpers/projectModel' );

router.get( '/', ( req, res ) => {
    Projects.get()
        .then( projects => {
            res.status( 200 ).json({ projects });
        })
        .catch( error => {
            console.log( error );
            res.status( 500 ).json({ error: "could not get projects" });
        })
});

router.post( '/', ( req, res ) => {
    Projects.insert( req.body )
        .then( newProject => {
            res.status( 201 ).json({ newProject });
        })
        .catch( error => {
            res.status( 500 ).json({ error: "could not post new project" });
        })
});

router.put( '/:id', ( req, res ) => {
    Projects.update( req.params.id, req.body )
        .then( updatedResource => {
            res.status( 200 ).json({ updatedResource });
        })
        .catch( error => {
            res.status( 500 ).json({ error: "could not update project" });
        })
});

router.delete( "/:id", ( req, res ) => {
    Projects.remove( req.params.id )
        .then( numberRemoved => {
            res.status( 200 ).json({ numberRemoved });
        })
        .catch( error => {
            res.status( 500 ).json({ error: "could not delete project" });
        })
});


module.exports = router;