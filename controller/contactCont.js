//@desc get all contact
//@route GET /api/contacts
const getContact = (req,res)=>{
    res.status(200).json({message:"Get all Contacts"})
}


//@desc Get one contact
//@route get /api/contacts/id

const getOneContact = (req,res)=>{
    res.status(200).json({message:`Contact ${req.params.id}`})
}

//@desc create all contact
//@route post /api/contacts
const createContact = (req,res)=>{
    console.log("The request is" , req.body)
    res.status(200).json({message:"New Contact Created"})
}

//@desc update all contact
//@route put /api/contacts/id
const updateContact = (req,res)=>{
    res.status(200).json({message:`Contact Updated ${req.params.id}`})
}

//@desc delete all contact
//@route delete /api/contacts/id
const deleteContact = (req,res)=>{
    res.status(200).json({message:`Contact Deleted ${req.params.id}`})
}
module.exports = {getContact,createContact,updateContact,deleteContact,getOneContact}

