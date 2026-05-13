import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Ensure absolute path resolution regardless of invocation directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = process.env.DB_PATH || path.join(__dirname, 'contacts.db');

// Initialize SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log(`Connected to SQLite database at ${dbPath}`);
    // Create the messages table if it doesn't exist
    db.run(
      `CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => {
        if (err) {
          console.error('Error creating messages table:', err.message);
        } else {
          console.log('Messages table ready.');
        }
      }
    );
  }
});

// Helper function to insert a new message using Promises
export const saveContactMessage = (name, email, message) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;
    db.run(sql, [name, email, message], function (err) {
      if (err) {
        return reject(err);
      }
      resolve({
        id: this.lastID,
        name,
        email,
        message,
        createdAt: new Date().toISOString()
      });
    });
  });
};

// Helper function to fetch all stored inquiries
export const getContactMessages = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM messages ORDER BY id DESC`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

export default db;
