const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    online: {
        type: Boolean,
        default: false
    }
});

UsuarioSchema.method('toJSON', function () {
    const { __v, _id, password, ...data } = this.toObject();
    data.uid = _id;
    return data
});

module.exports = model('Usuario', UsuarioSchema)