const Minion = require('../models/minionModel');

exports.getMinions = async (req, res) => {
  try {
    const minions = await Minion.find().sort({ createdAt: -1 });
    res.status(200).json(minions);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createMinion = async (req, res) => {
  const minion = new Minion({
    name: req.body.name,
    age: req.body.age,
    color: req.body.color,
  });
  try {
    const createdMinion = await minion.save();
    res.status(201).json(createdMinion);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateMinion = async (req, res) => {
  try {
    const updateMinion = await Minion.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateMinion);
  } catch (error) {
    res.status(500), json(error);
  }
};

exports.deleteMinion = async (req, res) => {
  try {
    await Minion.findByIdAndDelete(req.params.id);
    res.status(200).json('Minion deleted');
  } catch (error) {
    res.status(500).json(err);
  }
};
