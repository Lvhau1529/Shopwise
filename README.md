# Logistic-Shop

# Code Style
## PUG
extend includes/layout.pug

block pages
  // Your PUG/HTML Code

## SASS
- Các màu và biến sẽ được khai báo trong /assets/css/variables.scss
- Chia css theo các page, mỗi page sẽ có style riêng sẽ được chia vào /assets/css/pages (lưu thành từng folder)
- Các components dùng chung sẽ được style vào /assets/css/components (lưu thành từng folder)
- Chú ý file main.scss sẽ build tất cả css nên nhớ import file scss mình đã làm vào

# Run Project
- npm install
- gulp dev (development)
- gulp build (build production)