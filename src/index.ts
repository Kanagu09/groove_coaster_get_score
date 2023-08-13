import { getData } from "./getData"
import { makeCsv } from "./csv"
import { ApiData } from "./json";
import { format } from "./format";

alert("データ集計を開始します。\n時間がかかる場合があります。\n気長にお待ちください。");
const apiData: ApiData[] = getData();
const allData = format(apiData);
makeCsv(allData);
