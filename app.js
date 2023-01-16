import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {router} from './routes/routes-data.js';

dotenv.config();
const app = express();

app.set( 'port', process.env.APP_PORT || 3000);
app.use(express.json());

app.use( '/data', router );

// In case no route matches
app.use(( req,res ) => {
  res.status(404).json({ 'status': 'error', 'message': 'not found'});
});

const runServer = async () => {
  try {
    // REFERENCE
    // https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
    mongoose.set('strictQuery', false);
    await mongoose.connect(
      process.env.MONGODB_URI + process.env.MONGODB_DATABASE_NAME
    );
    app.listen(app.get('port'), function() {
      console.log('Server started on port ' + app.get('port'))
      app.emit( 'APP_STARTED' );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
  
runServer();
