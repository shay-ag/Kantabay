import mongoose from "mongoose";

const maidSchema = mongoose.Schema( 
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true 
        },
        description: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        },
        expected_salary: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        available: {
            type: Boolean,
            required: true
        }

    }, 
    {
        timestamps: true
    }
);

const Maid = mongoose.model('Maid', maidSchema);

export default Maid;