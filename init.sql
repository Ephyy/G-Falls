
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE IF NOT EXISTS Users (
  id int NOT NULL DEFAULT nextval('users_id_seq') PRIMARY KEY,
  username text UNIQUE NOT NULL,
  password text NOT NULL,
  name text NOT NULL,
  seccion smallint NOT NULL,
  photo text NOT NULL DEFAULT 'https://static.u-cursos.cl/images/avatar.jpg'
);


CREATE TABLE IF NOT EXISTS Sessions (
  id TEXT PRIMARY KEY,
  expires_at TIMESTAMPTZ NOT NULL,
  user_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Testing Data
INSERT INTO Users (username, password, name, seccion) VALUES ('admin', 'admin', 'Admin', 0);
