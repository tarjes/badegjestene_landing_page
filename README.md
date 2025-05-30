# Badegjestene Partyband Landing Page

This is the source code for the Badegjestene partyband landing page. The site is a modern, mobile-friendly one-pager with a dark theme, fullscreen carousel, song list, band member section, booking form, and social links.

## Project Structure

- `index.html` — Main one-page website.
- `about_us.html` — Standalone About Us page (not linked in main navigation).
- `our_songs.html` — Standalone Song List page (not linked in main navigation).
- `styles.css` — All site styles.
- `images/` — All images (logo, carousel, band members, backgrounds, etc).
- `README.md` — This file.

## Editing Content

- **Images:** Place all images in the `images/` folder. Update image references in HTML as `src="images/your_image.png"`.
- **Song List:** Edit the song list in `index.html` and `our_songs.html` as needed.
- **Band Members:** Update the About Us section in `index.html` for member info and photos.
- **Booking Form:** The booking form is static and connected to Formspree
- **Social Links:** Update social media URLs at the bottom of `index.html`.

## Styling

- All styles are in `styles.css`. Adjust colors, layout, or responsiveness here.
- The main background color is `#1a1e28`. Only `index.html` uses a background image (set via a CSS class).

## Adding/Changing Carousel Images

1. Place new images in the `images/` folder.
2. Update the carousel image list in `index.html` (JavaScript section).

## Local Development

1. Open the project folder in VS Code or your preferred editor.
2. Use the Live Server extension or open `index.html` directly in your browser.
3. For changes to appear, refresh the browser after saving files.

## Deployment

- The site is static and can be hosted on GitHub Pages or any static web host.
- For GitHub Pages, push to the `main` branch and enable Pages in repository settings.
- For a custom domain, add a `CNAME` file with your domain name.

## Maintenance Tips

- Keep all images in the `images/` folder for consistency.
- Test on both desktop and mobile after making changes.
- If you add new sections, update both HTML and CSS as needed.
- Backup before major changes.

## Troubleshooting

- If images do not appear, check the file path and ensure the image is in the `images/` folder.
- If styles are missing, ensure `styles.css` is linked correctly in all HTML files.
- For white flashes on load, ensure the background color is set on both `html` and `body` in CSS.

---
For questions or help, contact the site maintainer or the Badegjestene band.
