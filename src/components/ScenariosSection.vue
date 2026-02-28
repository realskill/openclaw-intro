<script setup>
import { computed } from 'vue'
import { useLang } from '../i18n.js'
const { t } = useLang()

const scenarios = computed(() => t('scenarios'))
</script>

<template>
  <section class="scenarios">
    <div class="container">
      <h2 class="section-title">{{ t('scenariosTitle') }}</h2>
      <p class="section-desc">{{ t('scenariosDesc') }}</p>
      <div class="scenarios-list">
        <div v-for="(s, i) in scenarios" :key="i" class="scenario-card">
          <div class="scenario-emoji">{{ s.emoji }}</div>
          <div class="scenario-content">
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
            <div class="tags">
              <span v-for="tag in s.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scenarios {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #f0f0ff 0%, #fafafa 100%);
}

.container {
  max-width: 900px;
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

.scenarios-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.scenario-card {
  display: flex;
  gap: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.scenario-card:hover {
  transform: translateX(4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  border-color: #c7d2fe;
}

.scenario-emoji {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.scenario-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a2e;
}

.scenario-content p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 0.75rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: #eef2ff;
  color: #6366f1;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 600px) {
  .scenario-card {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
