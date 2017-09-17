

export class DB {

  public db: any;

  // Build the connection string 
  public dbURI = "mongodb://localhost/OM_TMS_DB";
  constructor(private mongoose: any) {
    this.db = mongoose;
    this.init();
  }
  init() {
    this.db.Promise = global.Promise;
    this.db.connect(this.dbURI,{ useMongoClient: true });
    // CONNECTION EVENTS
    // When successfully connected
    this.db.connection.on('connected', this.OnConnected.bind(this));
    // If the connection throws an error
    this.db.connection.on('error', this.OnError.bind(this));
    // When the connection is disconnected
    this.db.connection.on('disconnected', this.OnDisconnected.bind(this));
    // If the Node process ends, close the Mongoose connection 
    process.on('SIGINT', this.OnNodeProcessEnd.bind(this));
  }
 private  OnConnected() {
    console.log('Mongoose default connection open');
  }
  private OnError(err) {
    console.log('Mongoose default connection error: ' + err);
  }
  private OnDisconnected() {
    console.log('Mongoose default connection disconnected');
  }
  private OnNodeProcessEnd() {
    this.db.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  }

}
