/**
 * Created by zerowolf on 2018/2/4.
 */

export function fetchJson(url) {
    return fetch(url)
        .then(req => req.json())
        .then(json => {
            // dispatch(action(json));
            console.log(json)
            return json;
        })
        .catch(msg => console.log('请求失败' + msg));
}
