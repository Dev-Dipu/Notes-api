const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb+srv://dipu:7J502WiIknabzwCX@cluster0.qa8gdg5.mongodb.net/cosmo')
    .then(() => {
        console.log('db connected succesfully!')
    })
    .catch(err => console.log(err))
}

module.exports = connectDB;