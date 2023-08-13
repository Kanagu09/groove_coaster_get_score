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

type ApiUserRank = {
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
    favorite: "" | "o";
    ex_flag: "" | "o";
    score_simple: "" | number;
    rate_simple: "" | Rating;
    count_simple: "" | number;
    status_simple: "" | Status;
    score_normal: "" | number;
    rate_normal: "" | Rating;
    count_normal: "" | number;
    status_normal: "" | Status;
    score_hard: "" | number;
    rate_hard: "" | Rating;
    count_hard: "" | number;
    status_hard: "" | Status;
    score_extra: "" | number;
    rate_extra: "" | Rating;
    count_extra: "" | number;
    status_extra: "" | Status;

    constructor(musicId: number, title: string, artist: string) {
        this.music_id = musicId;
        this.song_title = title;
        this.song_artist = artist;
        this.favorite = "";
        this.ex_flag = "";
        this.score_simple = "";
        this.rate_simple = "";
        this.count_simple = "";
        this.status_simple = "";
        this.score_normal = "";
        this.rate_normal = "";
        this.count_normal = "";
        this.status_normal = "";
        this.score_hard = "";
        this.rate_hard = "";
        this.count_hard = "";
        this.status_hard = "";
        this.score_extra = "";
        this.rate_extra = "";
        this.count_extra = "";
        this.status_extra = "";
    }
}


