// // const mongoose = require('mongoose');

// // const customerSchema = new mongoose.Schema({
// //     firstName:   { type: String, required: true, trim: true },
// //     lastName:    { type: String, required: true, trim: true },
// //     email:       { type: String, required: true, unique: true, lowercase: true, trim: true },
// //     countryCode: { type: String, default: '+91' },
// //     mobileNo:    { type: String, required: true, trim: true },
// //     dob:         { type: Date,   required: true },
// //     gender:      { type: String, enum: ['Male', 'Female', 'Other'], required: true },
// //     password:    { type: String },          // set in step 2
// //     otp:         { type: String },
// //     otpExpires:  { type: Date },
// //     otpAttempts: { type: Number, default: 0 },
// //     isVerified:  { type: Boolean, default: false }
// // }, { timestamps: true });

// // module.exports = mongoose.model('Customer', customerSchema);


// // models/Customer.js
// const mongoose = require('mongoose');

// const customerSchema = new mongoose.Schema({
//     firstName: { 
//         type: String, 
//         required: true, 
//         trim: true 
//     },
//     lastName: { 
//         type: String, 
//         required: true, 
//         trim: true 
//     },
//     email: { 
//         type: String, 
//         required: true, 
//         unique: true, 
//         lowercase: true, 
//         trim: true 
//     },
//     countryCode: { 
//         type: String, 
//         default: '+91' 
//     },
//     mobileNo: { 
//         type: String, 
//         required: true, 
//         unique: true, 
//         trim: true 
//     },
//     dob: { 
//         type: Date, 
//         required: true 
//     },
//     gender: { 
//         type: String, 
//         enum: ['Male', 'Female', 'Other'], 
//         required: true 
//     },
//     password: { 
//         type: String 
//     },
//     otp: { 
//         type: String 
//     },
//     otpExpiry: { 
//         type: Date 
//     },
//     otpAttempts: { 
//         type: Number, 
//         default: 0 
//     },
//     isVerified: { 
//         type: Boolean, 
//         default: false 
//     },
//     verifiedAt: { 
//         type: Date 
//     }
// }, { 
//     timestamps: true 
// });

// // Create indexes for better performance
// customerSchema.index({ email: 1 });
// customerSchema.index({ mobileNo: 1 });

// const Customer = mongoose.model('Customer', customerSchema);

// module.exports = Customer;


const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true, 
        trim: true 
    },
    lastName: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true 
    },
    countryCode: { 
        type: String, 
        default: '+91' 
    },
    mobileNo: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    dob: { 
        type: Date, 
        required: true 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female', 'Other'], 
        required: true 
    },
    password: { 
        type: String 
    },
    // otp: { 
    //     type: String 
    // },
    // otpExpiry: { 
    //     type: Date 
    // },
    // otpAttempts: { 
    //     type: Number, 
    //     default: 0 
    // },
    isVerified: { 
        type: Boolean, 
        default: false 
    },
    verifiedAt: { 
        type: Date 
    },
    membershipId: {
        type: String,
        unique: true,
        sparse: true
    }
}, { 
    timestamps: true 
});

// Create indexes
customerSchema.index({ email: 1 });
customerSchema.index({ mobileNo: 1 });
customerSchema.index({ membershipId: 1 });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;