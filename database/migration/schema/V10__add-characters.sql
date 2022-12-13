CREATE TABLE characters (
    id uuid DEFAULT uuid_generate_v4(),
    display_name VARCHAR(32) NOT NULL,
    image_url TEXT DEFAULT '',
    PRIMARY KEY (id)
);

INSERT INTO characters (display_name) VALUES ('キャラ1');
INSERT INTO characters (display_name) VALUES ('キャラ2');
INSERT INTO characters (display_name) VALUES ('キャラ3');
INSERT INTO characters (display_name) VALUES ('キャラ4');
INSERT INTO characters (display_name) VALUES ('キャラ5');
INSERT INTO characters (display_name) VALUES ('キャラ6');
INSERT INTO characters (display_name) VALUES ('キャラ7');
INSERT INTO characters (display_name) VALUES ('キャラ8');
INSERT INTO characters (display_name) VALUES ('キャラ9');
INSERT INTO characters (display_name) VALUES ('キャラ10');