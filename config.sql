
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE IF NOT EXISTS Users (
  id bigint NOT NULL DEFAULT nextval('users_id_seq') PRIMARY KEY,
  username text UNIQUE NOT NULL,
  password text NOT NULL,
  name text NOT NULL,
  seccion smallint NOT NULL,
  foto text NOT NULL DEFAULT 'https://static.u-cursos.cl/images/avatar.jpg'
);

INSERT INTO Users (username, password, name, seccion) VALUES ('admin', 'admin', 'Admin', 0);
INSERT INTO Users (username, password, name, seccion, foto) VALUES ('cinna', 'cinna', 'Cinnamoroll', 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzl57p1CTvogfeCjXsNNFI5j9H_8qfiScbw&s');
