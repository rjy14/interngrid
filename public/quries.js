const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Users',
  password: '123456',
  port: 5432,
})
const createUser = (request, response) => {
    const {firstname,lastname,email,password} = request.body
    pool.query('INSERT INTO public."Users_table" (firstname,lastname,email,password) VALUES ($1, $2, $3, $4) RETURNING *', [firstname,lastname,email,password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }
  module.exports = {
    // getUsers,
    // getUserById,
    createUser,
    login,
    // updateUser,
    // deleteUser,
  }