// smitdhameliya
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://adminsmit:AdminSmit@cluster0.6qawk.mongodb.net/ReshamDhaaga", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("connection success...")).catch((error) => console.log(error))
