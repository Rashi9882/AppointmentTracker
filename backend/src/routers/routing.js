const express = require("express")
const router = new express.Router()
const User = require("../models/userSchema")
const Appointment = require("../models/appointmentSchema")

//register user
router.post("/register", async (req, res) => {
    try {
        const userData = new User(req.body)
        const insert = await userData.save();
        res.status(201).send(insert)
    } catch (e) {
        console.log("error occured")
        res.status(400).send(e)
    }
})

//login user
router.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const userCheck = await User.find({
            email: email,
            password: password
        });
        if (userCheck.length > 0) {
            res.status(201).json({
                message: 'Successfully LoggedIn'
            })
        } else {
            res.status(201).json({
                message: 'Incorrect username and password'
            })
        }

    } catch (e) {
        console.log("error occured")
        res.status(400).send(e)
    }
})

//make appointment based on availability
router.post("/appointment", async (req, res) => {
    try {
        //check if guest is available on selected time slot
        const guestCheck = await User.findOne({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });

        //when there is no guest with this name
        if (!guestCheck) {
            return res.status(400).json({
                message: 'Guest not found.'
            });
        }

        //guest is there but not available
        if (
            guestCheck.fromOffTime !== "" && guestCheck.toffTime !== "" &&
            req.body.fromtime >= guestCheck.fromOffTime && req.body.totime <= guestCheck.toffTime
        ) {
            return res.status(201).json({
                message: "Guest is not available. Please select another time slot.",
            });
        }

        //insert appointment details into table
        const appointmentDetails = new Appointment(req.body);
        const insertData = await appointmentDetails.save();

        res.status(201).json({
            message: "Appointment Fixed!",
            data: insertData,
        });

    } catch (e) {
        console.log("error occured")
        res.status(400).send(e)
    }
})

//get all the appointent of an individual
router.get("/appointment/:usermail", async (req, res) => {
    try {
        const data = await Appointment.find({
            email: req.params.usermail
        })
        res.status(200).json({
            message: 'Data Retrived',
            body: data
        })
    } catch (e) {
        console.log("error occured")
        res.status(400).send(e)
    }
})

//get user details to display on profile page
router.get("/user/:usermail", async (req, res) => {
    try {
        const data = await User.find({
            email: req.params.usermail
        })
        res.status(200).json({
            message: 'User Details Fetched!',
            body: data
        })
    } catch (e) {
        console.log("error occured")
        res.status(400).send(e)
    }
})

//update pasword details
router.patch("/update/password/:usermail", async (req, res) => {
    try {
        console.log("params password", req.params.usermail)
        console.log("req body", req.body)
        const data = await User.updateOne({
            email: req.params.usermail
        },
            {
                $set: {
                    password: req.body.newpassword
                },
            }, { new: true });

        res.send(data)
    } catch (e) {
        console.log("error occured")
        res.status(400).send(e)
    }
})

//update off hours
router.patch("/update/userhours/:usermail", async (req, res) => {
    try {
        console.log("params userhours", req.params.usermail)
        const data = await User.updateOne({
            email: req.params.usermail
        }, {
            $set: {
                fromOffTime: req.body.fromOffTime,
                toffTime: req.body.toffTime
            }
        }, { new: true })
        res.send(data)
    } catch (e) {
        console.log("error occured")
        res.status(400).send(e)
    }
})

module.exports = router