import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }},
    { timestamps: true }
)

userSchema.pre('save', async function () {
    try {
        if(!this.isModified('password')) return next()
        const saltHold = 10
        this.password = await bcrypt.hash(this.password, saltHold)
    } catch(err) {
        console.log(err.message)
    }
})

const User = mongoose.model('User', userSchema)

export default User
