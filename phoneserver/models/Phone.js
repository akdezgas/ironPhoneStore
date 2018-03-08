const mongoose = require ("mongoose");
const phoneSchema = new mongoose.Schema({  
    brand: {type: String},
    name: {
      type: String},
    image: {type: String, default: ''},
    specs: {
      type: Array,
      default: []
    }
  });
  
  const Phone = mongoose.model('Phone', phoneSchema);
  
  module.exports = Phone;