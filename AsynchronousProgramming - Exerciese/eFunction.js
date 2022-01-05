function e(type, attributes, ...content) {
    const result = document.createElement(type)

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substr(0, 2) == 'on') {
            result.addEventListener(attr, substr(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => а.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    })

    return result;
}