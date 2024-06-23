const express = require('express');
const { createUser, getUserById, getAllUsers, updateUser, softDeleteUser } = require('../controllers/userController');
const { userValidationRules, validate } = require('../middlewares/validationMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/worko/user', getAllUsers);
router.get('/worko/user/:userId', getUserById);
router.post('/worko/user', userValidationRules(), validate, createUser);
router.put('/worko/user/:userId', userValidationRules(), validate, updateUser);
router.patch('/worko/user/:userId', userValidationRules(), validate, updateUser);
router.delete('/worko/user/:userId', softDeleteUser);

module.exports = router;
