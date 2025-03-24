const mongoose = require("mongoose");

const uri = "mongodb+srv://muryloferreira042:<nmtTEbFWvsWSTOce>@cluster0.mtv74.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao MongoDB Atlas!");
}).catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
});

module.exports = mongoose;
