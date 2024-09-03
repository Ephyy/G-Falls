
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE IF NOT EXISTS Users (
  id bigint NOT NULL DEFAULT nextval('users_id_seq') PRIMARY KEY,
  name text UNIQUE NOT NULL,
  password text NOT NULL,
  seccion smallint NOT NULL,
  foto text NOT NULL DEFAULT 'https://static.u-cursos.cl/images/avatar.jpg'
);

INSERT INTO Users (name, password, seccion) VALUES ('admin', 'admin', 0);