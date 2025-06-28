#!/bin/bash

# NO TRACE EXPLORER 部署同步脚本
# 确保本地预览版本与生产版本一致

echo "🚀 NO TRACE EXPLORER 部署同步脚本"
echo "================================="

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 步骤1: 检查Git状态
echo -e "${BLUE}📋 步骤1: 检查Git状态${NC}"
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}❌ 发现未提交的修改，请先处理：${NC}"
    git status --short
    read -p "是否要自动添加并提交所有修改? (y/N): " auto_commit
    if [[ $auto_commit =~ ^[Yy]$ ]]; then
        git add .
        echo "请输入提交信息:"
        read commit_message
        git commit -m "$commit_message

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
        echo -e "${GREEN}✅ 修改已提交${NC}"
    else
        echo -e "${RED}❌ 请手动处理未提交的修改后重新运行${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ Git状态干净${NC}"
fi

# 步骤2: 清理构建缓存
echo -e "${BLUE}📋 步骤2: 清理构建缓存${NC}"
if [ -d "dist" ]; then
    rm -rf dist
    echo -e "${GREEN}✅ 清理旧的dist目录${NC}"
fi

if [ -d "node_modules/.vite" ]; then
    rm -rf node_modules/.vite
    echo -e "${GREEN}✅ 清理Vite缓存${NC}"
fi

# 步骤3: 重新构建
echo -e "${BLUE}📋 步骤3: 重新构建项目${NC}"
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 构建成功${NC}"
else
    echo -e "${RED}❌ 构建失败${NC}"
    exit 1
fi

# 步骤4: 获取构建文件信息
echo -e "${BLUE}📋 步骤4: 获取构建文件信息${NC}"
LOCAL_JS=$(grep -o 'index\.[a-f0-9]*\.js' dist/index.html)
LOCAL_CSS=$(grep -o 'index\.[a-f0-9]*\.css' dist/index.html)
echo "本地构建文件:"
echo "  JS:  $LOCAL_JS"
echo "  CSS: $LOCAL_CSS"

# 步骤5: 推送到GitHub
echo -e "${BLUE}📋 步骤5: 推送到GitHub${NC}"
git push origin main
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 推送成功${NC}"
else
    echo -e "${RED}❌ 推送失败${NC}"
    exit 1
fi

# 步骤6: 等待部署并验证
echo -e "${BLUE}📋 步骤6: 等待AWS Amplify部署${NC}"
echo "正在等待部署完成..."

# 等待部署的函数
wait_for_deployment() {
    local max_attempts=20
    local attempt=1
    local wait_time=15
    
    while [ $attempt -le $max_attempts ]; do
        echo "检查部署状态 (${attempt}/${max_attempts})..."
        
        # 获取生产版本的文件名
        PROD_FILES=$(curl -s https://no-trace.jp | grep -o 'index\.[a-f0-9]*\.\(js\|css\)')
        PROD_JS=$(echo "$PROD_FILES" | grep '\.js$')
        PROD_CSS=$(echo "$PROD_FILES" | grep '\.css$')
        
        echo "生产版本文件:"
        echo "  JS:  $PROD_JS"
        echo "  CSS: $PROD_CSS"
        
        # 检查是否匹配
        if [ "$LOCAL_JS" = "$PROD_JS" ] && [ "$LOCAL_CSS" = "$PROD_CSS" ]; then
            echo -e "${GREEN}🎉 部署成功！本地和生产版本已同步${NC}"
            echo "✅ 验证URL: https://no-trace.jp"
            return 0
        fi
        
        echo "版本还未同步，等待 ${wait_time} 秒后重试..."
        sleep $wait_time
        ((attempt++))
    done
    
    echo -e "${YELLOW}⚠️ 部署可能需要更多时间，请稍后手动验证${NC}"
    return 1
}

wait_for_deployment

# 步骤7: 启动本地预览验证
echo -e "${BLUE}📋 步骤7: 本地预览验证${NC}"
echo "启动本地预览服务器进行最终验证..."
echo "本地预览: http://localhost:4173/"
echo "生产网站: https://no-trace.jp"
echo ""
echo -e "${GREEN}🎯 同步完成！现在两个版本应该一致了${NC}"

# 可选：启动预览服务器
read -p "是否启动本地预览服务器? (y/N): " start_preview
if [[ $start_preview =~ ^[Yy]$ ]]; then
    npm run preview
fi