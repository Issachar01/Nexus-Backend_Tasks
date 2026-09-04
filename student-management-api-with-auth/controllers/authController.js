const users = require('../data/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authRegisteration = async (req, res) => {
    const { name, email, password} = req.body
    if (!name || !email || !password) {
        return res.status(400).send("Name, email and password must be filled...")
    }

    if (!(typeof name  === "string" && typeof email === "string")) {
        return res.status(400).send("Invalid input...")
    }

    const prevEmail = users.find(user => user.email === email)
    if (prevEmail) return res.status(409).send("Email already registered...")
    const newId = users.length + 1;
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = {
        id: newId,
        name,
        email,
        password: hashedPassword,
        role: "user" //Default role
    }

    users.push(newUser)

    res.status(201).json({
        message: "User registered successfully"
    })
}

const authLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).send("Insert your email and password please!")
    const user = users.find(user => user.email === email)
    if (!user) return res.status(401).send("Invalid credentials!!")
    if (! await bcrypt.compare(password, user.password)) {
       return res.status(401).send("Password Incorrect") 
    }

    try {
        const token = jwt.sign(
            { id: user.id, role: user.role},
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN}
        )
        res.status(200).json({
            success: true,
            message: "Logged in successfully...",
            access_token: token
        })
    } catch {
        res.status(500).send()
    }
}

module.exports = {
    authRegisteration,
    authLogin
}