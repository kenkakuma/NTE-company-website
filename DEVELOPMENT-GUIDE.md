# NO TRACE EXPLORER 开发指南

## 🎯 解决本地与生产版本不同步问题

### 问题分析

**为什么会出现版本不一致？**
1. **Vite构建缓存**: Vite会缓存构建结果，导致相同代码生成不同的哈希文件名
2. **时间差异**: AWS Amplify部署需要时间，可能存在延迟
3. **缓存机制**: 浏览器和CDN缓存可能显示旧版本
4. **开发流程**: 没有标准化的部署验证流程

### 🚀 标准化开发工作流程

#### 1. 日常开发
```bash
# 启动开发服务器
npm run dev

# 访问: http://localhost:3000/
```

#### 2. 构建和预览
```bash
# 清理缓存并构建
npm run clean:build

# 预览构建结果
npm run preview

# 访问: http://localhost:4173/
```

#### 3. 版本同步检查
```bash
# 快速比较本地和生产版本
npm run compare

# 或使用工作流程脚本
npm run workflow
```

#### 4. 部署到生产
```bash
# 使用自动化部署脚本
npm run deploy

# 或手动执行
./deploy-sync.sh
```

### 📋 新的NPM脚本命令

| 命令 | 功能 | 说明 |
|------|------|------|
| `npm run dev` | 开发服务器 | 热重载开发环境 |
| `npm run build` | 构建项目 | 生成生产版本 |
| `npm run preview` | 预览构建 | 本地预览生产版本 |
| `npm run clean` | 清理缓存 | 删除dist和vite缓存 |
| `npm run clean:build` | 清理重构建 | 清理缓存后重新构建 |
| `npm run compare` | 版本比较 | 对比本地和生产版本 |
| `npm run deploy` | 自动部署 | 完整的部署同步流程 |
| `npm run workflow` | 工作流程 | 交互式开发菜单 |

### 🔄 自动化脚本

#### 1. 部署同步脚本 (`deploy-sync.sh`)
- 检查Git状态
- 清理构建缓存
- 重新构建项目
- 推送到GitHub
- 等待AWS Amplify部署
- 验证版本同步

#### 2. 开发工作流程脚本 (`dev-workflow.sh`)
- 交互式菜单
- 一键启动各种开发任务
- 版本比较功能
- 清理和构建管理

### 🛠️ 最佳实践

#### ✅ DO - 推荐做法

1. **每次修改后清理缓存**:
   ```bash
   npm run clean:build
   ```

2. **部署前验证本地版本**:
   ```bash
   npm run preview
   # 在浏览器中验证功能正常
   ```

3. **使用自动化部署**:
   ```bash
   npm run deploy
   ```

4. **定期检查版本同步**:
   ```bash
   npm run compare
   ```

#### ❌ DON'T - 避免做法

1. **不要直接推送到main分支**:
   - 总是先在本地验证
   - 使用`npm run preview`确认效果

2. **不要忽略构建缓存**:
   - 重大修改后清理缓存
   - 使用`npm run clean:build`

3. **不要假设立即部署**:
   - AWS Amplify需要1-3分钟
   - 使用脚本等待验证

### 🚨 故障排除

#### 问题1: 本地预览版本较新
**解决方案**: 
```bash
npm run deploy
```

#### 问题2: 构建文件哈希不变
**解决方案**:
```bash
npm run clean:build
```

#### 问题3: AWS部署卡住
**解决方案**:
1. 检查GitHub commits
2. 手动触发部署:
   ```bash
   echo "# Deploy trigger $(date)" >> README.md
   git add README.md
   git commit -m "trigger: 手动触发部署"
   git push origin main
   ```

#### 问题4: 版本仍不同步
**解决方案**:
1. 清除浏览器缓存
2. 使用无痕模式访问
3. 等待CDN缓存更新 (5-10分钟)

### 📊 版本检查方法

#### 方法1: 使用脚本
```bash
npm run compare
```

#### 方法2: 手动检查
```bash
# 本地版本
grep -o 'index\.[a-f0-9]*\.\(js\|css\)' dist/index.html

# 生产版本
curl -s https://no-trace.jp | grep -o 'index\.[a-f0-9]*\.\(js\|css\)'
```

#### 方法3: 浏览器开发工具
1. 打开https://no-trace.jp
2. F12 → Network → 刷新页面
3. 查看JS/CSS文件名

### 🎯 快速开始

对于新的开发会话:

```bash
# 1. 检查当前状态
npm run compare

# 2. 如果不同步，清理重构建
npm run clean:build

# 3. 预览验证
npm run preview

# 4. 部署同步
npm run deploy
```

### 📞 支持

如果遇到问题:
1. 查看这个指南的故障排除部分
2. 使用`npm run workflow`交互式菜单
3. 检查AWS Amplify控制台
4. 验证GitHub提交状态

---

**最后更新**: 2025-06-28  
**创建者**: Claude Code  
**用途**: 确保NO TRACE EXPLORER开发部署流程标准化