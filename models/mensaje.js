const { Schema, model } = require('mongoose');

const MensajeSchema = Schema({

    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    mensaje: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

MensajeSchema.method('toJSON', function () {
    const { __v, ...data } = this.toObject();
    return data
});

module.exports = model('Mensaje', MensajeSchema)