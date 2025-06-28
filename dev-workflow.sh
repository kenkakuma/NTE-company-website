#!/bin/bash

# NO TRACE EXPLORER 开发工作流程脚本
# 标准化的开发、构建、部署流程

echo "💻 NO TRACE EXPLORER 开发工作流程"
echo "=================================="

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

show_menu() {
    echo ""
    echo "选择操作:"
    echo "1) 🚀 启动开发服务器 (dev)"
    echo "2) 🏗️  构建项目 (build)"
    echo "3) 👀 预览构建版本 (preview)"
    echo "4) 🔄 同步到生产环境 (deploy)"
    echo "5) 🧹 清理缓存重新构建"
    echo "6) 📊 比较本地与生产版本"
    echo "7) ❌ 退出"
    echo ""
}

start_dev() {
    echo -e "${BLUE}🚀 启动开发服务器...${NC}"
    echo "本地开发: http://localhost:3000/"
    npm run dev
}

build_project() {
    echo -e "${BLUE}🏗️ 构建项目...${NC}"
    npm run build
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ 构建完成${NC}"
        echo "构建文件位置: ./dist/"
    fi
}

preview_build() {
    echo -e "${BLUE}👀 启动预览服务器...${NC}"
    echo "构建预览: http://localhost:4173/"
    npm run preview
}

deploy_to_production() {
    echo -e "${BLUE}🔄 同步到生产环境...${NC}"
    ./deploy-sync.sh
}

clean_build() {
    echo -e "${BLUE}🧹 清理缓存...${NC}"
    rm -rf dist node_modules/.vite
    echo -e "${GREEN}✅ 缓存已清理${NC}"
    echo -e "${BLUE}🏗️ 重新构建...${NC}"
    npm run build
}

compare_versions() {
    echo -e "${BLUE}📊 比较本地与生产版本...${NC}"
    
    # 确保有最新的构建
    if [ ! -f "dist/index.html" ]; then
        echo "本地没有构建文件，正在构建..."
        npm run build
    fi
    
    LOCAL_JS=$(grep -o 'index\.[a-f0-9]*\.js' dist/index.html)
    LOCAL_CSS=$(grep -o 'index\.[a-f0-9]*\.css' dist/index.html)
    
    PROD_FILES=$(curl -s https://no-trace.jp | grep -o 'index\.[a-f0-9]*\.\(js\|css\)')
    PROD_JS=$(echo "$PROD_FILES" | grep '\.js$')
    PROD_CSS=$(echo "$PROD_FILES" | grep '\.css$')
    
    echo ""
    echo "📁 本地构建版本:"
    echo "   JS:  $LOCAL_JS"
    echo "   CSS: $LOCAL_CSS"
    echo ""
    echo "🌐 生产环境版本:"
    echo "   JS:  $PROD_JS"
    echo "   CSS: $PROD_CSS"
    echo ""
    
    if [ "$LOCAL_JS" = "$PROD_JS" ] && [ "$LOCAL_CSS" = "$PROD_CSS" ]; then
        echo -e "${GREEN}✅ 版本一致！${NC}"
    else
        echo -e "${YELLOW}⚠️ 版本不同步！建议运行部署同步${NC}"
    fi
}

# 主循环
while true; do
    show_menu
    read -p "请选择 (1-7): " choice
    
    case $choice in
        1) start_dev ;;
        2) build_project ;;
        3) preview_build ;;
        4) deploy_to_production ;;
        5) clean_build ;;
        6) compare_versions ;;
        7) echo "👋 再见！"; exit 0 ;;
        *) echo "无效选择，请重试" ;;
    esac
    
    echo ""
    read -p "按回车键继续..."
done