import express from "express"
import { data } from './modules.js'
import cors from 'cors'

const app = express();
const port = 7000

app.use(cors())

app.get('/emoji', (req, res) => {
   res.status(200).json(data)

})




app.listen(port, function () {
   console.log(`Server listens http://${port}`)
})
