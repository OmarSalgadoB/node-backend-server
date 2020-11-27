require('./config/config')
const express = require('express')
const app = express()
app.use(cors())
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
let usuarios = [ {nombre:'Omar Salgado', email:'omarsalgado37@gmail.com', 
                 puesto :'Desarrollador', fecha:'26/11/2020',
                domicilio:'Venusatinao Carrana CDMX', habilidades:[ 'Cauteloso' ] },
                 {nombre:'Norma Basaldua', email:'fabi_8@gmail.com', 
                 puesto :'Desarrollador', fecha:'26/11/2020',
                domicilio:'Venusatinao Carrana CDMX', habilidades:[ 'Cauteloso' ]},
                 {nombre:'Paula Alonso', email:'basaldua_34@gmail.com', 
                 puesto :'Desarrollador', fecha:'26/11/2020',
                domicilio:'Venusatinao Carrana CDMX', habilidades:[ 'Cauteloso' ]}
              ]
              app.get('/telcel', function (req, res) {
                res.json(usuarios)
              })
app.get('/', function (req, res) {
  res.json(usuarios)
})
app.post('/telcel', function (req, res) {

  let body = req.body;
  usuarios.push(body);
  res.json({body});
})
 
app.listen(process.env.PORT, ()=> {
    console.log('Estamos escuchando')
})