/**
 * @description 判断是否属于外部链接
 * @param {string} url - 链接
 * */
export function isHttpOrHttpsUrl(url: string): boolean {
    let regRule = /(http|https):\/\/([\w.]+\/?)\$*/;
    return regRule.test(url.toLowerCase());
}
