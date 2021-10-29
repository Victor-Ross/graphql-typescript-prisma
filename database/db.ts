import { Client } from 'pg';


const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT)
});

export { client };


// const users = [
//   {
//     name: 'Victor Ross',
//     email: 'victor2ross@gmail.com',
//     projects: [{ title: 'Site Upgrade - Summer 2021' }]
//   },
//   {
//     name: 'Amili Maura',
//     email: 'amili@gmail.com',
//     projects: [{ title: 'Site Upgrade - Summer 2021' }]
//   }
// ]


// export { users };