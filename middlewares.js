const express = require('express');
const app = express();
const router = express.Router();


// 🔹 1. Inbuilt middlewares (FIRST)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// 🔹 2. Application-level middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url} at ${new Date()}`);
    next();
}
app.use(logger);

app.use((req, res, next) => {
    console.log('This is application level middleware');
    next();
});


// 🔹 3. Router middleware
router.use((req, res, next) => {
    console.log("Router middleware triggered");
    next();
});

router.get('/user', (req, res) => {
    res.send("User route");
});

// mount router
app.use('/api', router);


// 🔹 4. Routes
app.get('/home', (req, res) => {
    res.send('Hello from Home page...');
});


// 🔹 5. Error handling middleware (ALWAYS LAST)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong....');
});


app.listen(3333, () => {
    console.log("Server is running on port 3333");
});