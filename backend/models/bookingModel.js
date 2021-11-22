import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    bookingMaid: {
        name: { type: String, required: true},
        image: {type: String, required: true},
        maid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Maid'
        }
    }, 
    shippingAddress: {
        address: { type: String, required: true},
        city: { type: String, required: true},
        postalCode: { type: String, required: true},
        country: { type: String, required: true}
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String}
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    bookedAt: {
        type: Date
    }
}, {
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;