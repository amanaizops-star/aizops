const Contact = require("../models/Contact");


exports.submitContact = async (req, res) => {
    try {
        console.log('📝 Contact form submission received');
        console.log('Request body:', req.body);

        if (!req.body) {
            return res.status(400).json({ 
                success: false, 
                message: "Request body is empty. Please send JSON data with Content-Type: application/json" 
            });
        }

        if (Array.isArray(req.body)) {
            return res.status(400).json({ 
                success: false, 
                message: "Invalid format. Please send a single contact object, not an array.",
                example: {
                    name: "John Doe",
                    email: "john@example.com", 
                    phone: "1234567890",
                    message: "Your message here"
                }
            });
        }

        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ 
                success: false, 
                message: "All fields are required.",
                required: ["name", "email", "phone", "message"],
                received: { name, email, phone, message }
            });
        }

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address"
            });
        }

        const newContact = await Contact.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            message: message.trim(),
        });

        console.log('✅ Contact saved successfully. ID:', newContact._id);

        res.status(201).json({
            success: true,
            message: "Your message has been received. Thank you!",
            data: {
                id: newContact._id,
                name: newContact.name,
                email: newContact.email,
                phone: newContact.phone,
                message: newContact.message,
                createdAt: newContact.createdAt
            },
        });

    } catch (error) {
        console.error("❌ Error saving contact:", error);
        
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Duplicate entry'
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};


exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.error("❌ Error fetching contacts:", error);
        res.status(500).json({
            success: false,
            message: "Server error. Please try again later."
        });
    }
};