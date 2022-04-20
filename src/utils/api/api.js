const api =  ({url, method, headers, data }, option = {}) => {
    console.log(url);
    return fetch(url, {
        method: method || 'GET',
        body: data ? JSON.stringify(data) : null,
        headers: headers || {
            'content-type': 'application/json'
        },
        mode: 'cors',
        ...option
    }).then(res => {
        if (!res.ok) return res.json().then((error) => alert(error.message));

        return res.json();
    })
    .catch(e => {
        alert("非預期錯誤");
    })
}

export default api;