-- Create subscriptions table used by the scraper worker
CREATE TABLE IF NOT EXISTS subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  target_url TEXT NOT NULL,
  created_at DATETIME DEFAULT (datetime('now'))
);

-- Example seed data for local testing
INSERT INTO subscriptions (email, target_url) VALUES
('alice@example.com', 'https://www.example.com/cars-for-sale?page=1'),
('bob@example.com', 'https://www.example.com/cars-for-sale?page=2');
