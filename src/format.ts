import { ApiData } from "./json";
import { ApiResultData } from "./json";
import { SongData } from "./json";

export function format(apiData: ApiData[]): SongData[] {
    let allData: SongData[] = [];
    for (const data of apiData) {
        const song: SongData = new SongData(
            data.music_id,
            data.music_title,
            data.artist
        );
        song.favorite = favorite(data.fav_flg);
        song.ex_flag = exFlag(data.ex_flag);

        song.score_simple = score(data.simple_result_data);
        song.score_normal = score(data.normal_result_data);
        song.score_hard = score(data.hard_result_data);
        song.score_extra = score(data.extra_result_data);

        song.rate_simple = rate(data.simple_result_data);
        song.rate_normal = rate(data.normal_result_data);
        song.rate_hard = rate(data.hard_result_data);
        song.rate_extra = rate(data.extra_result_data);

        song.count_simple = count(data.simple_result_data);
        song.count_normal = count(data.normal_result_data);
        song.count_hard = count(data.hard_result_data);
        song.count_extra = count(data.extra_result_data);

        song.status_simple = status(data.simple_result_data);
        song.status_normal = status(data.normal_result_data);
        song.status_hard = status(data.hard_result_data);
        song.status_extra = status(data.extra_result_data);

        allData.push(song);
    }
    return allData;
}

function favorite(favoriteData: 0 | 1): "" | "o" {
    switch (favoriteData) {
        case 0:
            return "";
        case 1:
            return "o";
    }
}

function exFlag(exFlagData: 0 | 1): "" | "o" {
    switch (exFlagData) {
        case 0:
            return "";
        case 1:
            return "o";
    }
}

function score(resultData: null | ApiResultData): "" | number {
    if (resultData === null)
        return "";
    return resultData.score;
}

function rate(resultData: null | ApiResultData): "" | "E" | "D" | "C" | "B" | "A" | "S" | "S+" | "S++" {
    if (resultData === null)
        return "";
    return resultData.rating;
}

function count(resultData: null | ApiResultData): "" | number {
    if (resultData === null)
        return "";
    return resultData.play_count;
}

function status(resultData: null | ApiResultData): "" | "FAILED" | "CLEAR" | "NO MISS" | "FULL CHAIN" | "PERFECT" {
    if (resultData === null)
        return "";
    if (resultData.perfect > 0)
        return "PERFECT";
    if (resultData.full_chain > 0)
        return "FULL CHAIN";
    if (resultData.no_miss > 0)
        return "NO MISS";
    if (resultData.is_failed_mark !== false)
        return "CLEAR";
    return "FAILED";
}
