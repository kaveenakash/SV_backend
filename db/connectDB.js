const mongoose = require('mongoose')

// mongoose.connect(process.env.DATABASE,{
//     useNewUrlParser:true,
//     useFindAndModify:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// })
// .then(() => console.log(`DB Connected Estabilished`))
// .catch((err) => console.log('DB connection  error',err))

const dbURI = 'mongodb+srv://SOCIAL_admin:SOCIAL_123@cluster0.kibum.mongodb.net/Social?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) => console.log('connected to db'))