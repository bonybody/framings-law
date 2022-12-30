CREATE TABLE room_statuses (
    id uuid DEFAULT uuid_generate_v4(),
    status_code VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
)