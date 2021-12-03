const { Router } = require('express')
const UserController = require('../Controllers/UserController')
const LoginController = require('../Controllers/LoginController')
const PostController = require('../Controllers/PostController')
const ProfileController = require('../Controllers/ProfileController')
const LikeController = require('../Controllers/LikeController')
const ComentarioController = require('../Controllers/ComentarioController')
const FollowController = require('../Controllers/FollowController')

const router = Router()

router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)

router.post('/login', LoginController.login)

router.post('/posts', PostController.createPost)
router.get('/posts', PostController.listAllPosts)
router.delete('/posts/:post_id', PostController.deletePost)
router.put('/posts/:post_id', PostController.editPost)

router.get('/users/:user_id', ProfileController.getProfile)

router.post('/posts/:post_id/like', LikeController.likePost)
router.post('/posts/:post_id/dislike', LikeController.dislikePost)

router.post('/posts/:post_id/comentar', ComentarioController.comentarPost)

router.post('/users/:user_id/follow', FollowController.followUser)
router.post('/users/:user_id/unfollow', FollowController.unfollowUser)

module.exports = router