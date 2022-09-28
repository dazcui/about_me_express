const express = require('express');
const app = express();


app.get('/me',(request, response)=>{
    console.log(request.method);
    response.status(200).json({
        nombre: 'David',
        edad: '45 años',
        pais: 'Bolivia'
    })
})
app.post('/metas',(request, response)=>{
    console.log(request.method);
    response.status(200).json({
        hobby_one: 'jugar fronton',
        hobby_two: 'ver peliculas',
        hobby_three: 'programar',
        verb: request.method
    })
})
app.patch('/metas',(request, response)=>{
    console.log(request.method);
    response.status(200).json({
        goal_one: 'hacer una aplicacion innovadora y unica',
        goal_two: 'mi propia empresa de programacion',        
        verb: request.method
    })
})
app.put('/business',(request, response)=>{
    console.log(request.method);
    response.status(200).json({
        business_one: 'goolge',
        business_two: 'Globant',
        business_three: 'freelace',
        verb: request.method
    })
})

// escucha en el port 8500
app.listen(8500, ()=>{
    console.log('Server started at port 8500')
})