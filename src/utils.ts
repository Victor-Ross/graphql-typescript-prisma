import { client } from '../database/db';

client.connect();


const createUserTable = async () => {
  const query = `
    create table users (
      id int primary key,
      name varchar,
      email varchar,
      password varchar
    );
  `;

  try {
      const res = await client.query(query);
      console.log("Table has been created successfully");
  } catch (error) {
      console.log(error);
  } finally {
      client.end();
  }
}

const listTables = async () => {
  const query = `
    select table_name 
    from information_schema.tables
    where table_schema = 'public'
    order by table_name
  `;

  try {
      const res = await client.query(query);
  } catch (error) {
      console.log(error);
  } finally {
      client.end();
  }
}

const addUser = async (id: number, name: string, email: string, password: string) => {
  const query = {
    text: 'insert into users(id, name, email, password) values($1, $2, $3, $4)',
    values: [id, name, email, password]
  }

  try {
      const res = await client.query(query);
      console.log(res.rows);
  } catch (error) {
      console.log(error);
  } finally {
      client.end();
  }
}

const getUsers = async () => {
  const query = `
    select * from users
  `;

  try {
      const res = await client.query(query);
      return res.rows;
  } catch(error) {
      console.log(error);
  } finally {
      client.end();
  }
}

export { createUserTable, listTables, addUser, getUsers };