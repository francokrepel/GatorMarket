import bcrypt from "bcrypt"

export const hashPassword = async (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => { // increases security of hashed password
            if (err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        }) 
    })
}

export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}
