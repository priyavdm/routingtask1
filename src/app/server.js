const express=require('express');
var mysql=require('mysql');
var connection=mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : 'Password123',
    database  : 'routetask1'
});

var cors=require('cors');

app=express();
app.use(express.json());
app.use(cors());
connection.connect();

app.get('/getfirst',(req,res)=>{
    connection.query('select id,regno,uname,age,gender from task where isActive=1', function(error,results){
        if(error){
            console.log(error);
        }
        console.log('The solution is:', results);
        res.json(results);
    })
})

app.get('/getfirstdet/:id',(req,res)=>{
    connection.query('select regno,uname,age,gender from task where id=?',[req.params.id], function(error,results){
        if(error){
            console.log(error);
        }
        console.log('The solution is:', results);
        res.json(results);
    })
})

app.get('/getsecond',(req,res)=>{
    connection.query('select id,tname,tage,tgender,tmessage from task2', function(error,results){
        if(error){
            console.log(error);
        }
        console.log('The solution is:', results);
        res.json(results);
    })
})

app.get('/getseconddet/:id',(req,res)=>{
    connection.query('select tname,tage,tgender,tmessage from task2 where id=?',[req.params.id], function(error,results){
        if(error){
            console.log(error);
        }
        console.log('The solution is:', results);
        res.json(results);
    })
})

app.post('/insert',(req,res)=>{
    connection.query('insert into task (regno,uname,age,gender) values(?,?,?,?)',[req.body.regno,req.body.uname,req.body.age,req.body.gender],function(error,results){
       if(error){
        console.log(error);
       }
       console.log('The solution is:', results);
       res.json(results);
    }
    )
    })

    app.put('/delete',(req,res)=>{
        connection.query('update task set isActive=? where id=?',[0,req.body.id],function(error,results){
           if(error){
              console.log(error);
           }
           console.log('the solution is:',results);
           res.json(results);
        })
     })

     app.get('/edit/:id',(req,res)=>{
        connection.query('select * from task where id=?',[req.params.id],function(error,results){
           if(error){
              console.log(error);
           }
           console.log('The solution is:', results);
           res.json(results);
        })
     })

     app.put('/update',(req,res)=>{
        connection.query('update task set regno=?,uname=?,age=?,gender=? where id=?',[req.body.regno,req.body.uname,req.body.age,req.body.gender,req.body.id],function(error,results){
           if(error){
              console.log(error);
           }
           console.log(results);
           res.json(results);
        })
     })

app.listen(3000,()=>{
    console.log('listening on port 3000');
})
