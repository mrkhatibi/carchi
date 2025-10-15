import bcrypt, { compare } from "bcryptjs"

export async function hashPassword(password) {
    const hashed = await bcrypt.hash(password , 12)
    return hashed
}

export async function isValid(password , hashedPassword) {
    const isvalid = await compare(password , hashedPassword)
    return isvalid
}

