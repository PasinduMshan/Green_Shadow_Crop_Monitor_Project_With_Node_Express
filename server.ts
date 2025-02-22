// import express from 'express';
// import fieldRoutes from "./routes/field-routes";
//
// const app = express();
//
// app.use(express.json());
// app.use('/',(req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
//
//     next();
// })
//
// app.use('/field', fieldRoutes)
//
// app.listen(3000, (err=>{
//     console.log("Server running on port 3000");
// }));
//
// app.use('/',(req,res,next)=>{
//     res.status(200).send('Not Found');
// })

import express from 'express';
import fieldRoutes from "./routes/field-routes";
import staffRoutes from "./routes/staff-routes";

const app = express();

app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
app.use('/field', fieldRoutes);
app.use('/staff', staffRoutes);

// 404 Not Found Middleware
app.use((req, res) => {
    res.status(404).send('Route Not Found');
});

// Server Start
app.listen(3001, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log("Server running on port 3001");
    }
});