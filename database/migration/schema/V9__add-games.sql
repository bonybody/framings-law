CREATE TABLE games (
    id uuid DEFAULT uuid_generate_v4(),
    room_id uuid NOT NULL,
    game_status_id uuid NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (room_id) REFERENCES rooms (id),
    FOREIGN KEY (game_status_id) REFERENCES game_statuses (id)
);
