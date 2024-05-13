const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // Because of this In Req.Body= Json data will come.
const PORT=process.env.PORT || 3000

// const Person = require('./models/Person')
// const MenuItem = require('./models/menu')


app.get('/', (req, res) => {
    res.send("Welcome to Hello");
});

// app.post('/person', (req, res) => {

// const data = req.body
// const newPerson = new Person(data);

// newPerson.name=data.name;
// newPerson.age=data.age;
// newPerson.mobile=data.mobile;
// newPerson.email=data.email;
// newPerson.address=data.address;

// newPerson.save((error, SavedPerson) => {
//     if (error) {
//         console.log("Error Saving Person", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
//     else {
//         console.log("Data Saved Successfully");
//         res.status(200).json(SavedPerson)
//     }
// })
// })
////////////////////////////////////////////////////////
// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body
//         const newPerson = new Person(data);
//         const response = await newPerson.save()
//         console.log("Data Saved")
//         res.status(200).json(response)

//     }
//     catch (err) {
//         console.log("Error Saving Person", err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// })

// app.get('/person', async (req, res) => {
//     try {
//         const data = await Person.find();
//         console.log('Data Fetched')
//         res.status(200).json(data)
//     }
//     catch (err) {
//         console.log("Error Saving Person", err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// })


///////////////////////////////////////////////////////////////////

// app.post('/Menu', async (req, res) => {
//     try {
//         const data = req.body
//         const newMenuItem = new MenuItem(data);
//         const response = await newMenuItem.save()
//         console.log("Data Saved")
//         res.status(200).json(response)

//     }
//     catch (err) {
//         console.log("Error Saving Person", err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// })

// app.get('/Menu', async (req, res) => {
//     try {
//         const data = await MenuItem.find();
//         console.log('Data Fetched')
//         res.status(200).json(data)
//     }
//     catch (err) {
//         console.log("Error Saving Person", err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// })

// app.get('/person/:workType', async (req, res) => {
//     try {
//         const workType = req.params.workType;
//         if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
//             const response = await Person.find({ work: workType });
//             console.log('Response Fetched')
//             res.status(200).json(response)
//         }
//         else {
//             res.status(404).json({ error: "Invalid Work Type" });
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }

// })

const personRouter=require('./routes/personRoutes');
app.use('/person',personRouter);

const MenuRouter=require('./routes/menuRoutes');
app.use('/menu',MenuRouter);



app.listen(PORT, () => {
    console.log("Listening on Port 3000");
});
