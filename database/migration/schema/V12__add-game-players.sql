CREATE TABLE game_players (
    id uuid DEFAULT uuid_generate_v4(),
    game_id uuid NOT NULL,
    user_id VARCHAR(32) NOT NULL,
    character_id uuid NOT NULL,
    is_framer BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (game_id) REFERENCES games (id),
    FOREIGN KEY (user_id) REFERENCES users (firebase_uid),
    FOREIGN KEY (character_id) REFERENCES characters (id)
) 