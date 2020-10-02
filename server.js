const express = require( 'express' );
const projectRouter = require( './routers/projectRouter' );
const actionRouter = require( './routers/actionRouter' );

const server = express();

server.get( '/', ( req, res ) => {
  res.send( `<h2>HOME PAGE</h2>` );
});

server.use( express.json() );
server.use( "/api/projects", projectRouter );
server.use( "/api/actions", actionRouter );

module.exports = server;