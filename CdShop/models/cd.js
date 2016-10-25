var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cdSchema = new Schema({
    
       id : {type : Number, index:true, unique:true},
       title: {type : String, index:true},
       artist: String,
       price: Number
})

cdSchema.methods.dudify = function()
{
    this.title = this.title + ' dude!'
    return this.title;
};


var CD = mongoose.model('CD', cdSchema);
module.exports = CD;