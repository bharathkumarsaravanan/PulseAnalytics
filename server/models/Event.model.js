const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    type: { type: String, required: true },
    element: { type: String, required: true },
    page: { type: String, required: true },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

module.exports = Event;