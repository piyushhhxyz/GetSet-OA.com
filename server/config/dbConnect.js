const mongoose = require("mongoose")

module.exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true ,
        useUnifiedTopology: true 
    })
        .then(console.log(`DB connection Successfull`)) 
        .catch(e => {
            console.log(`DB Connection failed`)
            console.error(e.message)
            process.exit(1)
            
        })
}