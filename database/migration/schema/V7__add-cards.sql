CREATE TABLE cards (
    id uuid DEFAULT uuid_generate_v4(),
    posted_at DATE NOT NULL,
    body TEXT NOT NULL,
    commentary TEXT NOT NULL,
    is_framing BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿1', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿2', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿3', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿4', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿5', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿6', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿7', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿8', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿9', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿10', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿11', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿12', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿13', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿14', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿15', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿16', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿17', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿18', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿19', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '白投稿20', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿1', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿2', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿3', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿4', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿5', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿6', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿7', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿8', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿9', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿10', '投稿解説', true);