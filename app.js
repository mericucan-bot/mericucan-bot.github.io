const dialog = document.getElementById('qrDialog');
document.getElementById('showQR').addEventListener('click',()=>dialog.showModal());
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.getElementById('copy').addEventListener('click',async()=>{const url='https://mericucan-bot.github.io/';try{await navigator.clipboard.writeText(url);document.getElementById('status').textContent='Bağlantı kopyalandı.';}catch{document.getElementById('status').textContent=url;}});
