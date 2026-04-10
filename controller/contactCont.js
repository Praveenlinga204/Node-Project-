const asyncHandler = require("express-async-handler")
const Contact = require("../model/contactModel.js")

//@desc get all contact
//@route GET /api/contacts
const getContact = asyncHandler(async (req,res)=>{
    const contacts = await Contact.findById()
    res.status(200).json(contacts.toObject)
})


//@desc Get one contact
//@route get /api/contacts/id

const getOneContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
            res.status(404);
            throw new Error("Contact Not Found")
    }
    res.status(200).json(contact)
});

//@desc create all contact
//@route post /api/contacts
const createContact =asyncHandler(async (req,res)=>{
    console.log("The request is" , req.body)
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All the fields must be filled!")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(200).json(contact)
});

//@desc update all contact
//@route put /api/contacts/id
const updateContact =asyncHandler( async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
            res.status(404);
            throw new Error("Contact Not Found")
    }
    res.status(200).json(contact)

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact)
});

//@desc delete all contact
//@route delete /api/contacts/id
const deleteContact =asyncHandler( async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
            res.status(404);
            throw new Error("Contact Not Found")
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact)
})

module.exports = {getContact,createContact,updateContact,deleteContact,getOneContact}

