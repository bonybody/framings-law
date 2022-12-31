CREATE TABLE game_cards (
    id uuid DEFAULT uuid_generate_v4(),
    game_id uuid NOT NULL,
    card_id uuid NOT NULL,
    is_deleted BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (game_id) REFERENCES games (id),
    FOREIGN KEY (card_id) REFERENCES cards (id)
);
