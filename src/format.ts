import { ApiData } from "./json";
import { ApiResultData } from "./json";
import { ApiUserRank } from "./json";
import { Rating } from "./json";
import { Status } from "./json";
import { SongData } from "./json";

export function format(apiData: ApiData[]): SongData[] {
    let allData: SongData[] = [];
    for (const data of apiData) {
        const song: SongData = new SongData(
            data.music_id,
            data.music_title,
            data.artist
        );
        song.skin_name = data.skin_name;
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

        song.rank_simple = rank(data.user_rank)[0];
        song.rank_normal = rank(data.user_rank)[1];
        song.rank_hard = rank(data.user_rank)[2];
        song.rank_extra = rank(data.user_rank)[3];

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

function rate(resultData: null | ApiResultData): "" | Rating {
    if (resultData === null)
        return "";
    return resultData.rating;
}

function count(resultData: null | ApiResultData): "" | number {
    if (resultData === null)
        return "";
    return resultData.play_count;
}

function status(resultData: null | ApiResultData): "" | Status {
    if (resultData === null)
        return "";
    if (resultData.perfect > 0)
        return "PERFECT";
    if (resultData.full_chain > 0)
        return "FULL CHAIN";
    if (resultData.no_miss > 0)
        return "NO MISS";
    if (!resultData.is_failed_mark)
        return "CLEAR";
    return "FAILED";
}

function rank(rankData: null | ApiUserRank[]): ("" | number)[] {
    let rank: ("" | number)[] = ["", "", "", ""];
    if (rankData == null)
        return rank;
    for (let data of rankData) {
        if (data == null)
            continue;
        rank[data.difficulty] = data.rank;
    }
    return rank;
}
