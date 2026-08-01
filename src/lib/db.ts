import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { blogs as initialBlogs } from './data/blog';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'altruva_cms',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

let initialized = false;

export async function initializeDatabase() {
  if (initialized) return pool;
  
  try {
    // 1. Create blogs table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        excerpt TEXT,
        content LONGTEXT,
        image_src VARCHAR(255),
        image_hint VARCHAR(255),
        date VARCHAR(100),
        keywords JSON,
        view_count INT DEFAULT 0,
        unique_view_count INT DEFAULT 0,
        author VARCHAR(255) DEFAULT 'Altruva Aesthetic Clinic',
        reviewed_by VARCHAR(255) DEFAULT 'dr. Olivia Aldisa',
        status ENUM('published', 'draft') DEFAULT 'published',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // 1b. Add view_count column to existing blogs table if it doesn't exist
    try {
      await pool.query(`ALTER TABLE blogs ADD COLUMN view_count INT DEFAULT 0`);
    } catch (_) {
      // Column already exists — ignore
    }

    // 1c. Create page_views table for daily analytics
    await pool.query(`
      CREATE TABLE IF NOT EXISTS page_views (
        id INT AUTO_INCREMENT PRIMARY KEY,
        slug VARCHAR(255) NOT NULL,
        ip_address VARCHAR(45),
        viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_slug (slug),
        INDEX idx_viewed_at (viewed_at),
        INDEX idx_ip_slug (ip_address, slug)
      )
    `);

    // 1d. Add ip_address column to existing page_views if missing
    try {
      await pool.query(`ALTER TABLE page_views ADD COLUMN ip_address VARCHAR(45) AFTER slug`);
    } catch (_) { /* already exists */ }

    // 1e. Add unique_view_count column to blogs if missing
    try {
      await pool.query(`ALTER TABLE blogs ADD COLUMN unique_view_count INT DEFAULT 0`);
    } catch (_) { /* already exists */ }

    // 1f. Add author column to blogs if missing
    try {
      await pool.query(`ALTER TABLE blogs ADD COLUMN author VARCHAR(255) DEFAULT 'Altruva Aesthetic Clinic'`);
    } catch (_) { /* already exists */ }

    // 1g. Add reviewed_by column to blogs if missing
    try {
      await pool.query(`ALTER TABLE blogs ADD COLUMN reviewed_by VARCHAR(255) DEFAULT 'dr. Olivia Aldisa'`);
    } catch (_) { /* already exists */ }

    // 1h. Add status column to blogs if missing
    try {
      await pool.query(`ALTER TABLE blogs ADD COLUMN status ENUM('published', 'draft') DEFAULT 'published'`);
    } catch (_) { /* already exists */ }



    // 2. Create users table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 2b. Create leads table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 2c. Create appointments table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS appointments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        treatment VARCHAR(500) NOT NULL,
        preferred_date DATE NOT NULL,
        preferred_time VARCHAR(50) NOT NULL,
        notes TEXT,
        status ENUM('pending','confirmed','cancelled') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // 2d. Add status column to existing appointments table if missing
    try {
      await pool.query(`ALTER TABLE appointments ADD COLUMN status ENUM('pending','confirmed','cancelled') DEFAULT 'pending' AFTER notes`);
    } catch (_) { /* already exists */ }

    // 3. Seed initial blog articles if empty
    const [blogRows]: any = await pool.query('SELECT COUNT(*) as count FROM blogs');
    const blogCount = blogRows[0]?.count || 0;

    if (blogCount === 0) {
      console.log('Blogs table is empty. Seeding initial articles...');
      for (const blog of initialBlogs) {
        await pool.query(
          `INSERT INTO blogs (slug, title, excerpt, content, image_src, image_hint, date, keywords) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            blog.id,
            blog.title,
            blog.excerpt,
            blog.content || '',
            blog.imageSrc,
            blog.imageHint,
            blog.date,
            JSON.stringify(blog.keywords || []),
          ]
        );
      }
      console.log(`Successfully seeded ${initialBlogs.length} blog posts into the database!`);
    }

    // 4. Seed initial admin user if empty
    const [userRows]: any = await pool.query('SELECT COUNT(*) as count FROM users');
    const userCount = userRows[0]?.count || 0;

    if (userCount === 0) {
      console.log('Users table is empty. Seeding default admin user...');
      const adminUsername = process.env.CMS_ADMIN_USERNAME || 'admin';
      const adminPassword = process.env.CMS_ADMIN_PASSWORD || 'adminaltruva123';
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      
      await pool.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [adminUsername, hashedPassword]
      );
      console.log(`Successfully seeded default admin user "${adminUsername}" into database!`);
    }
    
    initialized = true;
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
  
  return pool;
}

// Automatically trigger database initialization on load
initializeDatabase();

export default pool;
