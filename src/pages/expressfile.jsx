const Expressfile = () => {
  return (
    <div>

      <div>
        <h6>Node</h6>
        <p>It is a open-source and cross-platform runtime environment for executing javascript code. Node runs 'V8' engine which allows to run JavaScript on the server.  Single thread handles multiple requests by using Event Queue table. It uses non-blocking or asynchronous programming. It can create, open, read, write, delete, and close files on the server. It can collect form data. It can add, delete, modify data in your database.</p>
        <p>This files contain tasks that will be executed on certain events. A typical event is someone trying to access a port on the server. This files must be initiated on the server before having any effect. Node.js, accept arguments from the command line</p>
        <p>Node is ideal for building highly-scalable, superfast, data-intensive and real time backend services that power our client applications. Node is ideal for I/O intensive apps. Node is great for prototyping and agile development, cleaner and consistent codebase, Large ecosystem of open source libraries. Paypals one of the module which was built in Java and spring rebuild in Node and results are Built twice as fast with fewer people, 33% fewer lines of code, 40% fewer files, double the request per/sec, 35% faster response time.</p>
      </div>

      <div>
        <h6>Module</h6>
        <p>Every file in Node application is considered as Module. Modules are set of functions and varialbes want to include in our application. Modules are divide into Core Modules, Local Modules and third party modules. Node has a set of built-in/core modules which can use without any further installation like 'os', 'fs', 'http', 'events'. To include a module, into another module use the <mark> <small>  require() </small></mark> function. We can export module using 'module' object ex <mark><small> module.exports = ModuleName </small></mark>. We can create our own module. </p>
        <p>node module is wrapped in a IIF. <mark> <small> (function(exports, require, module, __fileName, __dirname)&#123; &#125;)</small></mark>. We can call this function a 'Module Wrapper Function'.</p>
      </div>

      <div>
        <h6>How NodeJs handles a file request</h6>
        <p>It Sends the task to the computer's file system. It eliminates the waiting and ready to handle the next request. When the file system has opened and read the file, the server returns the content to the client.</p>
      </div>

      <div>
        <h6>Node Package Manager(npm)</h6>
        <p>npm is the package manager for node. The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community. npm allows us to access all these packages and install them locally.</p>
        <p>
          flags added to this 'npm' command:<br />
          <small> <mark>--save-dev </mark></small> installs and adds the entry to the package.json file devDependencies. Shorhand is <small> <mark> -D </mark></small><br />
          <small> <mark>--no-save </mark></small> installs but does not add the entry to the package.json file dependencies.<br />
          <small> <mark>--save-optional </mark></small> installs and adds the entry to the package.json file optionalDependencies. shorthand is <small> <mark> -O </mark></small><br />
          <small> <mark>--no-optional </mark></small> will prevent optional dependencies from being installed.<br />
          The package.json file supports a format for specifying command line tasks that can be run by using <small>
            <mark>
              npm run &lt;taskName&gt;
            </mark>
          </small> taskname are watch, dev, prod etc.<br />
          A global installation is performed using the '-g' flag

        </p>
      </div>

      <div>
        <h6>Package.json</h6>
        <p>
          This file is kind of a manifest for project. It's a central repository of configuration for tools, for example. It's also where npm and yarn store the names and versions for all the installed packages. devDependancies differ from dependencies because they are meant to be installed only on a development machine, not needed to run the code in production.<br />
          <samp>
            &#123;
            "name": "test-project", //name of the application/package <br />
            "version": "1.0.0", //indicates the current version<br />
            "main": "src/main.js", //entry point of appalication<br />
            "scripts": &#123; //scripts defines a set of node scripts you can run<br />
            "start": "npm run dev",
            &#125;,<br />
            "dependencies": &#123; //sets a list of npm packages installed as dependencies <br />
            "vue": "^2.5.2"
            &#125;,<br />
            "devDependencies": &#123; //sets a list of npm packages installed as development dependencies<br />
            "webpack-merge": "^4.1.0"<br />
            &#125;
            &#125;
          </samp><br />
          The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers.
        </p>
      </div>

      <div>
        <h6>JSHint</h6>
        <p>JSHint is a community-driven tool that detects errors and potential problems in JavaScript code. To check errors run 'jshint filename' in cmd. </p>
      </div>

      <div>
        <h6>Difference between Browser and NodeJS</h6>
        <p><small> <mark> Browser</mark></small> : DOM, 'window' object, Interactive apps, No filesystem, fragmentation, ES6 Modules <br />
          <small> <mark> NodeJS</mark></small> : No DOM, No 'window' object, server side apps, filesystem, Versions, commonJS </p>
      </div>

      <div>
        <h6>Explain</h6>
        <p><small> <mark> GLOBALS</mark></small> : No Window object in NodeJS <br />
          <small> <mark>__dirname</mark></small> : path to current directory. <br />
          <small> <mark>__filename</mark></small> : filename. <br />
          <small> <mark>module</mark></small> : info about current module (file). It Encapsulates data. <br />
          <small> <mark>require</mark></small> : function to use modules(commonJs). <br />
          <small> <mark>process</mark></small> : info about env where the proram is being executed.</p>
      </div>

      <div>
        <h6>OS Module</h6>
        <p><small><mark>os.userInfo()</mark></small> : Info about current user. <br />
          <small><mark>os.uptime()</mark></small> : system uptime in seconds. <br />
          <small><mark>os.type() / os.release() / os.freemem() / os.totalmem()</mark></small> <br /></p>
      </div>

      <div>
        <h6>path Module</h6>
        <p>
          <samp>
            const path = require('path')
          </samp><br />
          Given a path, can extract information out of it using methods like dirname: get the parent folder of a file.basename: get the filename part. extname: get the file extension.
        </p>
      </div>

      <div>
        <h6>file(fs) Module</h6>
        <p>
          <small>
            <mark>
              readFileSync('./content/file.txt','utf8'), writeFileSync('./content/file.txt', 'Hello World', &#123; flag: 'a' &#125;),
            </mark>
          </small>
          <br />
          <small>
            <mark>
              readFile('./content/file.txt','utf8', (err, result) =&gt; &#123; &#125;), writeFile('./content/file.txt', 'Hello World', (err, result) =&gt; &#123; &#125;))
            </mark>
          </small>
        </p>
      </div>

      <div>
        <h6>http Module</h6>
        <p>
          <small>
            <mark>
              createServer((req, res) = &lt; &#123; &#125; ), listen(port, callback)
            </mark>
          </small>
          The callback function we pass is the one that's going to be executed upon every request that comes in
        </p>
      </div>

      <div>
        <h6>'req' object properties and methods</h6>
        <p>
          <small>
            <mark>
              url,
            </mark>
          </small>
          <br />
          <small>
            <mark>

            </mark>
          </small>
        </p>
      </div>

      <div>
        <h6>'res' object properties and methods</h6>
        <p>
          <small>
            <mark>
              write(), end(),
            </mark>
          </small>
          <br />
          <small>
            <mark>

            </mark>
          </small>
        </p>
      </div>

      <div>
        <h6>Events</h6>
        <p>
          <samp>
            const EventEmitter = require('events') //returns class<br />
            const eventEmitter = new EventEmitter() // create object<br />
            eventEmitter.on('start', () =&lt; &#123;console.log('started') &#125;) //create 'start' event<br />
            eventEmitter.emit('start') //the event handler function is triggered, and we get the console log.
          </samp>
          <small> <mark> emit </mark></small> is used to trigger an event. <br />
          <small> <mark> on </mark></small>is used to add a callback function that's going to be executed when the event is triggered. it is alises of addEventListener()<br />
          The EventEmitter object also exposes several other methods to interact with events, like once(): add a one-time listener. removeListener() / off(): remove an event listener from an event. removeAllListeners(): remove all listeners for an event
        </p>
      </div>

      <div>
        <h6>Error Handling</h6>
        <p>
          <samp>throw new Error('Ran out of coffee') //In Node.js throw Error Object.</samp><br />
          If an uncaught exception gets thrown during the execution of program, program will crash. To solve this, listen for the 'uncaughtException' event on the 'process' object.<br />
          <samp>
            process.on('uncaughtException', err =&lt; &#123; <br />
            console.error('There was an uncaught error', err) <br />
            process.exit(1) //mandatory (as per the Node.js docs) <br />
            &#125;)
          </samp><br />
        </p>
      </div>


      <div>
        <h6>ExpressJs</h6>
        <p>It is a fast, robust, asynchronous, minimal, flexible, Open source web framework. It is a 'server-side' or 'back-end' framework. </p>
      </div>

      <div>
        <h6>Installation</h6>
        <p>Method 1</p>
        <p>Create a folder and run following commands:<br />
          <mark><small> npm init </small></mark> It creates Package.json file. <br />
          <mark> <small> npm i express</small></mark> It installs express as dependancy.<br />
          <mark> <small> npm install</small></mark> It installs all other dependancies.<br />
          <mark> <small> npm i -D nodemon</small></mark> OR <mark> <small> npm i -g nodemon</small></mark>This tool restarts our server as soon as we make a change in any of our files, otherwise we need to restart the server manually after each file modification. <br />
          Go to package.json file and in "scripts" write following "start":"node index", "dev":"nodemon index" <br />
          <mark> <small> npm run dev</small></mark> OR <mark> <small> nodemon fileName.js</small></mark>It starts deve server means nodemon.<br />
          <mark> <small> set PORT=5000</small></mark> It sets PORT environment variable.
        </p>
        <p>Method 2</p>
        <p><small> <mark> npx express-generator</mark></small> <br />
          <small> <mark> npm install</mark></small> <br />
          express generator is an application generator tool, to quickly create an application skeleton.</p>
      </div>

      <div>
        <h6>Routing</h6>
        <p>Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched.</p>
        <p> <small> <mark> app.METHOD(PATH, HANDLER) </mark> </small></p>
      </div>

      <div>
        <h6>Middleware functions</h6>
        <p>Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. Middleware functions can Execute any code, Make changes to the request and the response objects, End the request-response cycle, Call the next middleware in the stack. Express has built-in middleware also comes from 3rd party packages as well as custom middleware. Middleware executes any code, makes changes to the 'request/response' object, End response cycle, Call next middleware in the stack.<br />
          request =&gt; middleware =&gt; response </p>

        <p>We can pass middleware function reference at the middle between path and callback function. <br />
          <small> <mark> app.get('/', middleware, (req, res) =)</mark></small>, middleware function generally has 3 arguments req, res and next. Mostly It contains only logic. We must have to call next() in middleware function otherwise the page is stuck. It simply pass the pointer to that original function where we reference middleware function. </p>
      </div>

      <div>
        <h6>HTTP Request</h6>
        <p> <small> <mark> app.all('*', callback)</mark></small> : If not any path found. <br />
          <small> <mark> app.use(express.json())</mark></small> : It is a body-parser. <br />
          <small> <mark> app.route()</mark></small> : can create chainable route handlers for a route path <br />
          <small> <mark> app.use(path, middleware)</mark></small> : path is optional so we can run middleware for specific routes. we can use same middleware in multiple routes between route and callback function. the easy method is 'use' method on top of all routes So, it can run on every route.<br /></p>
      </div>

      <div>
        <h6>'request' object methods and properties</h6>
        <p> <small> <mark> const &#123; parameter1, parameter2, ... &#125; = res.params </mark></small> : gets a parameter. It returns object of multiple parameters if multiple parameters are in URL. <br />
          <p> <small> <mark>const &#123; qparameter1, qparameter2, ... &#125; = res.query </mark></small> : gets a query parameter. It returns object of multiple query parameters if multiple query parameters are in URL. <br />
            <small> <mark> req.method, req.url</mark></small> </p>
        </p>
      </div>

      <div>
        <h6>'response' object methods and properties</h6>
        <p> <small> <mark> res.status(statusCode) , res.send('Any text'), res.sendFile(filepath),
          res.json('text' or object), </mark></small> <br />
          <small> <mark> res.end() </mark></small> : Use to quickly end the response without any data. <br />
          <small> <mark> res.redirect([status,] path) </mark></small> : Redirects to the URL derived from the specified path, with specified status. <br />
          <small> <mark> res.set(field [, value]) </mark></small> : Sets the response’s HTTP header field to value. To set multiple fields at once, pass an object as the parameter.<br />
          Its required to write 'return' statement if multiple responses sends in different conditions, because when response send at second time it throws an error.</p>

      </div>

      <div>
        <h6>API vs SSR</h6>
        <p> <small> <mark> API </mark></small> : use JSON, send data, res.json() <br />
          <small> <mark> SSR </mark></small> : use Template, send template, res.render()</p>

      </div>

      <div>
        <h6>request and respose object</h6>
        <p>these object are same provided by NOdeJs</p>
        <p></p>
      </div>

      <div>
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" className="btn btn-link" target="_blank"
            rel="noopener noreferrer" >HTTP status response codes</a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" className="btn btn-link" target="_blank"
            rel="noopener noreferrer" >MIME types</a>
          <a href="https://mongoosejs.com/docs/guide.html" className="btn btn-link" target="_blank"
            rel="noopener noreferrer" >mongoose docs</a>
          <a href="https://expressjs.com/en/starter/static-files.html" className="btn btn-link" target="_blank"
            rel="noopener noreferrer" >serving static files</a>
          <a href="https://expressjs.com/en/4x/api.html" className="btn btn-link" target="_blank"
            rel="noopener noreferrer" >API Reference</a>
        </p>
      </div>

      <div>
        <h6>How to Exit from Node.js program</h6>
        <p>Use 'process.exit(ExitCode)' in CMD, where default ExitCode is 0.</p>
        <p>Express need to send the command a 'SIGTERM' signal that tells a process to gracefully terminate, and handle that with the process signal handler. <small>
          <mark>process</mark>
        </small> is automatically available in program.<br />
          <samp>
            process.on('SIGTERM', () =&lt; &#123; server.close(() =&lt; &#123; console.log('Process terminated') &#125;)
            &#125;)
          </samp>
        </p>
      </div>

      <div>
        <h6>How to read environment variable</h6>
        <p>
          The <small> <mark> process</mark></small> core module of Node.js provides the <small> <mark>env</mark></small> property which hosts all the environment variables that were set at the moment the process was started. Create an .env file in the root directory for multiple environment variables in our project, and then use the 'dotenv' package to load them during runtime.
          <samp>
            require('dotenv').config();
          </samp>

        </p>
      </div>

      <div>
        <p>
          You can pass any number of arguments when invoking a Node.js application. Arguments can be standalone or have a key and a value. <br />
          <samp>node app.js joe</samp> OR <samp>node app.js name=joe</samp>
        </p>
      </div>

      <div>
        <h6>Export and Import in Node.js</h6>
        <p>Export
          <samp>
            const car = &#123; &#125;
            module.exports = car
          </samp><br />
          Import
          <samp>
            const car = require('./car')
          </samp><br />

          Export
          <samp>
            const car = &#123; &#125;
            exports.car
          </samp>

          OR
          <samp> exports.car = &#123; &#125;</samp><br />
          Import
          <samp>
            const items = require('./items');
            const car = items.car

          </samp><br />
          What's the difference between module.exports and exports?

          The first exposes the object it points to. The latter exposes the properties of the object it points to.
        </p>
      </div>

    </div>
  )
}

export default Expressfile
