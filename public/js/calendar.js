fetch('files/kalendar.html')
  .then(res => res.text())   // this returns a Promise<string>
  .then(html => {
    document.getElementById("kalendar").innerHTML = html;

  });
