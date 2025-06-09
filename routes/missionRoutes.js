const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createMission, getAllMissions, getMissionById } = require("../controllers/missionController");


router.post('/', auth, createMission);
router.get('/', auth, getAllMissions);
router.get('/:id', auth, getMissionById);

module.exports = router;