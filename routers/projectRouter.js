const router = require( 'express' ).Router();

const Projects = require( '../data/helpers/projectModel' );

router.get( '/', ( req, res ) => {
    Projects.get()
        .then( projects => {
            res.status(200).json({ projects }); 
        })
        .catch( error => {
            console.log( error );
            res.status( 500 ).json({ error: "could not get projects" });
        })
});

module.exports = router;