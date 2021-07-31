const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/index.controllers');

router.get('/users', getUsers);
//router.get('/users/:id', getUserById);
//router.post('/users', createUser);
//router.put('/users/:id', updateUser)
//router.delete('/users/:id', deleteUser);

module.exports = router; 
