<script setup>
import { useLang } from '../i18n.js'

const { state, toggleLang } = useLang()
</script>

<template>
  <button class="lang-switch" @click="toggleLang">
    <span class="lang-label">{{ state.lang === 'zh' ? 'EN' : '中文' }}</span>
    <span class="lang-icon">🌐</span>
  </button>
</template>

<style scoped>
.lang-switch {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

.lang-switch:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.lang-icon {
  font-size: 1rem;
}
</style>
