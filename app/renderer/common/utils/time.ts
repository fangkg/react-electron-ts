/**
 * @description 时间戳变成字符串 2022/04/09
 * @param {number} num时间戳整数
 * @returns {string} date
 * */
export function intToDateString(num: number, unit = "/"): string {
    let date;
    if(!num){
        date = new Date();
    } else {
        date = new Date(num);
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}${unit}${month >= 10 ? month : '0' + month}${unit}${day >= 10 ? day : '0' + day}`;
}

/**
 * @description 时间戳变成字符串 14:28:19
 * @param {number} num时间戳整数
 * @returns {string} date
 * */
export function intToTimeString(num?: number): string {
    let date;
    if(!num){
        date = new Date();
    } else {
        date = new Date(num);
    }
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${hour >= 10 ? hour : '0'+ hour}:${minute >= 10 ? minute : '0'+ minute}:${second >= 0 ? second : '0'+second}`;
}

/**
 * @description 时间戳变成字符串 2018/01/12 12:32:21
 * @param {number} num 时间戳整数
 * */
export function formatToString(num: number | undefined, unit = "/"){
    if(!num) return "";
    const date = intToDateString(num, unit);
    const time = intToTimeString(num);
    return `${date}${time}`;
}
