#!/bin/bash

echo "=== Vue Material Kit 服务器启动脚本 ==="

# 检查端口占用
echo "检查端口占用情况..."
lsof -i :3000 2>/dev/null && echo "端口3000已被占用" || echo "端口3000空闲"
lsof -i :4173 2>/dev/null && echo "端口4173已被占用" || echo "端口4173空闲"

echo ""
echo "=== 可用的启动方式 ==="
echo "1. 开发模式: npm run dev (端口3000)"
echo "2. 预览模式: npm run preview (端口4173)"
echo "3. 手动HTTP服务器: python3 -m http.server 8000 (在dist目录)"

echo ""
echo "=== 访问地址 ==="
echo "开发模式: http://localhost:3000/"
echo "预览模式: http://localhost:4173/"
echo "网络地址: http://192.168.3.4:3000/ 或 http://192.168.3.4:4173/"

echo ""
echo "如果无法访问，请检查:"
echo "- 防火墙设置"
echo "- 浏览器是否阻止了localhost访问"
echo "- 尝试使用网络地址访问"