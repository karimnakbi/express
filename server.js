const express = require('express');
const app= express();
const PORT=5000 ;
//console.log(app);

const timer = (req, res, next) => {
    const date = new Date().getDay();
    const hours = new Date().getHours();
    if ((9 <= hours && hours < 17) && ( 1<= date && date <=  5)) {
    next();
    console.log(hours);
    } else {
    res.send(
    "this page is available only available during working hours (from Monday to Friday, 9h --> 17 h)"
    );
        }

};
// app.use(timer);

// const authMiddelwear = (req,res,next)=>{
//     const auth = true ;
//     if(auth){
//         next()
//     } else res.send('you are not auth')
// }
// app.use(authMiddelwear);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/statics/home.html");
}) ;

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/statics/contact.html");
}) ;

app.get('/services',(req,res)=>{
    res.sendFile(__dirname+"/statics/services.html");
}) ;

// app.use(express.static(__dirname+'/statics')) ; 

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+"/statics/style.css")
})

app.listen(PORT,(err)=>err? console.log(err): console.log('server is runningon port',PORT))