const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for database document structure
const DataSchema = new Schema({
    id: Number,
    message: String
},
{ timestamps: true }
)

// export the new Schema 
module.exports = mongoose.model("Data", DataSchema);