// Shared site scripts: smooth scroll, back-to-top, copy to clipboard
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Back to top
  const toTop = document.getElementById('toTop');
  if(toTop){
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 300) toTop.style.display = 'block'; else toTop.style.display = 'none';
    });
    toTop.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
  }

  // Copy server code
  function copyText(text, btn){
    if(!navigator.clipboard){
      try{ window.prompt('Copy this code', text); return; }catch(e){}
    }
    navigator.clipboard.writeText(text).then(()=>{
      const orig = btn.innerText;
      btn.innerText = 'Copied!';
      setTimeout(()=>btn.innerText = orig,1500);
    }).catch(()=>{
      alert('Unable to copy. Please copy manually: ' + text);
    });
  }

  const copyBtn = document.getElementById('copyBtn');
  if(copyBtn) copyBtn.addEventListener('click', function(){ copyText(document.getElementById('serverCode').innerText, this); });
  const copyBtn2 = document.getElementById('copyBtn2');
  if(copyBtn2) copyBtn2.addEventListener('click', function(){ copyText(document.getElementById('serverCode2').innerText, this); });
  const joinBtn = document.getElementById('joinBtn');
  if(joinBtn) joinBtn.addEventListener('click', function(){ copyText(document.getElementById('serverCode').innerText, this); });
  // Video: click to toggle sound (video is muted by default)
  const brpVideo = document.getElementById('brpVideo');
  const videoToast = document.getElementById('videoToast');
  if(brpVideo){
    brpVideo.addEventListener('click', ()=>{
      // toggle muted state
      brpVideo.muted = !brpVideo.muted;
      if(!brpVideo.muted){
        // ensure playing
        brpVideo.play().catch(()=>{});
        if(videoToast){ videoToast.innerText = 'Sound on'; videoToast.style.display = 'block'; setTimeout(()=>videoToast.style.display='none',1500); }
      } else {
        if(videoToast){ videoToast.innerText = 'Sound off'; videoToast.style.display = 'block'; setTimeout(()=>videoToast.style.display='none',1500); }
      }
    });
  }

  });
