
function send() {
  const msg = document.getElementById('input').value;
  fetch('/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: msg })
  }).then(() => load());
}

function load() {
  fetch('/api/messages')
    .then(res => res.json())
    .then(data => {
      const ul = document.getElementById('messages');
      ul.innerHTML = '';
      data.forEach(m => {
        const li = document.createElement('li');
        li.innerText = m.text;
        ul.appendChild(li);
      });
    });
}

load();
