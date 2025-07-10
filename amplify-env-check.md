# AWS Amplify Environment Configuration for Nuxt 3

## 必需的环境变量设置

在AWS Amplify控制台中设置以下环境变量：

### 1. Node.js 环境
```
_LIVE_UPDATES = [{"name":"Node.js version","pkg":"node","type":"nvm","version":"20.9.0"}]
```

### 2. 构建优化
```
AMPLIFY_DIFF_DEPLOY = false
AMPLIFY_MONOREPO_APP_ROOT = 
NODE_OPTIONS = --max-old-space-size=4096
```

### 3. Nuxt 3 特定配置
```
NITRO_PRESET = static
NODE_ENV = production
```

## 构建配置验证

确保amplify.yml中的以下设置正确：

1. **baseDirectory**: `.output/public` (Nuxt 3输出目录)
2. **build command**: `npm run generate` (静态站点生成)
3. **Node版本**: 20.9.0 (兼容Nuxt 3)

## 故障排除

如果JavaScript文件仍然404：

1. 在Amplify控制台检查构建日志
2. 确认`.output/public/_nuxt/`目录包含所有JS文件
3. 检查CloudFront缓存是否需要清除
4. 验证构建过程中没有权限错误

## 部署后验证

- [ ] 导航栏正常工作
- [ ] JavaScript交互功能正常
- [ ] 移动端菜单可正常打开/关闭
- [ ] 管理中心(/admin)可访问
- [ ] 所有CSS样式正确加载