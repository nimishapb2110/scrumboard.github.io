const mongoose = require('mongoose');

const SbItemSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    storyPoints: { type: String, default: "" },
    issueType: {
                name: {  type: String, required: true },
                code: { type: String, required: true }
               }, 
    category: { type: String, default: "" }
});

module.exports = mongoose.model('ScrumBoardModel', SbItemSchema);
