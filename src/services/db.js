import mongoose from "mongoose"

mongoose.connect('mongodb+srv://felipe:qJNhYzb4qqsCQx49@api-auth.7cwonsq.mongodb.net/api-auth?retryWrites=true&w=majority')
.then(() => console.log('Banco de dados iniciado'))
.catch(err => console.log(err))

const users = mongoose.model('users', {
    id: Number,
    email: String,
    password: String
})

export { users }