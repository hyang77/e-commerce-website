// =============    DECLARE VARIABLES   =============
const   express     = require('express'),
        app         = express(),
        port        = 2355;

// Setting up the ejs package to read ejs extension file
app.set('view engine', 'ejs');
// Using stylesheet css in public directory
app.use(express.static(__dirname + "/public"))
// 

// ROUTES
app.get('/', (req, res) =>{
    res.render('home')
})
    
// Listening to the server
app.listen(port, () =>{
    console.log('Server is starting!');
})