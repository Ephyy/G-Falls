
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE IF NOT EXISTS Users (
  id bigint NOT NULL DEFAULT nextval('users_id_seq') PRIMARY KEY,
  username text NOT NULL,
  password text NOT NULL
);

CREATE TABLE IF NOT EXISTS user_info (
  user_id bigint NOT NULL,
  nombre text NOT NULL,
  nombre_completo text NOT NULL,
  iniciales varchar NOT NULL,
  cargo text NOT NULL,
  avatar text,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);



CREATE TABLE IF NOT EXISTS Sessions (
  id TEXT PRIMARY KEY,
  expires_at TIMESTAMPTZ NOT NULL,
  user_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Testing Data
INSERT INTO Users (username, password) VALUES ('admin', 'admin');
INSERT INTO Users (username, password) VALUES ('ephy', 'ephy');


INSERT INTO user_info (user_id, nombre, nombre_completo, iniciales, cargo, avatar) 
VALUES (1, 'admin', 'admin', 'AD', 'administrador', 'https://i.pinimg.com/736x/a7/ba/9e/a7ba9e0929f4215c00b13538b5928f33.jpg');

INSERT INTO user_info (user_id, nombre, nombre_completo, iniciales, cargo) 
VALUES (2, 'Ephy', 'Ardiles Silva, Vicente Alejandro', 'VA', 'estudiante');

