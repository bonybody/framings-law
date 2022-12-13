CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4(),
    firebase_uid VARCHAR(32) NOT NULL UNIQUE,
    PRIMARY KEY (id)
)