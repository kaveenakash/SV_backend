const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(() => console.log(`DB Connected Estabilished`))
.catch((err) => console.log('DB connection  error',err))