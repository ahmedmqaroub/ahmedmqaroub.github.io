# Assets Folder

This folder should contain your proof library images.

## Expected Structure

```
public/
└── assets/
    ├── ads/
    │   ├── ad-01.jpg
    │   ├── ad-02.jpg
    │   ├── ad-03.jpg
    │   ├── ad-04.jpg
    │   ├── ad-05.jpg
    │   ├── ad-06.jpg
    │   ├── ad-07.jpg
    │   ├── ad-08.jpg
    │   ├── ad-09.jpg
    │   ├── ad-10.jpg
    │   ├── ad-11.jpg
    │   └── ad-12.jpg
    ├── reviews/
    │   ├── rev-01.jpg
    │   ├── rev-02.jpg
    │   ├── rev-03.jpg
    │   ├── rev-04.jpg
    │   ├── rev-05.jpg
    │   ├── rev-06.jpg
    │   ├── rev-07.jpg
    │   ├── rev-08.jpg
    │   ├── rev-09.jpg
    │   ├── rev-10.jpg
    │   ├── rev-11.jpg
    │   └── rev-12.jpg
    ├── me.jpg (optional profile photo)
    ├── logo.svg (optional logo)
    └── og-image.jpg (optional Open Graph image)
```

## Important Notes

- **Missing images will show graceful placeholders** with expected path labels
- The site is **blank-page-proof** and will never crash due to missing images
- Recommended image sizes:
  - Ads/Reviews: 800x1200px (3:4 aspect ratio)
  - Profile photo: 800x800px (1:1 aspect ratio)
  - OG image: 1200x630px

## Adding Your Images

1. Place your ad screenshots in `public/assets/ads/` folder
2. Place your client review screenshots in `public/assets/reviews/` folder
3. Name them exactly as shown above (ad-01.jpg, ad-02.jpg, etc.)
4. Optionally add profile photo as `me.jpg`
5. Optionally add logo as `logo.svg`
6. Optionally add Open Graph image as `og-image.jpg`

The site will work perfectly even without any images!
