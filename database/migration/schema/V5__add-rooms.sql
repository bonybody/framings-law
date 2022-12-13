CREATE TABLE rooms (
    id uuid DEFAULT uuid_generate_v4(),
    host_user_id VARCHAR(32) NOT NULL,
    room_status_id uuid NOT NULL,
    room_key VARCHAR(22) NOT NULL,
    card_count INT NOT NULL,
    debate_seconds INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (host_user_id) REFERENCES users (firebase_uid),
    FOREIGN KEY (room_status_id) REFERENCES room_statuses (id)
) 