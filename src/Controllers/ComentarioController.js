const Post = require('../Models/Post')

module.exports = {
    async comentarPost(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers
        const { comentario } = req.body
        
        try {
                    
            const comentedPost = await Post.findById(post_id)
         
            if (!comentedPost) return res.status(400).send('Post does not exist')
            console.log("aqui4")
            
            comentedPost.comentario.push(comentario)
            comentedPost.comentarioId.push(user_id)
                        
            await comentedPost.save()
            
            console.log( comentario )
                        
            return res.status(200).send({
                message: 'Post comentado',
                comentedPost
            });
            
        } catch (err) {
            return res.status(400).send(err)
        }
    }
}