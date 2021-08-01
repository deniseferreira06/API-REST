const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
  const response = await pool.query('SELECT * FROM users');
  res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
   const { name, email } = req.body;

   const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
   console.log(response);
   res.json({
       message: 'Usuario adicionado com sucesso',
       body: {
           user: {name, email}
       }
   })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const response =await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.json('Usuario atualizado com sucesso');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [id]);
    res.json(`Usario ${id} deletado com Sucesso`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}