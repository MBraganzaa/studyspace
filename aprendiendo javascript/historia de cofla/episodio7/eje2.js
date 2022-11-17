let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `protocol: <b>${protocol}</b><br>`;
html += `hostname: <b>${hostname}</b><br>`;
html += `pathname: <b>${pathname}</b><br>`;
html += `href: <b>${href}</b><br>`;

document.write(html);