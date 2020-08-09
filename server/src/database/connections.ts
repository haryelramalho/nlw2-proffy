import knex from 'knex'
import path from 'path'

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite') //__dirname == Database/
  },
  useNullAsDefault: true, //Usar NULL nos campos não definidos
});

export default db;