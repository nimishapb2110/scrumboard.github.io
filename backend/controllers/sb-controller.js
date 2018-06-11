const SbItemModel = require("../models/sb-model");

exports.getSbItems = (req, res, next) => {
    SbItemModel.find().then(documents => {
        res.status(200).json({
            message: "Scrum board items fetched successfully!",
            sbitems: documents
        });
    }).catch(error => {
        res.status(500).json({
          message: "Fetching scrum board items failed!"
        });
    });
};

exports.createSbItem = (req, res, next) => {
    const sbItemToAdd = new SbItemModel(req.body);
    console.log(sbItemToAdd);
    sbItemToAdd.save().then(createdSbItem => {
        res.status(201).json({
           message: "Scrum board item added successfully!",
           itemId: createdSbItem._id
        });
    }).catch(error => {
        res.status(500).json({
          message: "Add scrum board item failed!"
        });
    });
};

exports.updateSbItem = (req, res, next) => {
    const sbItemToEdit = new SbItemModel(req.body);
    SbItemModel.updateOne({ _id: req.params.id }, sbItemToEdit).then(result => {
        res.status(200).json({ message: "Scrum board item updated successfully!" });
    }).catch(error => {
        res.status(500).json({
          message: "Update scrum board item failed!"
        });
    });
};

exports.deleteSbItem = (req, res, next) => {
    SbItemModel.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Scrum board item deleted successfully!" });
    }).catch(error => {
        res.status(500).json({
            message: "Delete scrum board item failed!"
        });
    });
};