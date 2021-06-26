const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;


const UserSchema = new mongoose.Schema({
  username : { type : String, unique : true },
  avata : { type : String , 'default' : 'avtar.jpg' },
  address : String,
  email : { type : String, unique : true },
  password : String,
  phone : { type : String, unique : true },
  role : Number,
  status : Number,
  wish_list : [
    {
      product_id : { type: ObjectId, ref : 'Product'}
    }
  ],
  notification : [
    { content : String }
  ],
  createdOn: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('User', UserSchema);