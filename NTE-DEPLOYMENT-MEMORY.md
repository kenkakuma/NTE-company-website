# NTE部署配置记忆文档

## 📋 项目基本信息
- **项目名称**: NO TRACE EXPLORER Corporate Website
- **GitHub仓库**: https://github.com/kenkakuma/NTE-company-website.git
- **本地项目路径**: `/Users/eric/WebstormProjects/notrace/vue-material-kit/`
- **生产网站**: https://no-trace.jp
- **部署方式**: AWS Amplify

## 🚀 部署架构

### AWS Amplify部署方案
- **平台**: AWS Amplify (非EC2)
- **部署方式**: GitHub仓库直接连接
- **自动化**: 推送main分支自动触发部署
- **构建配置**: amplify.yml文件

### 构建配置详情
```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 🔧 GitHub配置

### 仓库信息
- **仓库名**: NTE-company-website
- **用户**: kenkakuma
- **主分支**: main
- **认证方式**: Personal Access Token

### Token权限配置
- ✅ `repo` - 仓库完整访问权限
- ✅ `workflow` - GitHub Actions工作流权限
- ✅ `actions` - Actions管理权限

### Git配置
```bash
# 项目Git配置
git config user.name "NO TRACE EXPLORER"
git config user.email "notracejp@gmail.com"

# 远程仓库
git remote add origin https://github.com/kenkakuma/NTE-company-website.git
```

## 🔄 开发到部署工作流

### 日常开发流程
1. **本地开发**: 
   ```bash
   cd /Users/eric/WebstormProjects/notrace/vue-material-kit/
   npm run dev  # 开发服务器
   ```

2. **预览构建**:
   ```bash
   npm run build
   npm run preview  # http://localhost:4173/
   ```

3. **提交代码**:
   ```bash
   git add .
   git commit -m "更新内容描述"
   git push origin main
   ```

4. **自动部署**: 
   - GitHub推送触发
   - AWS Amplify自动构建
   - 自动部署到 https://no-trace.jp

### 部署监控
- **AWS控制台**: https://console.aws.amazon.com/amplify/
- **GitHub Actions**: https://github.com/kenkakuma/NTE-company-website/actions
- **部署状态徽章**: 已添加到README.md

## 🛠️ 技术栈配置

### 前端技术
- **框架**: Vue 3 + Vite
- **UI库**: Material Design + Bootstrap 5
- **构建工具**: Vite
- **Node版本**: 18.x

### 部署技术
- **云平台**: AWS Amplify
- **CDN**: CloudFront (Amplify自带)
- **SSL**: 自动HTTPS证书
- **域名**: 自定义域名 no-trace.jp

## 🔐 安全配置

### GitHub Token管理
- **Token配置**: 已配置Personal Access Token
- **权限范围**: repo, workflow, actions
- **安全建议**: 定期轮换token，完成部署后可撤销

### AWS权限
- **访问方式**: Amplify服务角色
- **权限范围**: 仅限Amplify部署所需权限
- **无需管理**: SSH密钥、EC2访问权限

## 📁 项目文件结构

### 关键配置文件
```
vue-material-kit/
├── amplify.yml              # Amplify构建配置
├── README.md               # 项目文档
├── package.json            # 依赖配置
├── vite.config.js          # Vite构建配置
├── dist/                   # 构建输出目录
└── src/                    # 源代码目录
```

### 部署相关文件
- `amplify.yml` - AWS Amplify构建指令
- `README.md` - 包含部署状态徽章
- `package.json` - 包含构建脚本

## 🎯 部署最佳实践

### 代码管理
1. **功能分支**: 大改动使用feature分支
2. **测试后合并**: 确保本地测试通过再推送
3. **描述性提交**: 清晰的commit message
4. **及时推送**: 避免本地积累过多更改

### 性能优化
1. **构建优化**: 已配置Vite优化
2. **缓存策略**: node_modules缓存已启用
3. **静态资源**: 图片等资源已优化
4. **CDN加速**: Amplify自动提供全球CDN

### 监控检查
1. **部署状态**: 定期检查Amplify控制台
2. **网站可用性**: 定期访问 https://no-trace.jp
3. **性能监控**: 使用Amplify内置监控
4. **错误日志**: 关注构建和部署日志

## 🚨 故障排除

### 常见问题
1. **构建失败**: 检查package.json依赖版本
2. **部署卡住**: 重新触发Amplify部署
3. **样式缺失**: 检查静态资源路径
4. **功能异常**: 本地preview模式验证

### 紧急处理
1. **回滚版本**: Amplify控制台一键回滚
2. **暂停部署**: 临时禁用自动部署
3. **本地调试**: 使用preview模式排查
4. **联系支持**: AWS技术支持

---

**创建日期**: 2025-06-27  
**最后更新**: 2025-06-28  
**维护人**: NO TRACE EXPLORER开发团队  
**部署状态**: ✅ AWS Amplify自动化部署已配置并测试成功

## 🎯 部署成功验证 (2025-06-27)

### ✅ 首次自动部署测试
- **测试修改**: 浏览器标题 "Vue Material Kit 2" → "NO TRACE EXPLORER"
- **推送时间**: 2025-06-27 16:53 JST
- **部署结果**: ✅ 成功
- **验证URL**: https://no-trace.jp

### 🔧 部署问题排查记录
**初始问题**: 构建在npm版本检查后中断
**解决方案**:
1. 简化amplify.yml配置，移除复杂echo命令
2. 使用npm install替代npm ci（兼容性更好）
3. 添加.nvmrc文件锁定Node.js 18版本

### 📈 部署成功指标
- ✅ Git推送成功
- ✅ Amplify构建完成
- ✅ 自动部署到生产环境
- ✅ 网站功能验证通过
- ✅ SEO元数据更新生效

## 🔒 安全更新记录 (2025-06-28)

### ✅ 敏感信息清理
- **问题**: GitHub检测到Personal Access Token
- **解决**: 移除敏感信息，重写Git历史
- **状态**: 已清理，安全合规
- **建议**: 使用环境变量管理敏感配置