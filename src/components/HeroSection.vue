<script setup>
import { useLang } from '../i18n.js'
const { t } = useLang()
</script>

<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="container">
      <div class="badge">{{ t('badge') }}</div>
      <h1>
        <span class="gradient-text">{{ t('heroTitle') }}</span>
      </h1>
      <p class="subtitle">
        {{ t('heroSubtitle1') }}<br />
        {{ t('heroSubtitle2') }}
      </p>
      <div class="hero-links">
        <a href="https://github.com/nicepkg/openclaw" target="_blank" class="btn btn-primary">
          {{ t('github') }}
        </a>
        <a href="https://docs.openclaw.ai" target="_blank" class="btn btn-secondary">
          {{ t('docs') }}
        </a>
        <a href="https://discord.com/invite/clawd" target="_blank" class="btn btn-secondary">
          {{ t('community') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  z-index: 0;
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
    radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.1) 0%, transparent 60%);
}

.container {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

h1 {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #818cf8, #c084fc, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}
</style>
