/***************************************************
 * controllers/messages.controller.js
 ***************************************************/

// Función para obtener todos los mensajes
function getAllMessages(req, res) {
    // Ejemplo mínimo (en un caso real, buscarías en tu DB)
    const mensajes = [
      { id: 1, texto: 'Hola, mundo!' },
      { id: 2, texto: 'Este es otro mensaje' },
    ];
    res.json(mensajes);
  }
  
  // Función para crear un nuevo mensaje
  function createMessage(req, res) {
    // Supongamos que el texto del mensaje viene en req.body.texto
    const { texto } = req.body;
  
    const nuevoMensaje = {
      id: Date.now(), // ID ficticio
      texto,
    };
  
    // En un proyecto real, aquí lo guardarías en la base de datos
    res.status(201).json({
      message: 'Mensaje creado con éxito',
      data: nuevoMensaje,
    });
  }
  
  // Función para obtener un mensaje específico por su ID
  function getMessageById(req, res) {
    const { id } = req.params;
  
    // Ejemplo: buscar en tu DB o en un array
    const mensajeEncontrado = { id, texto: 'Mensaje de ejemplo' };
  
    if (!mensajeEncontrado) {
      return res.status(404).json({ error: 'Mensaje no encontrado' });
    }
  
    res.json(mensajeEncontrado);
  }
  
  // Función para actualizar un mensaje
  function updateMessage(req, res) {
    const { id } = req.params;
    const { texto } = req.body;
  
    // Ejemplo de actualización
    const mensajeActualizado = { id, texto };
  
    // Guardar los cambios en tu DB sería el siguiente paso
    res.json({
      message: 'Mensaje actualizado con éxito',
      data: mensajeActualizado,
    });
  }
  
  // Función para eliminar un mensaje
  function deleteMessage(req, res) {
    const { id } = req.params;
  
    // Ejemplo: eliminar de la DB
    res.json({
      message: `Mensaje con id ${id} eliminado con éxito`,
    });
  }
  
  // Exportamos las funciones como un objeto
  module.exports = {
    getAllMessages,
    createMessage,
    getMessageById,
    updateMessage,
    deleteMessage,
  };
  