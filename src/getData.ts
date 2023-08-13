import { API_URL } from "./config";
import { ApiData } from "./json";

export function getData(): ApiData[] {
    let all_data: ApiData[] = [];
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        for (let i = 0; i <= 999; i++) {
            xmlHttp.open("GET", API_URL + i, false);
            xmlHttp.send();
            let data: null | ApiData = JSON.parse(xmlHttp.response).music_detail;
            if (data === null) { continue; }
            all_data.push(data);
        }
        return all_data;
    } catch (e) {
        const errMsg = "Error: データの取得に失敗しました。";
        alert(errMsg);
        throw Error(errMsg);
    }
}
