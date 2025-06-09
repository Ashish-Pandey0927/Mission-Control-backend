const Mission = require('../models/Mission');

exports.createMission = async (req, res) => {
    const mission = new Mission(req.body);
    await mission.save();
    res.status(201).json(mission);
};

exports.getAllMissions = async (req, res ) => {
    const missions = await Mission.find();
    res.json(missions);
};

exports.getMissionById = async (req, res) => {
    const mission = await Mission.findById(req.params.id);
    res.json(mission);
}