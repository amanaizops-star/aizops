// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     message: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Contact", contactSchema);




const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: [true, 'Name is required'],
            trim: true 
        },
        email: { 
            type: String, 
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
        },
        phone: { 
            type: String, 
            required: [true, 'Phone number is required'],
            trim: true 
        },
        message: { 
            type: String, 
            required: [true, 'Message is required'],
            trim: true 
        },
    },
    { 
        timestamps: true // This adds createdAt and updatedAt automatically
    }
);

module.exports = mongoose.model("Contact", contactSchema);