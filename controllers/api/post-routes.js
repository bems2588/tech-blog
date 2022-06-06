const router = require('express').Router();
const { Post } = require('../../models');


router.post('/', async (req, res) => {
  console.log("post", req.body)
  try {
    if (req.session) {
      const dbPostData = await Post.create({
        username: req.session.username,
        user_id: req.session.email,
        content: req.body.content,
      });
      console.log(dbPostData);
      res.status(200).json(dbPostData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;