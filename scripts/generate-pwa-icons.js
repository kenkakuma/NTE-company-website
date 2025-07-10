// PWA图标生成脚本
// 这个脚本创建基础的PWA图标占位符
const fs = require('fs')
const path = require('path')

// 创建SVG图标内容
const createSVGIcon = (size) => {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#gradient)" />
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.15}" font-weight="bold" 
        fill="white" text-anchor="middle" dominant-baseline="central">NTE</text>
  <text x="50%" y="${size * 0.75}" font-family="Arial, sans-serif" font-size="${size * 0.08}" 
        fill="rgba(255,255,255,0.9)" text-anchor="middle" dominant-baseline="central">Explorer</text>
</svg>`
}

// PWA图标尺寸
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512]

// 创建icons目录
const iconsDir = path.join(__dirname, '..', 'public', 'icons')
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true })
}

// 生成SVG图标
iconSizes.forEach(size => {
  const svgContent = createSVGIcon(size)
  const filename = `icon-${size}x${size}.svg`
  const filepath = path.join(iconsDir, filename)
  
  fs.writeFileSync(filepath, svgContent)
  console.log(`Generated: ${filename}`)
})

// 创建特殊用途图标
const specialIcons = [
  { name: 'coffee-96x96.svg', text: 'COFFEE', subtitle: 'コーヒー' },
  { name: 'contact-96x96.svg', text: 'CONTACT', subtitle: 'お問合せ' }
]

specialIcons.forEach(icon => {
  const svgContent = `<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="96" height="96" rx="19.2" fill="url(#gradient)" />
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="12" font-weight="bold" 
        fill="white" text-anchor="middle" dominant-baseline="central">${icon.text}</text>
  <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="8" 
        fill="rgba(255,255,255,0.9)" text-anchor="middle" dominant-baseline="central">${icon.subtitle}</text>
</svg>`
  
  const filepath = path.join(iconsDir, icon.name)
  fs.writeFileSync(filepath, svgContent)
  console.log(`Generated: ${icon.name}`)
})

// 创建favicon.ico占位符（实际项目中应该使用真实的ico文件）
const faviconPath = path.join(__dirname, '..', 'public', 'favicon.ico')
const appleTouchIconPath = path.join(__dirname, '..', 'public', 'apple-touch-icon.png')
const maskedIconPath = path.join(__dirname, '..', 'public', 'masked-icon.svg')

// 创建基础favicon SVG
const faviconSVG = createSVGIcon(32)
fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon.svg'), faviconSVG)

// 创建masked-icon.svg (用于Safari)
const maskedIconSVG = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.4 0h19.2c3.5 0 6.4 2.9 6.4 6.4v19.2c0 3.5-2.9 6.4-6.4 6.4H6.4C2.9 32 0 29.1 0 25.6V6.4C0 2.9 2.9 0 6.4 0z" fill="black"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="5" font-weight="bold" 
        fill="white" text-anchor="middle" dominant-baseline="central">NTE</text>
</svg>`
fs.writeFileSync(maskedIconPath, maskedIconSVG)

console.log('PWA图标生成完成！')
console.log('注意：这些是SVG占位符图标。在生产环境中，建议使用专业设计的PNG图标。')