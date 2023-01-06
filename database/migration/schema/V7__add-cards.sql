CREATE TABLE cards (
    id uuid DEFAULT uuid_generate_v4(),
    posted_at DATE NOT NULL,
    body TEXT NOT NULL,
    commentary TEXT NOT NULL,
    is_framing BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2022-08-21', 'そういえば大学時代ゲーム好きだった俺はゲームを馬鹿にする人を許せないと思ってたんだけど、今思い返せば馬鹿にされてたのはゲームじゃなくて俺だわ。俺がキモガリ天パだからゲームがキモく見えただけ。松坂桃李の遊戯王趣味に嫌悪感が無いように、馬鹿にされるかどうかは趣味より見た目によるわ。', '炎上していない', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2020-02-22', '男は女はこうあるべきという固定観念をぶっ壊せが最近のトレンドではあるけど、結局男は女らしさを、女は男らしさを本能で異性に求めるから、らしさをぶっ壊してもモテなくなるだけ。それを差し置いてもらしさを貫きたいなら自由だけど、多くの人はらしく生きた方が幸せになれる。らしさにも意味がある', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2022-10-21', 'クソ期待はずれ。
スープぬるいし
麺ふにゃふにゃ
つけそば大1,550円はやりすぎ
なんであんな並ぶねん
あほなんか？', '投稿解説', false);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2022-06-17', '私の存在しない歌詞を呟いてるやつ、
面白いのもあるけど死ぬほどつまらんのもあるな！', '投稿解説', false);
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
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2009-03-01', '〇〇から求人がきた！　〇〇へ毎日通勤しなくちゃならないし、仕事も気に入らないけど、お給料がいいから我慢しなくちゃね', '仕事に対する否定的なツイートに批判の声', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2021-06-21', '採用面接で、「私のツイッターを読んでいますか？」という質問をするようにしている。　読んでいない人材は、不採用。　面接に来る以上、社長のツイッターを確認するのは、一般常識でしょ。　非常識な人材は仕事もできません', '「思いあがりもはなはだしい」「あなたの方が非常識ですよ」「ここで働くの辛そう」と非難の声多数', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿3', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿4', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿5', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿6', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿7', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿8', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿9', '投稿解説', true);
INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ('2001-03-12', '黒投稿10', '投稿解説', true);