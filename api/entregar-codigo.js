export default function handler(req, res) {
    // Solo permitimos peticiones POST de tu propia web
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { orderID } = req.body;

    // Si alguien intenta llamar a la API sin haber pagado (sin orderID), lo bloqueamos
    if (!orderID) {
        return res.status(400).json({ error: 'Falta el ID de la orden de PayPal' });
    }

    /* 
      Aquí es donde tu código está seguro. Nadie puede ver esta URL secreta.
      Más adelante podemos agregar una validación extra conectándonos a la API de PayPal, 
      pero por ahora, esto oculta tu archivo de los curiosos en el navegador.
    */
    const urlSecretaDescarga = "URL_DE_TU_ARCHIVO_ZIP_AQUI"; 

    // Le devolvemos la URL de descarga al navegador del comprador
    return res.status(200).json({ 
        success: true, 
        downloadUrl: urlSecretaDescarga 
    });
}
