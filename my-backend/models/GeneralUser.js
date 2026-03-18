// ;


// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const validator = require('validator');

// const generalUserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'Name is required'],
//         trim: true,
//         minlength: [2, 'Name must be at least 2 characters'],
//         maxlength: [50, 'Name cannot exceed 50 characters']
//     },
//     contact: {
//         type: String,
//         required: [true, 'Contact is required'],
//         unique: true,
//         trim: true,
//         lowercase: true,
//         validate: {
//             validator: function(v) {
//                 return validator.isEmail(v) || validator.isMobilePhone(v, 'any');
//             },
//             message: 'Please provide a valid email or phone number'
//         }
//     },
//     firstName: {
//         type: String,
//         trim: true
//     },
//     lastName: {
//         type: String,
//         trim: true
//     },
//     emailId: {
//         type: String,
//         trim: true,
//         lowercase: true
//     },
//     mobileNo: {
//         type: String,
//         trim: true
//     },
//     countryCode: {
//         type: String,
//         default: '+91'
//     },
//     dob: {
//         type: Date
//     },
//     gender: {
//         type: String,
//         enum: ['Male', 'Female', 'Other', '']
//     },
//     password: {
//         type: String,
//         required: [true, 'Password is required'],
//         minlength: [6, 'Password must be at least 6 characters'],
//         select: false
//     },
//     role: {
//         type: String,
//         enum: ['user', 'admin'],
//         default: 'user'
//     },
//     isActive: {
//         type: Boolean,
//         default: true
//     },
//     lastLogin: {
//         type: Date
//     },
//     resetPasswordToken: String,
//     resetPasswordExpire: Date
// }, {
//     timestamps: true
// });

// // ✅ FIX 1: Remove async keyword - use regular function with promise
// generalUserSchema.pre('save', function(next) {
//     // Only hash if password is modified
//     if (!this.isModified('password')) {
//         return next();
//     }
    
//     console.log('🔐 Hashing password for user:', this.emailId || this.contact);
    
//     // Use bcrypt with promises properly
//     bcrypt.genSalt(10)
//         .then(salt => bcrypt.hash(this.password, salt))
//         .then(hashedPassword => {
//             this.password = hashedPassword;
//             console.log('✅ Password hashed successfully');
//             next();
//         })
//         .catch(error => {
//             console.error('❌ Error hashing password:', error);
//             next(error);
//         });
// });

// // Compare password method
// generalUserSchema.methods.comparePassword = async function(enteredPassword) {
//     try {
//         return await bcrypt.compare(enteredPassword, this.password);
//     } catch (error) {
//         console.error('❌ Error comparing password:', error);
//         return false;
//     }
// };

// // Remove sensitive data when converting to JSON
// generalUserSchema.methods.toJSON = function() {
//     const user = this.toObject();
//     delete user.password;
//     delete user.__v;
//     delete user.resetPasswordToken;
//     delete user.resetPasswordExpire;
//     return user;
// };

// const GeneralUser = mongoose.models.GeneralUser || mongoose.model('GeneralUser', generalUserSchema);
// module.exports = GeneralUser;


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const generalUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    contact: {
        type: String,
        required: [true, 'Contact is required'],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return validator.isEmail(v) || validator.isMobilePhone(v, 'any');
            },
            message: 'Please provide a valid email or phone number'
        }
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    emailId: {
        type: String,
        trim: true,
        lowercase: true
    },
    mobileNo: {
        type: String,
        trim: true
    },
    countryCode: {
        type: String,
        default: '+91'
    },
    dob: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other', '']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, {
    timestamps: true
});

generalUserSchema.pre('save', async function() {
    if (!this.isModified('password')) return;

    console.log('🔐 Hashing password for user:', this.emailId || this.contact);

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    console.log('✅ Password hashed successfully');
});

generalUserSchema.methods.comparePassword = async function(enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
    } catch (error) {
        console.error('❌ Error comparing password:', error);
        return false;
    }
};

generalUserSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password;
    delete user.__v;
    delete user.resetPasswordToken;
    delete user.resetPasswordExpire;
    return user;
};

const GeneralUser = mongoose.models.GeneralUser || mongoose.model('GeneralUser', generalUserSchema);
module.exports = GeneralUser;