<script setup>
import { useLang } from '../i18n.js'
const { t } = useLang()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logo">🤖 OpenClaw</div>
      <p class="footer-desc">{{ t('footerDesc') }}</p>
      <div class="footer-links">
        <a href="https://github.com/nicepkg/openclaw" target="_blank">GitHub</a>
        <a href="https://docs.openclaw.ai" target="_blank">{{ t('footerDocs') }}</a>
        <a href="https://discord.com/invite/clawd" target="_blank">Discord</a>
        <a href="https://clawhub.com" target="_blank">{{ t('footerSkills') }}</a>
      </div>
      <p class="copyright">
        © {{ new Date().getFullYear() }} OpenClaw. Built with ❤️ and Vue.js.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 2rem;
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
}

.footer-desc {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #818cf8;
}

.copyright {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
}
</style>
