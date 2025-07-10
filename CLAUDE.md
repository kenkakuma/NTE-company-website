# Claude记忆文件

## 🚀 NO TRACE EXPLORER v2.6.0 - 统一管理中心完整版

*最后更新: 2025-07-10*  
*项目路径: `/Users/eric/WebstormProjects/notrace`*

---

## 🎯 最新更新: v2.6.0 统一管理中心完整版

### ✅ 完成内容
- **统一管理中心**: 完全重构`/pages/admin/index.vue`为现代化管理界面
- **图片管理系统**: 完整的图片上传、分类、搜索、批量操作功能
- **4大管理模块**: 文章管理、图片管理、首页管理、数据分析完整集成
- **TypeScript优化**: 100%类型安全，零编译错误

### 🔧 技术实现
- **侧边栏导航**: Vuetify 3.4.0现代化设计，用户信息+功能模块+系统设置
- **标签式界面**: 4个核心管理模块无缝切换，单页面应用体验
- **localStorage存储**: 客户端数据持久化，支持备份导出
- **组件化架构**: 模块化设计，易于维护和扩展
- **开发服务器**: ✅ http://localhost:3002 正常运行，管理中心: /admin

### 📊 管理功能
- **文章管理**: 完整CRUD、搜索筛选、分类标签系统
- **图片管理**: 拖拽上传、批量操作、分类管理、预览编辑
- **首页管理**: 背景图片管理、Hero内容编辑、合作伙伴管理
- **数据分析**: 统计图表、系统信息、数据导出、性能监控

---

## 📊 项目概览

### 📋 基本信息
- **项目名称**: NO TRACE EXPLORER | 無迹探索株式会社
- **当前版本**: v2.6.0 (2025-07-10)
- **技术栈**: Nuxt 3.17.5 + TypeScript + Vuetify 3.4.0
- **域名**: https://no-trace.jp
- **部署方式**: AWS Amplify (自动部署)
- **开发服务器**: http://localhost:3002

### 🎯 核心业务模块
1. **珈琲 | COFFEE**: 飲料・文化事業 - 咖啡商品开发、贸易、中国市场战略
2. **器具 | EQUIPMENT**: 製品開発事業 - 专业设备研发制造
3. **展览 | EXHIBITION**: 文化・芸術事業 - 文化技术艺术展示企画
4. **LAB | ラボ**: 研究開発事業 - 创新技术研发、体育关联研究
5. **クラブ | CLUB**: 会員制コミュニティ - 专家网络、会员制服务

### 📊 技术状态
- **客户端**: 468KB (gzip: 147KB)
- **服务端**: 4.9MB (gzip: 877KB)
- **TypeScript**: ✅ 零类型错误
- **Material Design Icons**: 全站统一使用
- **性能**: 7页面130ms预渲染

---

## 🎨 设计系统

**Anthropic风格**: 极简主义、16px圆角、黑白灰 + #E17B47橙红装饰色

**配色系统**:
- 主背景: #FAF9F7 (温暖浅米色) | 卡片: #FFFFFF | 区域: #F0EDE8
- 文字: #1A1A1A (主) / #333333 (次) / #666666 (三级)

**响应式**: 桌面端≥1200px 完整分栏 | 平板端768-1199px | 移动端<768px垂直

**间距**: 桌面3rem / 移动2.5rem padding | 容器1200px最大宽度

---

## 🛠️ 技术架构

**性能**: 客户端468KB(gzip:147KB) | 服务端4.9MB(gzip:877KB) | 7页面130ms预渲染

**关键文件**:
- `nuxt.config.ts` - 核心配置
- `pages/` - 7个页面(index/about/coffee/admin/homepage等)  
- `data/articles.ts` - 文章数据源
- `CLAUDE_BACKUP.md` - 完整历史备份

---

## 🏠 主页架构

**布局顺序**:
1. Hero区域 - 全屏背景+左下内容+2黑色按钮
2. 企業理念 - 3核心原则+Material Design图标
3. 総合サービスリソース - 5大业务+LAB/CLUB卡片  
4. 企業情報 - Featured横向新闻列表
5. 合作伙伴 - 8logo无限滚动(v2.5修复)
6. FAQ - 4常见问题

**核心功能**: 统一管理中心`/admin` | 图片管理系统 | 文章管理 | 首页管理 | PWA支持 | SEO优化

---

## 🔄 开发流程

**常用命令**:
```bash
npm run dev      # 开发服务器
npm run build    # 生产构建  
npm run preview  # 预览构建
npx nuxi typecheck  # 类型检查
```

**故障排除**: 端口占用→自动检测 | 类型错误→检查types目录 | 构建失败→清理.nuxt/.output

---

## 🔧 关键配置信息

### 🌐 域名和部署
- **当前部署**: AWS Amplify + Nuxt 3 (NO TRACE EXPLORER企业网站)
- **域名**: https://no-trace.jp
- **DNS管理**: AWS Route 53
- **SSL证书**: 自动HTTPS支持

### 📝 历史配置 (WordPress已废弃)
- **旧部署**: AWS EC2 + WordPress (已停用)
- **服务器IP**: 18.182.55.34 (历史记录)
- **SSH密钥**: /Users/eric/Documents/notrace.pem
- **WordPress账户**: newadmin / admin123456

---

## 📚 完整版本历史

### v2.6.0 (2025-07-10) - 统一管理中心完整版
- **统一管理中心**: 现代化管理界面重构
- **图片管理系统**: 完整上传、分类、搜索、批量操作
- **4大管理模块**: 文章/图片/首页/数据分析完整集成
- **新增文件**: ImageManager.vue, ImageUploader.vue, AnalyticsManager.vue, useImageManager.ts, image.ts

### v2.5.1 (2025-07-09) - 子页面专业化完善
- Material Design图标统一替换
- 四大页面(EXHIBITION/LAB/CLUB/首页)全面优化
- 图标系统商务化升级

### v2.4.0 (2025-07-06) - Hero区域重构
- 全屏背景图片 + 首页图片管理系统
- 动态内容加载和localStorage数据持久化
- 响应式设计完善

### v2.3.0 (2025-07-01) - Nuxt3技术栈迁移
- Vue 3 + Vite → Nuxt 3 + Vuetify 3 + TypeScript
- SSR/SSG支持，SEO优化
- 类型安全和现代化组件架构

### v2.2.0 (2025-07-01) - 文章管理系统
- 图形化文章管理界面
- 首页文章链接集成
- 本地存储数据管理

### v2.0.0 (2025-06-30) - 导航系统现代化
- 日式导航菜单重构
- Exhibition页面新增
- 动态下划线和现代化交互

### v1.0.0 (2025-06-29) - 项目基础版本
- 企业网站基础架构
- 6大业务模块展示
- ServiceShowcase组件开发

---

## 🚀 企业级标准

**质量指标**: ✅零错误构建 | ✅100%TypeScript覆盖 | ✅完美响应式 | ✅147KB性能

**企业价值**: 世界级网站标准 | 100%日语化展示 | 现代化技术栈 | 完整管理系统

---

## 🗂️ 废弃历史记录

> 以下内容为历史记录，仅供参考。当前项目已迁移至Nuxt 3技术栈。

### WordPress环境记录 (已废弃)
- **旧部署**: AWS EC2 + WordPress 
- **服务器IP**: 18.182.55.34
- **数据库**: notracewp / notrace / hoo3969407
- **管理员**: newadmin / admin123456
- **本地开发**: http://localhost:8000

### 技术债务和迁移记录
- Vue 2 → Vue 3 Composition API ✅
- 混合UI框架冲突解决 ✅
- TypeScript类型安全实现 ✅
- SEO优化和SSR支持 ✅

---

*快速参考: 开发环境Node.js v18+ | 配置nuxt.config.ts | 管理入口/admin*  
*技术支持: Nuxt3官方文档 | Vuetify3文档 | 完整历史CLAUDE_BACKUP.md*