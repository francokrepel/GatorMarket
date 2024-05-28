import { hashPassword, comparePassword } from "../helpers/auth.js"
import prisma from "../helpers/prisma.js"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const {name, username, email, password} = req.body;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || !email || !password) return res.status(400).json({ message: "Username, email, and password are required" });

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: "Password must contain at least one number, one lowercase, one uppercase letter, and at least 8 characters" });
    }

    try {
        // Check if username already exists
        const existingUsername = await prisma.user.findUnique({
            where: { username }
        });
        if (existingUsername) {
            return res.status(409).json({ message: "Username already exists" });
        }
        // Check if email already exists
        const existingEmail = await prisma.user.findUnique({
            where: { email }
        });
        if (existingEmail) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const hashedPassword = await hashPassword(password);
        await prisma.user.create({
            data: {
                name,
                username,
                email,
                password: hashedPassword,
            }
        });
        res.status(201).json({ message: "User created succesfully" });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user" });
    }
}

export const login =  async (req, res) => {
    const { username, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || !password) {
        return res.status(400).json({ message: 'Please enter a username/email and a password' })
    }
    try {
        var user;
        // if its en email, find email, else username
        if (emailRegex.test(username)) {
            user = await prisma.user.findUnique({
                where: { email: username }
            });
        } else {
            user = await prisma.user.findUnique({
                where: { username }
            });
        }
        const isValid = await comparePassword(password, user.password);
        if (!user || !isValid) {
            return res.status(401).json({ message: "Incorrect username or password" });
        }
        const token = jwt.sign({
            id: user.id,
        }, process.env.JWT_SECRET, { expiresIn: 86400000 })

        const { password: userPassword, ...userInfo } = user;

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 86400000
            // secure: true
        }).status(200).json(userInfo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to process login" });
    }
}

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout succesful"})
}
