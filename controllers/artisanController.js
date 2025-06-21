const Artisan = require('../models/Artisan');

exports.fetchArtisans = async (req, res) => {
  try {
    const { startPrice, endPrice, availablility } = req.body;

    const artisans = await Artisan.find({
      rate: { $gte: startPrice, $lte: endPrice },
      availability: { $in: availablility }
    }).select('name rate isNew jobsCompleted bio imageUrl');

    res.json({ artisans });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
