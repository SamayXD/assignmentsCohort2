const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course , User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const title = req.body.title;

    const newSign = await Course.find({title})
    // console.log(newSign)

    await User.create({
        username,
        password,
        purchasedCourses: newSign
    })  
    
res.json({
    msg: "Welcome"
}) 
});


router.get('/courses',  (req, res) => {

    Course.find({}).then(function(dataMe){
        res.json({
            courses: dataMe
        })
    })

    })


router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId= req.params.courseId;
    const username = req.headers.username;
    console.log(courseId)
    await User.updateOne({
        username : username
    }, {
        "$push" : {
            purchasedCourses: courseId
        }
    })

    res.json({
        msg: "Course Purchased Successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;

    const uuser = await User.findOne({
        username : username
    })
    console.log(uuser.purchasedCourses)
    const myCourse = await Course.find({
        _id:{
            "$in": uuser.purchasedCourses
        }
    })

    res.json({
        msg : myCourse
    })
});

module.exports = router