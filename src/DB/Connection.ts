import { connect } from "mongoose";
import { URI } from "../Config/conf";

export const dbConnection = async () => {
    try {
        if (URI) {
            await connect(URI);
            console.log('🟢 Conexión a la base de datos exitosa 🥸 👌');
        }
    } catch (err) {
        console.log('🔴 Error al conectar la base de datos ', err);
        process.exit();
    }
}