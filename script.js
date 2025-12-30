/* ===== KEYBOARD NAVIGATION (↑ ↓) ===== */
const sections=[...document.querySelectorAll('.box')];
let index=0;
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowDown'){
    index=Math.min(index+1,sections.length-1);
    sections[index].scrollIntoView({behavior:'smooth'});
  }
  if(e.key==='ArrowUp'){
    index=Math.max(index-1,0);
    sections[index].scrollIntoView({behavior:'smooth'});
  }
});

/* ===== CURSOR FOLLOWS SCROLL ===== */
const cursor=document.querySelector('.cursor');
window.addEventListener('scroll',()=>{
  const h=document.body.scrollHeight-window.innerHeight;
  const p=window.scrollY/h;
  cursor.style.top=`${20+p*60}%`;
});


/* ===== TERMINAL COMMAND SYSTEM ===== */
const term=document.getElementById('terminal');
const input=document.getElementById('term-input');
const output=document.getElementById('term-output');

function toggleTerminal(){
  term.style.display=term.style.display==='none'?'block':'none';
  input.focus();
}

document.addEventListener('keydown',e=>{
  if(e.key==='`'){toggleTerminal();}
});

input.addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    const cmd=input.value.trim();
    output.innerHTML+=`&gt; ${cmd}<br>`;
    handleCommand(cmd);
    input.value='';
    output.scrollTop=output.scrollHeight;
  }
});

function handleCommand(cmd){
  const c=cmd.toLowerCase();
  if(c==='open projects'){
    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
    output.innerHTML+='opened projects section<br>';
  }
  else if(c.startsWith('open projects/')){
    const name=c.split('/')[1];
    output.innerHTML+=`opened project: ${name}<br>`;
  }
  else if(c==='open certifications'){
    document.getElementById('certifications').scrollIntoView({behavior:'smooth'});
    output.innerHTML+='opened certifications section<br>';
  }
  else if(c==='open tech'){
    document.getElementById('tech').scrollIntoView({behavior:'smooth'});
    output.innerHTML+='opened tech stack<br>';
  }
  else if(c==='open contact'){
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    output.innerHTML+='opened contact section<br>';
  }
  else if(c==='help'){
    output.innerHTML+='commands: open projects | open projects/project-name | open certifications | open tech | open contact<br>';
  }
  else{
    output.innerHTML+='command not found. try: help<br>';
  }
}