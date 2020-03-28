class API{

    async obtenerDatos(){

        const total=1000;
        //Obtener los datos desde la API
        const datos=await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        const respuestaJSON= await datos.json();

        return {
            respuestaJSON
        }
    }
}