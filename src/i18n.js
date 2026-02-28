import { reactive } from 'vue'

const messages = {
  zh: {
    badge: '🤖 开源 AI 助手平台',
    heroTitle: 'OpenClaw',
    heroSubtitle1: '你的私人 AI 助手，连接你的生活与数字世界。',
    heroSubtitle2: '不只是聊天——它能操作文件、浏览网页、控制设备、管理日程。',
    github: '⭐ GitHub',
    docs: '📖 文档',

    featuresTitle: '核心能力',
    featuresDesc: 'OpenClaw 不是普通的 AI 聊天工具，而是一个拥有「手」和「脚」的智能助手平台。',
    features: [
      { icon: '🧠', title: '多模型支持', desc: '接入 Claude、GPT、Gemini 等主流大模型，自由切换，按需选择最适合的模型。' },
      { icon: '🔌', title: '多平台接入', desc: '通过 Telegram、WhatsApp、Discord、飞书、Signal 等渠道与 AI 助手实时对话。' },
      { icon: '🛠️', title: '工具生态', desc: '内置文件读写、Shell 命令、网页浏览、截图分析等工具，AI 不只能聊，还能做事。' },
      { icon: '📱', title: '设备联动', desc: '配对手机、电脑等节点设备，远程拍照、截屏、获取位置、执行命令。' },
      { icon: '🔒', title: '隐私优先', desc: '自托管部署，数据留在你自己的机器上。你拥有完整的控制权和数据所有权。' },
      { icon: '⚡', title: '技能扩展', desc: '通过 Skill 系统按需扩展能力——天气查询、文档管理、安全检查等一键安装。' }
    ],
    scenariosTitle: '应用场景',
    scenariosDesc: 'OpenClaw 适用于各种真实场景，帮助你把重复劳动交给 AI。',
    scenarios: [
      { emoji: '💬', title: '全平台即时通讯', desc: '在 Telegram 上发条消息，AI 就能帮你搜资料、读文件、写代码。飞书里 @一下，自动整理会议纪要。无论你用什么平台，OpenClaw 都能无缝接入。', tags: ['Telegram', '飞书', 'Discord', 'WhatsApp'] },
      { emoji: '📂', title: '自动化文件与工作流', desc: '让 AI 帮你整理文件夹、批量重命名、读取 CSV 做分析。配合 Shell 命令和定时任务（Cron），实现日常工作流的自动化。', tags: ['文件操作', 'Shell', '定时任务'] },
      { emoji: '🌐', title: '智能网页浏览与信息提取', desc: 'AI 可以打开浏览器、搜索网页、抓取内容并总结。无论是竞品分析、新闻摘要还是价格监控，动动嘴就行。', tags: ['网页搜索', '内容提取', '浏览器控制'] },
      { emoji: '📱', title: '远程设备控制', desc: '把手机或远程电脑配对为节点，随时远程拍照、截屏、获取定位。出门在外也能遥控家中设备。', tags: ['远程拍照', '截屏', '定位', '命令执行'] },
      { emoji: '📝', title: '知识管理与记忆', desc: 'OpenClaw 有自己的记忆系统——通过 MEMORY.md 和每日笔记持久化上下文。它会记住你的偏好、项目进度和重要决定。', tags: ['长期记忆', '笔记', '上下文持久化'] },
      { emoji: '🔧', title: 'SEO 与站点运维', desc: '配合浏览器工具和网页抓取，AI 可以检查页面 SEO 状态、分析关键词排名、生成优化建议。站长的贴心搭档。', tags: ['SEO 分析', '关键词', '站点监控'] }
    ],
    footerDesc: '开源 · 自托管 · 隐私优先的 AI 个人助手平台',
    footerDocs: '文档',
    footerSkills: '技能市场'
  },
  en: {
    badge: '🤖 Open-Source AI Assistant Platform',
    heroTitle: 'OpenClaw',
    heroSubtitle1: 'Your personal AI assistant, bridging your life with the digital world.',
    heroSubtitle2: 'More than chat — it can manage files, browse the web, control devices, and organize your schedule.',
    github: '⭐ GitHub',
    docs: '📖 Docs',

    featuresTitle: 'Core Features',
    featuresDesc: 'OpenClaw is not just another AI chatbot — it\'s an intelligent assistant platform with real hands and feet.',
    features: [
      { icon: '🧠', title: 'Multi-Model Support', desc: 'Connect to Claude, GPT, Gemini and other leading LLMs. Switch freely and pick the best model for each task.' },
      { icon: '🔌', title: 'Multi-Platform Access', desc: 'Chat with your AI assistant via Telegram, WhatsApp, Discord, Feishu, Signal and more.' },
      { icon: '🛠️', title: 'Tool Ecosystem', desc: 'Built-in file I/O, shell commands, web browsing, screenshot analysis and more. AI that does, not just talks.' },
      { icon: '📱', title: 'Device Integration', desc: 'Pair your phone or computer as a node — remote camera, screenshots, location, and command execution.' },
      { icon: '🔒', title: 'Privacy First', desc: 'Self-hosted deployment. Your data stays on your machine. You own full control and data sovereignty.' },
      { icon: '⚡', title: 'Skill Extensions', desc: 'Expand capabilities on demand via the Skill system — weather, document management, security checks, and more.' }
    ],
    scenariosTitle: 'Use Cases',
    scenariosDesc: 'OpenClaw fits a wide range of real-world scenarios, letting AI handle repetitive tasks for you.',
    scenarios: [
      { emoji: '💬', title: 'Cross-Platform Messaging', desc: 'Send a message on Telegram, and your AI can search, read files, and write code. Mention it in Feishu to auto-summarize meetings. OpenClaw integrates seamlessly with any platform.', tags: ['Telegram', 'Feishu', 'Discord', 'WhatsApp'] },
      { emoji: '📂', title: 'File & Workflow Automation', desc: 'Let AI organize folders, batch rename files, and analyze CSVs. Combine with shell commands and cron jobs for full workflow automation.', tags: ['File Ops', 'Shell', 'Cron Jobs'] },
      { emoji: '🌐', title: 'Smart Web Browsing & Extraction', desc: 'AI can open a browser, search the web, scrape content and summarize it. Competitor analysis, news digests, price monitoring — just ask.', tags: ['Web Search', 'Content Extraction', 'Browser Control'] },
      { emoji: '📱', title: 'Remote Device Control', desc: 'Pair your phone or remote computer as a node. Take photos, capture screens, get location — anytime, anywhere.', tags: ['Remote Camera', 'Screenshots', 'Location', 'Commands'] },
      { emoji: '📝', title: 'Knowledge & Memory Management', desc: 'OpenClaw has its own memory system — persisting context via MEMORY.md and daily notes. It remembers your preferences, project progress, and key decisions.', tags: ['Long-term Memory', 'Notes', 'Context Persistence'] },
      { emoji: '🔧', title: 'SEO & Site Operations', desc: 'With browser tools and web scraping, AI can check page SEO status, analyze keyword rankings, and generate optimization suggestions.', tags: ['SEO Analysis', 'Keywords', 'Site Monitoring'] }
    ],
    footerDesc: 'Open-Source · Self-Hosted · Privacy-First AI Assistant Platform',
    footerDocs: 'Docs',
    footerSkills: 'Skill Hub'
  }
}

const state = reactive({
  lang: 'zh'
})

export function useLang() {
  const t = (key) => {
    const keys = key.split('.')
    let val = messages[state.lang]
    for (const k of keys) {
      val = val?.[k]
    }
    return val
  }

  const toggleLang = () => {
    state.lang = state.lang === 'zh' ? 'en' : 'zh'
  }

  const currentLang = () => state.lang

  return { t, toggleLang, currentLang, state }
}
