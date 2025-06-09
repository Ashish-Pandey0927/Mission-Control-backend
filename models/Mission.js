const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, enum: ['active', 'completed'], default: 'active'},
    deadline: Date,
    logs: [String],
});

module.exports = mongoose.model('Mission', MissionSchema);