const atenciones = require('./atenciones/dbatencion.json');
const autentificacion = require('./autentificacion/dbusuarios.json');
const diagnosticos = require('./diagnosticos/dbdiagnostico.json');
const pacientes = require('./pacientes/dbpacientes.json');
const pruebas = require('./pruebas/dbpruebas.json');
const resultados = require('./resultados/dbresultados.json');
const tratamientos = require('./resultados/dbtratamientos.json');
const transferencias = require('./transferencias/dbtransferencias.json');
// Something more

module.exports = () => ({
  atencion: atenciones,
  usuarios: autentificacion,
  diagnosticos: diagnosticos,
  pacientes: pacientes,
  pruebas: pruebas,
  resultados: resultados,
  tratamientos: tratamientos,
  transferencias:transferencias,
});