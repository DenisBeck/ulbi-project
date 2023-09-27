export function getQueryParams(params: OptionalRecord<string, string>): string {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if(value !== undefined) {
            searchParams.set(name, value)
        }
    })
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if(!searchParams.toString()) {
        return '';
    }
    return `?${searchParams.toString()}`
}
/*
* Функция добавления параметров строки запроса в URL
* "@param params"
*/
export function addQueryParams(params: OptionalRecord<string, string>): void {
    window.history.pushState(null, '', getQueryParams(params))
}