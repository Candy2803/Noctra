/*
  # Create Products Table for 3D Printed Items E-commerce

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique identifier for each product
      - `name` (text) - Product name
      - `description` (text) - Detailed product description
      - `price` (numeric) - Product price in dollars
      - `image_url` (text) - URL to product image
      - `category` (text) - Product category (e.g., figurines, tools, decor)
      - `in_stock` (boolean) - Stock availability status
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (anyone can view products)
    - Only authenticated users with admin role could modify products (future implementation)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  category text NOT NULL,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

INSERT INTO products (name, description, price, image_url, category, in_stock) VALUES
  ('Dragon Figurine', 'Intricately detailed dragon figurine with articulated wings and poseable joints. Perfect for collectors and fantasy enthusiasts.', 29.99, 'https://images.pexels.com/photos/6069042/pexels-photo-6069042.jpeg?auto=compress&cs=tinysrgb&w=800', 'Figurines', true),
  ('Geometric Planter', 'Modern geometric planter perfect for succulents and small plants. Sleek design that fits any decor style.', 19.99, 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=800', 'Home Decor', true),
  ('Customizable Phone Stand', 'Adjustable phone stand with multiple viewing angles. Compatible with all smartphone sizes.', 14.99, 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800', 'Accessories', true),
  ('Miniature Chess Set', 'Compact travel chess set with magnetic pieces. Perfect for chess enthusiasts on the go.', 34.99, 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800', 'Games', true),
  ('Desk Organizer', 'Multi-compartment desk organizer to keep your workspace tidy. Includes sections for pens, clips, and accessories.', 24.99, 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800', 'Office', true),
  ('Robot Action Figure', 'Poseable robot figure with interchangeable parts. Great for display or play.', 22.99, 'https://images.pexels.com/photos/8294592/pexels-photo-8294592.jpeg?auto=compress&cs=tinysrgb&w=800', 'Figurines', true);