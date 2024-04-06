export type ApiData = {
    "music_id": number,
    "music_title": string,
    "artist": string,
    "skin_name": string,
    "ex_flag": 0 | 1,
    "simple_result_data": null | ApiResultData,
    "normal_result_data": null | ApiResultData,
    "hard_result_data": null | ApiResultData,
    "extra_result_data": null | ApiResultData,
    "user_rank": null | ApiUserRank[],
    "difficulty": null | ApiDifficulty[],
    "fav_flg": 0 | 1,
    "message": null | string
};

export type ApiResultData = {
    "rating": Rating,
    "no_miss": number,
    "full_chain": number,
    "perfect": number,
    "play_count": number,
    "is_clear_mark": boolean,
    "is_failed_mark": boolean,
    "music_level": "SIMPLE" | "NORMAL" | "HARD" | "EXTRA",
    "score": number,
    "max_chain": number,
    "adlib": number
}

export type ApiUserRank = {
    "rank": number,
    "difficulty": 0 | 1 | 2 | 3
}

type ApiDifficulty = {
    "music_difficulty": 0 | 1 | 2 | 3;
}

export type Rating = "E" | "D" | "C" | "B" | "A" | "S" | "S+" | "S++";
export type Status = "FAILED" | "CLEAR" | "NO MISS" | "FULL CHAIN" | "PERFECT";

export class SongData {
    music_id: number;
    song_title: string;
    song_artist: string;
    skin_name: string;
    favorite: "" | "o";
    ex_flag: "" | "o";

    score_simple: "" | number;
    rate_simple: "" | Rating;
    status_simple: "" | Status;
    rank_simple: "" | number;
    play_count_simple: "" | number;
    nomiss_count_simple: "" | number;
    fullchain_count_simple: "" | number;
    perfect_count_simple: "" | number;

    score_normal: "" | number;
    rate_normal: "" | Rating;
    status_normal: "" | Status;
    rank_normal: "" | number;
    play_count_normal: "" | number;
    nomiss_count_normal: "" | number;
    fullchain_count_normal: "" | number;
    perfect_count_normal: "" | number;

    score_hard: "" | number;
    rate_hard: "" | Rating;
    status_hard: "" | Status;
    rank_hard: "" | number;
    play_count_hard: "" | number;
    nomiss_count_hard: "" | number;
    fullchain_count_hard: "" | number;
    perfect_count_hard: "" | number;

    score_extra: "" | number;
    rate_extra: "" | Rating;
    status_extra: "" | Status;
    rank_extra: "" | number;
    play_count_extra: "" | number;
    nomiss_count_extra: "" | number;
    fullchain_count_extra: "" | number;
    perfect_count_extra: "" | number;

    constructor(musicId: number, title: string, artist: string) {
        this.music_id = musicId;
        this.song_title = title;
        this.song_artist = artist;
        this.skin_name = "";
        this.favorite = "";
        this.ex_flag = "";

        this.score_simple = "";
        this.rate_simple = "";
        this.status_simple = "";
        this.rank_simple = "";
        this.play_count_simple = "";
        this.nomiss_count_simple = "";
        this.fullchain_count_simple = "";
        this.perfect_count_simple = "";

        this.score_normal = "";
        this.rate_normal = "";
        this.status_normal = "";
        this.rank_normal = "";
        this.play_count_normal = "";
        this.nomiss_count_normal = "";
        this.fullchain_count_normal = "";
        this.perfect_count_normal = "";

        this.score_hard = "";
        this.rate_hard = "";
        this.status_hard = "";
        this.rank_hard = "";
        this.play_count_hard = "";
        this.nomiss_count_hard = "";
        this.fullchain_count_hard = "";
        this.perfect_count_hard = "";

        this.score_extra = "";
        this.rate_extra = "";
        this.status_extra = "";
        this.rank_extra = "";
        this.play_count_extra = "";
        this.nomiss_count_extra = "";
        this.fullchain_count_extra = "";
        this.perfect_count_extra = "";
    }
}


