import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('sessions').del();
  await knex('users').del();


  // Path to the CSV file
  const csvFilePath = path.join(__dirname, '..', 'data', 'users.csv');

  // Function to read CSV file and return data as an array of objects
  const readCSV = (filePath) => {
    return new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (err) => reject(err));
    });
  };

  // Read the CSV file
  const users = await readCSV(csvFilePath);


  // Insert seed entries for Users
  await knex('users').insert(users);

  console.log('Seed data inserted successfully');
}