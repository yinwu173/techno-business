const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Product,
        through: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({
      where: { id: req.params.id },

      include: [{
        model: Product,
        through: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No location found with this id.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve a category' });
  }
});


router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json({ message: 'Error creating a new category.' })
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
