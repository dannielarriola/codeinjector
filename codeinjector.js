var s = document.createElement('div');
chrome.storage.sync.get({
    codigo: ''
  }, function(items) {
    s.innerHTML = items.codigo;
  });
document.body.appendChild(s);