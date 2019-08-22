BEGIN;

DROP TABLE IF EXISTS book,author;



CREATE TABLE author(
  id SERIAL PRIMARY KEY NOT NULL,
  author_name VARCHAR(255) 
);
CREATE TABLE book(
  id SERIAL PRIMARY KEY NOT NULL,
  book_name VARCHAR(255) NOT NULL,
  author_id INTEGER REFERENCES author (id),
  release_date DATE ,
  date_of_add DATE DEFAULT CURRENT_TIMESTAMP,
  is_available BOOLEAN DEFAULT 'true',
  category VARCHAR(255),
  book_description VARCHAR(255)
);
INSERT INTO author (author_name) VALUES ('fadi');
INSERT INTO book (book_name,author_id,release_date,date_of_add,category,book_description)
 VALUES ('JAVA',1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'computer sience','a good book in java');
INSERT INTO book (book_name,author_id,release_date,date_of_add,category,is_available,book_description)
 VALUES ('C++',1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'computer sience',false,'Introduction to C++');

COMMIT;