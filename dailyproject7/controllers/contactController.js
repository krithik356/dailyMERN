import Contact from "../models/contactModel.js";
import asyncHandler from "../middleware/asynhandler.js";

export const createContact = asyncHandler(async (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const contact = await Contact.create({
        name,
        email,
        message
    });

    res.status(200).json({
        message: "Contact created successfully",
        contact
    });
});

export const getContacts = asyncHandler(async (req, res, next) => {
    const contacts = await Contact.find();

    res.status(200).json({
        message: "Contacts fetched successfully",
        contacts
    });
}); 

export const deleteContact = asyncHandler(async (req, res, next) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }
        
    res.status(200).json({
        message: "Contact deleted successfully"
    });
});

export const updateContact = asyncHandler(async (req, res, next) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true , runValidators: true});

    if (!contact) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }

    res.status(200).json({
        message: "Contact updated successfully",
        contact
    });
    
    
});