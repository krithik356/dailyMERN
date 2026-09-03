import { createContact, getContacts,deleteContact,updateContact} from "../controllers/contactController.js";
import express from "express";
const router = express.Router();

router.post("/contact", createContact);
router.get("/contact", getContacts);
router.delete("/contact/:id", deleteContact);
router.put("/contact/:id", updateContact);

export default router;