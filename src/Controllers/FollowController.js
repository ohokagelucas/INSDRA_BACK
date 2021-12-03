const User = require('../Models/User')

module.exports = {
    async followUser(req, res) {
        const { user_id } = req.params
        const { user } = req.headers

        try {
            const followedUser = await User.findById(user_id)

            if (!followedUser) return res.status(400).send('User does not exist');

            if (user_id == user) return res.status(400).send('Cannot follow yourself');

            if (followedUser.follow.includes(user)) return res.status(400).send('User already follow');


            followedUser.follow.push(user)
            await followedUser.save()


            return res.status(200).send({
                message: 'User followed',
                followedUser
            })
        } catch (err) {
            return res.status(400).send(err)
        }
    },

    async unfollowUser(req, res) {
        const { user_id } = req.params
        const { user } = req.headers

        try {
            const unfollowedUser = await User.findById(user_id)

            if (!unfollowedUser) return res.status(400).send('User does not exist')

            if (!unfollowedUser.follow.includes(user)) return res.status(400).send('User not followed yet')

            unfollowedUser.follow.pull(user)
            await unfollowedUser.save()

            return res.status(200).send({
                message: 'User unfollowed',
                unfollowedUser
            })

        } catch (err) {
            return res.status(400).send(err)
        }
    }
}