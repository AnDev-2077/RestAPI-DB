//creando el servicio
const databaseService = () => {
    const knex = require('knex')({
        client: 'mysql2',
        connection: {
        host : process.env.DB_HOST,
        port : 27687,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB,
    }
  });

  const table = 'asistencia';


  const leerAsistencia = () => {
    return knex(table).select();
  };

  const marcarAsistencia = (idAlumno, idestado) =>{
    return knex(table)
    .insert({
      idAlumno: idAlumno,
      idestado: idestado
    }); //retorna una promesa
  };

  const marcAttendance = (idAlumno, idestado) => {
     return knex(table)
    .where({
      idAlumno: idAlumno
    })
    .update({
      idestado: idestado
    });
  };

  return {
    marcarAsistencia,
    leerAsistencia,
    marcAttendance
  }
};

module.exports = {
  databaseService,
};


module.exports;
