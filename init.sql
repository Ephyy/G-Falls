
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE IF NOT EXISTS Users (
  id bigint NOT NULL PRIMARY KEY DEFAULT nextval('users_id_seq'),
  username text  NOT NULL UNIQUE,
  password text  NOT NULL,
  nombre text  NOT NULL,
  nombre_completo text NOT NULL,
  iniciales varchar NOT NULL,
  cargo text  NOT NULL,
  avatar text
);

CREATE TABLE IF NOT EXISTS Sessions (
  id TEXT PRIMARY KEY,
  expires_at TIMESTAMPTZ NOT NULL,
  user_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Testing Data
INSERT INTO Users (username, password, nombre, nombre_completo, iniciales, cargo, avatar)  
VALUES ('admin', 'admin', 'admin', 'admin', 'AD', 'administrador' ,'https://i.pinimg.com/736x/a7/ba/9e/a7ba9e0929f4215c00b13538b5928f33.jpg');
INSERT INTO Users (username, password, nombre, nombre_completo, iniciales, cargo)
VALUES ('ephy', 'ephy', 'Ephy', 'Ardiles Silva, Vicente Alejandro', 'VA', 'estudiante');


