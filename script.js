/* ========================= */
/* Proper name: Mobile Menu Toggle */
/* ========================= */
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
btn?.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('open');
});

/* ========================= */
/* Proper name: Footer Year */
/* ========================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* ========================= */
/* Proper name: Tilt Effect for Cards */
/* ========================= */
const tiltTargets = document.querySelectorAll('.tilt, .tilt-card');
tiltTargets.forEach((el) => {
  const height = el.clientHeight;
  const width = el.clientWidth;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const xVal = e.clientX - rect.left;
    const yVal = e.clientY - rect.top;
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
    el.style.transform = `perspective(700px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  });
  el.addEventListener('mouseout', () => {
    el.style.transform = 'perspective(700px) rotateX(0) rotateY(0)';
  });
  el.addEventListener('mousedown', () => (el.style.transform += ' scale(0.98)'));
  el.addEventListener('mouseup', () => (el.style.transform = el.style.transform.replace(' scale(0.98)','')));
});

/* ========================= */
/* Proper name: Contact Form Handler */
/* ========================= */
function handleContact(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value);
  const email = encodeURIComponent(f.email.value);
  const msg = encodeURIComponent(f.message.value);
  const subject = `Portfolio enquiry from ${name}`;
  const body = `Hi Amit,%0D%0A%0D%0A${decodeURIComponent(msg)}%0D%0A%0D%0A— ${decodeURIComponent(name)} (${decodeURIComponent(email)})`;
  window.location.href = `mailto:amitkabiraj1012@gmail.com?subject=${subject}&body=${body}`;
  document.querySelector('.form-ok').textContent = 'Error, Please contact to number or mail...';
}

/* ========================= */
/* Proper name: Modal Image Gallery */
/* ========================= */
function showModal(src) {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  modal.style.display = 'flex';
  modalImg.src = src;
}
function hideModal() {
  document.getElementById('imgModal').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.img-modal .close');
  if (closeBtn) closeBtn.onclick = hideModal;
});