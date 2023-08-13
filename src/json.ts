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
    "rating": "E" | "D" | "C" | "B" | "A" | "S" | "S+" | "S++",
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

export class SongData {
    music_id: number;
    song_title: string;
    song_artist: string;
    favorite: "" | "o";
    ex_flag: "" | "o";
    score_simple: "" | number;
    rate_simple: "" | "E" | "D" | "C" | "B" | "A" | "S" | "S+" | "S++";
    count_simple: "" | number;
    status_simple: "" | "FAILED" | "CLEAR" | "NO MISS" | "FULL CHAIN" | "PERFECT";
    score_normal: "" | number;
    rate_normal: "" | "E" | "D" | "C" | "B" | "A" | "S" | "S+" | "S++";
    count_normal: "" | number;
    status_normal: "" | "FAILED" | "CLEAR" | "NO MISS" | "FULL CHAIN" | "PERFECT";
    score_hard: "" | number;
    rate_hard: "" | "E" | "D" | "C" | "B" | "A" | "S" | "S+" | "S++";
    count_hard: "" | number;
    status_hard: "" | "FAILED" | "CLEAR" | "NO MISS" | "FULL CHAIN" | "PERFECT";
    score_extra: "" | number;
    rate_extra: "" | "E" | "D" | "C" | "B" | "A" | "S" | "S+" | "S++";
    count_extra: "" | number;
    status_extra: "" | "FAILED" | "CLEAR" | "NO MISS" | "FULL CHAIN" | "PERFECT";

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


