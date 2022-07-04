const Mongofile = () => {
  return (
    <div>
      <div>
        <h6>Intoduction</h6>
        <p><em>MongoDB - </em>
          Database is a structured way to store and access data. NoSQL document database store data in an organized way such as documents, but not in rows and columns. Database stores one or more collections of documents. These documents are in turn stored in collections of documents. MongoDB is NOSQL document database which stores data in BSON format and viewed in JSON. <br />
          MongoDB provides high performance data persistence. MongoDB supports a rich query language to support CRUD, Data Aggregation, Text Search and Geospatial Queries. MongoDB provides horizontal scalability as part of its 'core' functionality. MongoDB provides pluggable storage engine API that allows third parties to develop storage engines for MongoDB.
        </p>

        <p><em>Document - </em>
          Document is a way to organize and store data as a set of 'field': 'value' pairs. The field is a unique identifier for some data point, and the value is data related to a given identifier may include other documents, arrays, and arrays of documents. A record in MongoDB is a document. The fields in a BSON document are ordered. In MongoDB, each document stored in a collection requires a unique <small> <mark> _id </mark></small> having default value is <small> <mark> ObjectId()</mark></small> unless specified.
        </p>

        <p><em>Collection - </em>
          An organized store of documents in MongoDB, usually with common fields between documents.There can be many collections per database and many documents per collection.
        </p>

        <p><em>Atlas - </em>
          It Manage Cluster creation. Run and Maintain Database Deployment. Use cloud service provider of our choice. Experiment with new tools and features. Atlas UI provides us with Data Explorer so that we can query data using the GUI. Queries must be valid JSON. Returned documet will contain the requested "field":"value" pairs in them.
        </p>

        <p><em>Replica Set - </em>
          A few connected machines that store the same data to ensure that if something happens to one of the machines the data will remain intact. Comes from the word replicate - to copy something. It provides automatic failover, data redundancy and increasing data availability.
        </p>

        <p><em>Instance - </em>
          Instance - A single machine locally or in the cloud, running a certain software, in our case it is the MongoDB database.
        </p>
        <p><em>Cluster - </em>
          Group of servers that store data. 'Sharding' distributes data across a cluster of machines.'Sharding' is a method for distributing data across multiple machines. We can Import/Export from/to local machine / different system, Backup cloud data locally.
        </p>

        <p> <em>Shrading - </em>
          It is a method for distributing data across multiple machines. Database systems with large data sets or high throughput applications can challenge the capacity of a single server. For example, high query rates can exhaust the CPU capacity of the server. Working set sizes larger than the system's RAM stress the I/O capacity of disk drives.<br />
          There are two methods for addressing system growth: Vertical Scaling involves increasing the capacity of a single server, such as using a more powerful CPU, adding more RAM, or increasing the amount of storage space.<br />
          Horizontal Scaling involves dividing the system dataset and load over multiple servers, adding additional servers to increase capacity as required. Expanding the capacity of the deployment only requires adding additional servers as needed, which can be a lower overall cost than high-end hardware for a single machine.
        </p>

        <p><em>Aggregation - </em>
          It process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function, and single purpose aggregation methods. $match, $sort, $group.
        </p>

      </div>

      <div>
        <h6>BSON Data types</h6>
        <p>
          Double, String, Object, Array, Binary data(bindata), ObjectId, Boolean, Date, Null, Regular Expression(regex), JavaScript, 32-bit Integer(int), Timestamp, 64-bit Integer(long), Min Key(minKey), Max Key(maxKey).
        </p>
      </div>

      <div>
        <h6>CREATE / INSERT</h6>
        <p>
          <samp>
            let insertResult = await videoGames.insertOne(&#123;<br />
            title: "Fortnite",<br />
            year: 2018,<br />
            &#125;)<br />
            let &#123; n, ok &#125; = insertResult.result
          </samp> <br />
          If the collection does not currently exist, insert operations will create the collection. when we insert a document, we get an 'insertOneWriteOpResult'. one of its properties is 'result'. 'n' is the total documents inserted and 'ok' means the database responded that the command executed correctly. it also contains an insertedCount(insertResult.insertedCount) key, which should be the same as 'n' and 'insertResult.insertedId'.
          <br />
          if we tried to insert a document with the same _id we get an error message stating we've tried to insert a duplicate key. if we want to insert more than one document at a time, the preferred method for that is 'insertMany([])' OR 'insert()'. As an alternative to inserting, we can specify an 'upsert' in an update operation.
        </p>
      </div>

      <div>
        <h6>READ</h6>
        <p>
          <samp>
            const movies = await global.mflixClient.db(process.env.MFLIX_NS).collection("movies") <br />
            let result = await movies.findOne(&#123; cast: 'Salma Hayek' &#125;, &#123; projection: &#123; title: 1, year: 1 &#125; &#125;)
          </samp><br />
          we'll get a single object back, which will be the first match returned by the cursor have 'title', 'year' and '_id'. If specify 0 for '_id' we can not get '_id' field.<br />
          <samp>
            let result = await movies.find(&#123; <br />
            cast: &#123; $all: ["Salma Hayek", "Johnny Depp"] &#125;,<br />
            &#125;);<br />
            let &#123; title, year, cast &#125; = await result.next();
          </samp> <br />
          The'$all' operator will only return documents where all values specified in the query are present in the array for that field. We get movies with both Salma Hayek and Johnny Depp. The 'db.collection.find()'' method in MongoDB returns a cursor To access the documents, need to iterate the cursor with the ''.next()' method, or 'toArray()' method.<br />
        </p>
      </div>


      <div>
        <h6>UPDATE</h6>
        <p>
          <samp>
            const theaters = await global.mflixClient.db(process.env.MFLIX_NS).collection("theaters")<br />
          </samp><br />
          updateOne() takes a query predicate, to match a document, and a JSON object of one or more update operators, describing how to update that document. If the predicate matches more than one document, updateOne() will update the first document it finds in the collection.<br />
          <samp>
            const updateOneResult = await theaters.updateOne( <br />
            &#123; theaterId: 8 &#125;,<br />
            &#123;<br />
            $set: &#123; "location.address.street1": "14161 Aldrich Ave S" &#125;,<br />
            $inc: &#123;<br />
            "location.geo.coordinates.0": -10,<br />
            "location.geo.coordinates.1": -25,<br />
            &#125;,<br />
            &#125;,<br />
            )

          </samp><br />
          The address of the theatre has id is 8 changed. Use $set to update the new address of this theater and $inc to update the new geo coordinates of this theater. When accessing a subdocument, we must use quotes for example, "location.address.street1" would fail without quotes. We get 'updateOneResult.matchedCount' and 'updateOneResult.modifiedCount'.
          <br />
          <samp>
            const updateManyResult = await theaters.updateMany(<br />
            &#123; "location.address.zipcode": "55111" &#125;,<br />
            &#123; $set: &#123; "location.address.city": "Bloomington" &#125; &#125;,<br />
            )
          </samp><br />
          updateMany() takes a query predicate and a JSON object containing one or more update operators. updateMany() will update any documents matching the query predicate. Find all the movie theaters in the zip code 55111, and update the value of the "city" field to Bloomington. We get 'updateManyResult.matchedCount' and 'updateManyResult.modifiedCount'.
          <br />
          Sometimes, we want to update a document, but we're not sure if it exists in the collection. We can use an "upsert" to update a document if it exists, and insert it if it does not exist.

        </p>
      </div>

      <div>
        <h6>DELETE</h6>
        <p>
          <samp>
            const videoGames = await global.mflixClient.db(process.env.MFLIX_NS).collection("videoGames")<br />
            let deleteDocument = await videoGames.deleteOne(&#123;&#125;)<br />
            console.log(deleteDocument.result.n)
          </samp><br />
          In this case MongoDB will select the first $natural document it encounters in the collection and delete that one. To check that our delete was successful, we can check that 'result.n' is equal to 1. This is an object returned by the MongoDB Javascript driver which will tell the client if a delete has been successful or not.<br />
          <samp>
            let deleteDocument = await videoGames.deleteOne(&#123; year: 2008 &#125;)
          </samp> <br />
          delete a document that matches a particular year. <br />
          <samp>
            let deleteManyDocs = await videoGames.deleteMany(&#123; year: &#123; $lt: 1993 &#125; &#125;)
          </samp><br />
          delete all documents that have a year before 1993.
        </p>
      </div>

      <div>
        <h6>Count</h6>
        <p> <small> <mark> collection.countDocuments()</mark></small> - returns the number of documents in the collection that match the specified query. If specify an empty query document, it returns the total number of documents in the collection.<br />
          <small> <mark>collection.estimatedDocumentCount() </mark></small> - returns an estimation of the number of documents in the collection based on collection metadata.
        </p>
      </div>

      <div>
        <h6>Retrieve Distinct Value</h6>
        <p>
          <small> <mark> collection.distinct()</mark></small> - Call the distinct() method on a Collection object with a document field name parameter as a String to produce a list that contains one of each of the different values found in the specified document field. <br />
          <samp> const distinctValues = collection.distinct("countries", query);</samp>
        </p>
      </div>

      <div>
        <h6>Watch</h6>
        <p>
          <small> <mark>watch() </mark></small> -       We can watch for changes to a single collection, a database, or an entire deployment in MongoDB with Change Streams. Open a change stream by calling this method on a Collection, Db, or MongoClient object. The change stream emits change event documents when they occur.
        </p>
      </div>

      <div>
        <h6>Perform Bulk Operations</h6>
        <p>
          <small> <mark>bulkWrite() </mark></small> -  This method performs batch write operations against a single collection. This method reduces the number of network round trips from application to the server which therefore increases the throughput and performance. Bulk writes return a collection of results for all operations only after all operations passed to the method complete. We can specify one or more of the following write operations in this method: <br />
          insertOne, updateOne, updateMany, deleteOne, deleteMany, replaceOne.
        </p>
      </div>

      <div>
        <h6>Skip, limit</h6>
        <p>
          <small>
            <mark> skip() </mark>
          </small>
          - to omit documents from the beginning of the list of returned documents for a read operation.
          <br />
          <small>
            <mark>
              limit()
            </mark>
          </small>
          - to cap the number of documents that can be returned from a read operation.
        </p>
      </div>

      <div>
        <h6>Specify which Fields to return</h6>
        <p>
          <small>
            <mark>
              projection
            </mark>
          </small>
          - to control which fields appear in the documents returned by read operations. Many requests only require certain fields, so it can help you limit unnecessary network bandwidth usage. It work in two ways: Explicitly include fields with a value of 1. This has the side-effect of implicitly excluding all unspecified fields. Implicitly exclude fields with a value of 0. This has the side-effect of implicitly including all unspecified fields. These two methods of projection are mutually exclusive: if you explicitly include fields, you cannot explicitly exclude fields, and vice versa.
        </p>
      </div>


      <div>
        <h6>Mongoose</h6>
        <p>
          <samp>
            const &#123; Schema &#125; = mongoose;<br />
            mongoose.connect(uri, oprions, callback); <br />
            const blogSchema = new Schema(&#123;<br />
            title:  String, // String is shorthand for &#123;type: String&#125;<br />
            comments: [&#123; body: String, date: Date &#125;],<br />
            date: &#123; type: Date, default: Date.now &#125;,<br />
            meta: &#123;<br />
            votes: Number,<br />
            favs:  Number<br />
            &#125;<br />
            &#125;);
          </samp> <br />

          options and callback are optional in 'mongoose.connect()'. Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Each key in our code blogSchema defines a property in our documents which will be cast to its associated SchemaType. If a property only requires a type, it can be specified using a shorthand notation.
          <br />

          <samp>
            const Blog = mongoose.model('Blog', blogSchema)
            const Tank = mongoose.model('Tank', schema);<br />
            const blog = new Blog(&#123; ... &#125;);<br />
            blog.save(function (err) &#123;<br />
            if (err) return handleError(err);<br />
            &#125;);
          </samp><br />

          To use our schema definition, we need to convert our blogSchema into a Model we can work with. Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.
          When you call 'mongoose.model()' on a schema, Mongoose compiles a model for you. The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database. The 'save()' method returns promise.<br />

          Schemas have a few configurable options which can be passed to the constructor or to the set method: autoIndex, autoCreate, bufferCommands, bufferTimeoutMS, capped, collection, discriminatorKey, id, _id, minimize, read, writeConcern, shardKey, strict, strictQuery, toJSON, toObject, typeKey, useNestedStrict, validateBeforeSave, versionKey, optimisticConcurrency, collation, selectPopulatedPaths, skipVersioning, timestamps, storeSubdocValidationError.
        </p>
      </div>

      <div>
        <a href="https://docs.mongodb.com/manual/reference/operator/query/" target="_blank" className="btn btn-link" rel="noopener noreferrer" >Operators</a>

        <a href="https://mongoosejs.com/docs/schematypes.html" target="_blank" className="btn btn-link" rel="noopener noreferrer">SchemaTypes</a>
      </div>

    </div>
  )
}

export default Mongofile
