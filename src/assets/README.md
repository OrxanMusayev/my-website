# Assets Klasörü

Bu klasör projedeki statik dosyalar için kullanılır.

## Klasör Yapısı

- **images/**: Resim dosyaları (PNG, JPG, SVG, WebP)
  - Hero images
  - Profile photos
  - Background images
  - Company logos

- **icons/**: İkon dosyaları (SVG, PNG)
  - UI icons
  - Social media icons
  - Feature icons

- **fonts/**: Font dosyaları (WOFF, WOFF2, TTF)
  - Custom fonts
  - Web fonts

- **data/**: JSON ve diğer data dosyaları
  - Configuration files
  - Mock data
  - Content data

## Kullanım

Assets dosyaları Angular'da şu şekilde kullanılır:

```typescript
// Component'te
export class MyComponent {
  imagePath = 'assets/images/hero-bg.jpg';
  iconPath = 'assets/icons/check.svg';
}
```

```html
<!-- Template'te -->
<img src="assets/images/profile.jpg" alt="Profile">
<img src="{{imagePath}}" alt="Hero Background">
```

```scss
// SCSS'te
.hero {
  background-image: url('/assets/images/hero-bg.jpg');
}
```
