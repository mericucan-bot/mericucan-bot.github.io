const toast=document.getElementById('toast'),tmsg=document.getElementById('toastmsg');let tt;
function pop(m){tmsg.textContent=m;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('show'),1900)}
async function copy(txt){try{await navigator.clipboard.writeText(txt);pop('Copied')}catch{pop(txt)}}
document.querySelectorAll('.cp').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();copy(b.dataset.copy)}));
const d=document.getElementById('qrDialog');
document.getElementById('showQR').addEventListener('click',()=>d.showModal());
d.querySelector('.d-close').addEventListener('click',()=>d.close());
d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}});
document.getElementById('copy').addEventListener('click',async()=>{const u='https://mericucan-bot.github.io/';try{await navigator.clipboard.writeText(u);document.getElementById('status').textContent='Link copied.';pop('Link copied')}catch{document.getElementById('status').textContent=u}});
