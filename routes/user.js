const {Router} = require('express');
const {userGet, postUser, putUser, patchUser, deleteUser } = require('../controllers/user');


const router = Router();

router.get('/', userGet)

router.put('/', putUser)

router.post('/', postUser)

router.patch('/', patchUser)

router.delete('/', deleteUser)



module.exports = router;