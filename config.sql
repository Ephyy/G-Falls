
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE IF NOT EXISTS User (
  id int NOT NULL DEFAULT nextval('users_id_seq') PRIMARY KEY,
  username text UNIQUE NOT NULL,
  password text NOT NULL,
  name text NOT NULL,
  seccion smallint NOT NULL,
  foto text NOT NULL DEFAULT 'https://static.u-cursos.cl/images/avatar.jpg'
);


CREATE TABLE IF NOT EXISTS Sessions (
  id TEXT PRIMARY KEY,
  expires_at TIMESTAMPTZ NOT NULL,
  user_id int NOT NULL 
  FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Test Data
INSERT INTO User (username, password, name, seccion) VALUES ('admin', 'admin', 'Admin', 0);
INSERT INTO User (username, password, name, seccion, foto) VALUES ('cinna', 'cinna', 'Cinnamoroll', 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzl57p1CTvogfeCjXsNNFI5j9H_8qfiScbw&s');