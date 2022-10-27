const express= require('express')
const app= express()
const port= process.env.PORT || 5000
const cors= require('cors')
const courses=require('./Data/course-description.json')
const catagories= require('./Data/catagories.json')
const blogposts=require('./Data/blogPost.json')
app.use(cors())


// route added
app.get('/blog', (req, res) => {
    res.send(blogposts)
})

app.get('/blog/:id', (req, res)=> {
    const id= req.params.id
    const singleBlogPost= blogposts.find (post=> post.id === id)
    res.send(singleBlogPost)
})

app.get('/catagories', (req, res) => {
    res.send(catagories)
})

app.get('/catagories/:catagories_id', (req, res)=> {
    const catagoriesId= req.params.catagories_id
    const coursesInCatagories= courses.filter(category => category.catagories_id === catagoriesId) 
    res.send(coursesInCatagories)
    
} )


app.get('/courses', (req, res)=> {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const coursesId= req.params.id
    const singleCourses= courses.find(course=> course.id === coursesId)
    res.send(singleCourses)
})





app.get('/', (req, res)=>{
    res.send("This is Server is Running perfectly")
})

app.listen(port, () => {
    console.log("This Server Address is" ,port)
})