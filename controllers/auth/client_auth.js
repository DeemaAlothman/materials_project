import prisma from "../../prisma/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const ClientRegister = async (req, res) => {
    try {
        const { client_name, password, phone_number, city } = req.body;

        const existingClient = await prisma.clients.findFirst({
            where: { client_name }
        });

        if (existingClient) {
            return res.status(400).json({ state: "false", msg: "Client name already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newClient = await prisma.clients.create({
            data: {
                client_name,
                password: hashedPassword,
                phone_number,
                city
            }
        });

        res.status(201).json({ state: "success", msg: "Registration successful", client: newClient });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ state: "false", error: "Internal server error" });
    }
};



export const ClientLogin = async (req, res) => {
    try {
        const { client_name, password } = req.body;

        const client = await prisma.clients.findFirst({
            where: { client_name }
        });

        if (!client) {
            return res.status(400).json({ state: "false", msg: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, client.password);

        if (!isPasswordValid) {
            return res.status(400).json({ state: "false", msg: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                id: client.id,
                client_name: client.client_name
            },
            process.env.JWT_SECRET,  // تأكد أنك ضايف متغير JWT_SECRET في .env
            { expiresIn: "1h" }
        );

        res.status(200).json({
            state: "success",
            msg: "Login successful",
            token: token,
            client: {
                id: client.id,
                client_name: client.client_name,
                phone_number: client.phone_number,
                city: client.city
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ state: "false", error: "Internal server error" });
    }
};
