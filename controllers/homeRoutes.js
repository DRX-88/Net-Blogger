const router = require('express').Router();
const { Blogs, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
}
);

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('dashboard', {
      blogs,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
}
);

// router.post('/blogPosts', withAuth, async (req, res) => {
//   try {
//     const newBlog = await Blogs.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newBlog);
//   }
//   catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blogs }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
}
);


router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blogs.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render('blogs', {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
}
);

// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       include: [
//         {
//           model: Blogs,
//         },
//       ],
//     });

//     const user = userData.get({ plain: true });

//     res.render('dashboard', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }
// );

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
}
);

module.exports = router;