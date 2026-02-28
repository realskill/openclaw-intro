<script setup>
import { computed } from 'vue'
import { useLang } from '../i18n.js'
const { t } = useLang()

const features = computed(() => t('features'))
</script>

<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">{{ t('featuresTitle') }}</h2>
      <p class="section-desc">{{ t('featuresDesc') }}</p>
      <div class="features-grid">
        <div v-for="(f, i) in features" :key="i" class="feature-card">
          <div class="feature-icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 6rem 2rem;
  background: #fafafa;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a2e;
}

.section-desc {
  text-align: center;
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.7;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border-color: #c7d2fe;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a2e;
}

.feature-card p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #64748b;
}
</style>
