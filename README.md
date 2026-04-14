# VIBE · 超级脑测试人格量表

<div align="center">
<img width="1200" height="475" alt="VIBE Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

**MBTI 已经过时，SBTI 来了。** 9 个辛辣人格测试，覆盖职场、玄学、情感、游戏四大新赛道。

## 测试列表

| 测试 | 路径 | 维度 | 人格 | 隐藏关卡 |
|------|------|------|------|----------|
| 🧠 **SBTI** 超级脑测试 | `/sbti` | 15 维度 | 25 种 + DRUNK | ✅ 酒量关 |
| 📈 **投资人格** | `/touzi` | 8 维度 | 12 种 | ❌ |
| 💼 **创业人格** | `/kuiqian` | 8 维度 | 12 种 | ❌ |
| 💼 **打工人人格** | `/niuma` | 8 维度 | 12 种 | ❌ |
| 🍜 **吃货人格** | `/food` | 8 维度 | 12 种 | ❌ |
| 💼 **KPITI职场人格** | `/kpiti` | 8 维度 | 12 种 | ❌ |
| ☯️ **五行人格** | `/wuxing` | 8 维度 | 12 种 | ❌ |
| 💕 **恋爱人格 LOVETI** | `/loveti` | 8 维度 | 12 种 | ❌ |
| 🎮 **游戏人格 STEAMTI** | `/steamti` | 8 维度 | 12 种 | ❌ |

## 快速开始

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
src/
├── App.tsx              # 路由配置、首页、主题入口页
├── components/
│   ├── QuizEngine.tsx   # 问卷流程引擎（idle/quiz/result 三状态）
│   └── ResultCard.tsx   # 结果卡片（人格展示、维度分析、分享）
├── data/
│   ├── sbti.ts          # SBTI 题目(30+2) / 人格(25+DRUNK) / 15维度
│   ├── touzi.ts         # 投资人格数据
│   ├── kuiqian.ts       # 创业人格数据
│   ├── niuma.ts         # 打工人人格数据
│   ├── food.ts          # 吃货人格数据
│   ├── kpiti.ts         # KPITI职场人格数据
│   ├── wuxing.ts        # 五行MBTI人格数据
│   ├── loveti.ts        # 恋爱人格数据
│   └── steamti.ts       # 游戏人格数据
└── themes.ts            # 主题配置（accent 色、emoji、路径）
```

## 问卷引擎

每个测试复用统一的 `QuizEngine` 组件：

- **Idle 状态** — 主题落地页，大标题 + 副标题 + 统计数字 + 开始按钮
- **Quiz 状态** — `Q.{n}` 大编号 + 进度条 + 选项卡（选中高亮、自动跳转）
- **Result 状态** — 跳转 `ResultCard` 展示人格结果

路由设计为双层：`/{theme}` 落地页 → `/{theme}/quiz` 答题页，结果页复用同一组件通过 state 判断显示。

## 结果匹配算法

各数据文件实现独立的最佳匹配函数：

- **SBTI** — 将 15 维度得分映射为 L/M/H 模式串，与人格 `pattern` 做编辑距离匹配；酒量题（Q31-32）单独达到阈值触发隐藏人格 DRUNK
- **其他 4 个测试** — 按维度聚合得分，与各人格的典型维度得分做相似度计算，返回最高匹配

## 添加新测试

1. 在 `src/data/` 新建 `{name}.ts`，导出 `QUESTIONS`、`PERSONALITIES`、`DIMENSIONS`、`findXxxBest` 函数
2. 在 `src/themes.ts` 添加主题配置
3. 在 `App.tsx` 路由表添加两条路由（落地页 + 答题页）
4. 在首页 THEMES 卡片会自动渲染

## 技术栈

- **React 19** + **TypeScript**
- **Vite 6** — 构建工具
- **React Router 7** — 客户端路由
- **Tailwind CSS v4** — 样式
- **Motion** — 页面动画
- **Cloudflare Pages** — 部署（`wrangler`）

## 部署

```bash
npm run deploy   # build + wrangler deploy
```

或手动构建后上传 `dist/` 目录。

## 免责声明

仅供娱乐，请勿当真。测出来的结果不代表任何专业评估。
