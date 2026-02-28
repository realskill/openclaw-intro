<script setup>
import LangSwitch from './components/LangSwitch.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ScenariosSection from './components/ScenariosSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div id="app-root">
    <LangSwitch />
    <HeroSection />
    <FeaturesSection />
    <ScenariosSection />
    <FooterSection />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1a1a2e;
  background: #fafafa;
  -webkit-font-smoothing: antialiased;
}

#app-root {
  overflow-x: hidden;
}
</style>
