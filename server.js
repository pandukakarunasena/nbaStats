
const express = require('express')
const bodyparser = require('body-parser')
//const cors = require('cors')
const request = require('request')
const path = require('path')

const app = express()

//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'state-management/build')));
    //
    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname = 'state-management/build/index.html'));
    // })
  }

//build mode
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/state-management/public/index.html'));
//   })
  
//middleware
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname+'state-management/build')))
//app.use(cors())

//api keys and links
//const proxy = `https://cors-anywhere.herokuapp.com/`
const key = `4605e861751a4badb6e6ad5ae0d5253c`
const common = 'https://api.sportsdata.io/v3/nba/scores/json/'
const common2 = 'https://api.sportsdata.io/v3/nba/stats/json/'

//get the list of teams with additional info
app.get('/TeamList',(req,res) => {
    
    request.get(`${common}teams?key=${key}`,(error, response,body)=> {
        if(error){
            console.log(error)
            return console.dir(error)
        }else{
            console.log('done')
           res.status(200).json(JSON.parse(body))
            
        }
    })    
})

//get the list of stadiums api call
app.get('/Stadiums',(req,res)=>{

    request.get(`${common}Stadiums?key=${key}`,(error,response,body)=>{
        if(error){
            return res.json(JSON.parser(error))
        }else{
            res.json(JSON.parse(body))
        }
    })
})


//get the news from the api
app.get('/News',(req,res) => {
    request.get(`${common}News?key=${key}`,(error,response,body) => {
        if(error){
            res.json(JSON.parser(error))
        }else{
            res.json(JSON.parse(body))
        }
    })
})

//get the list of players and team

app.post('/Players',(req,res) => {
   
    const {input} = req.body
    
    request.get(`${common2}Players/${input}?key=${key}`,(error,response,body) => {
        if(error){
            res.json(JSON.parse(error))
        }else{
            res.json(JSON.parse(body))
            
            
        }
    })
})

//get the team keys by calling the api teams again...should replace this
app.get('/GetTeamsKey',(req,res) => {

    request.get(`${common2}teams?key=${key}`,(error,response,body) => {
        if(error){
            res.json(JSON.parse(error))
        }else{
            res.json(JSON.parse(body))   
            
        }
    })
})





app.listen(process.env.PORT || 3006, () => {
    console.log('server is online')
})