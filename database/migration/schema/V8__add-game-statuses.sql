CREATE TABLE game_statuses (
    id uuid DEFAULT uuid_generate_v4(),
    status_code VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO game_statuses (status_code) VALUES ('playing');
INSERT INTO game_statuses (status_code) VALUES ('framer');
INSERT INTO game_statuses (status_code) VALUES ('finder');
INSERT INTO game_statuses (status_code) VALUES ('cancel');
