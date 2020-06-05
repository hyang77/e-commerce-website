// =============    DECLARE VARIABLES   =============
const   express     = require('express'),
        app         = express(),
        connectDB   = require('./Database/connections'),
        port        = process.env.PORT ||2355;

// Using stylesheet css in public directory
app.use(express.static(__dirname + "/public"))
// 
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// ROUTES
app.get('/', (req, res) =>{
    res.render('home')
})
    
// Listening to the server
app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
})