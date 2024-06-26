import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
// import bodyParser from 'body-parser'

const app: Express = express()

const PORT: string | number = process.env.PORT || 8080

// app.use(bodyParser())
app.use(cors())
app.use(todoRoutes)

// replace the host "cluster0.xo006.mongodb.net" with the address of your host generated in MongoDB Atlas.
// https://docs.mongodb.com/manual/reference/connection-string/
const uri: string = `mongodb+srv://sidjainsiddharth11:7oHWdWv8Zut5wigx@cluster0.zrbqmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
.connect(uri + options)
.then(() =>
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    )
)
.catch((error) => {
    throw error
})