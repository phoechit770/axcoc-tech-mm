function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
Mg Phoe Chit, [10/22/2025 8:38 PM]
// Basic interactions: theme toggle, smooth scroll, back-to-top, contact form (mailto fallback), visitor counter, chat widget mock

// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('ax-theme');
if(savedTheme === 'light') body.classList.add('light'), themeToggle.textContent = '☀️';
else themeToggle.textContent = '🌙';

themeToggle.addEventListener('click', () => {
  if(body.classList.contains('light')){
    body.classList.remove('light');
    themeToggle.textContent = '🌙';
    localStorage.setItem('ax-theme','dark');
  } else {
    body.classList.add('light');
    themeToggle.textContent = '☀️';
    localStorage.setItem('ax-theme','light');
  }
});

// Smooth scroll util
function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth', block:'start'});
}

// Burger nav
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger && burger.addEventListener('click', () => navLinks.classList.toggle('show'));

// Back to top Button
const backTop = document.getElementById('backTop');
backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
window.addEventListener('scroll', () => {
  const t = document.documentElement.scrollTop || document.body.scrollTop;
  backTop.style.display = t > 300 ? 'block' : 'none';

  // progress bar
  const scrolled = (t / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
  document.getElementById('top-progress').style.width = scrolled + '%';
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Visitor counter (localStorage simple)
const visitsKey = 'ax-visits';
let visits = Number(localStorage.getItem(visitsKey) || 0);
visits += 1;
localStorage.setItem(visitsKey, visits);
document.getElementById('visitors-count').textContent = visits;

// Contact form (example: local validation + mailto fallback)
function sendContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if(!name  !email  !message){
    status.textContent = 'ကျေးဇူးပြု၍ အချက်အလက်များအားလုံး ဖြည့်ပါ။';
    return;
  }

  // Here you can connect to backend or third-party service (Formspree, Netlify Forms, etc.)
  // For now we do a mailto fallback:
  const subj = encodeURIComponent(Axcoc Tech MM Contact from ${name});
  const body = encodeURIComponent(Name: ${name}\nEmail: ${email}\n\nMessage:\n${message});
  const mailto = mailto:mgphoechit770@gmail.com?subject=${subj}&body=${body};

  status.textContent = 'Opening your email client...';
  window.location.href = mailto;
  setTimeout(()=> status.textContent = 'If nothing opened, please email mgphoechit770@gmail.com directly.' ,2000);
}

function mailtoContact(){
  window.location.href = 'mailto:mgphoechit770@gmail.com';
}

// Floating chat mock
const chatWidget = document.getElementById('chat-widget');
document.getElementById('open-chat').addEventListener('click', () => {
  chatWidget.classList.remove('hidden');
  chatWidget.setAttribute('aria-hidden','false');
});
function closeChat(){ chatWidget.classList.add('hidden'); chatWidget.setAttribute('aria-hidden','true'); }
function fakeReply(){
  const input = document.getElementById('chat-input-field');
  if(!input.value.trim()) return;
  const body = chatWidget.querySelector('.chat-body');
  const userMsg = document.createElement('div');
  userMsg.textContent = input.value;
  userMsg.style.textAlign = 'right';

Mg Phoe Chit, [10/22/2025 8:38 PM]
userMsg.style.margin = '6px 0';
  body.appendChild(userMsg);
  input.value = '';
  setTimeout(()=> {
    const bot = document.createElement('div');
    bot.textContent = 'AI demo reply — ဒီကနေတက်နေတဲ့ chatbot ကို backend နဲ့ချိတ်ဆက်နိုင်ပါတယ်။';
    body.appendChild(bot);
    body.scrollTop = body.scrollHeight;
  }, 700);
}

// simple accessibility: close menu on outside click on mobile
document.addEventListener('click', (e)=>{
  if(!e.target.closest('.nav-wrap') && navLinks.classList.contains('show')) navLinks.classList.remove('show');
});
const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('light');
  toggle.textContent = body.classList.contains('light') ? '🌞' : '🌙';
});