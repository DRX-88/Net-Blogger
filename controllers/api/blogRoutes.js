const router = require('express').Router();
const { Blogs } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blogs.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
}
);

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedBlog = await Blogs.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedBlog[0]) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
}
);

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedBlog = await Blogs.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedBlog) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(deletedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
}
);

module.exports = router;