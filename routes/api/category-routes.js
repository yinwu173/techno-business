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
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
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
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
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

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData[0]) {
      res.status(404).json({ message: 'No location found with this id.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json({ message: 'Error updating the category.' })
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No location found with this id.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json({ message: 'Error deleting the category.' })
  }
});

module.exports = router;
