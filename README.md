# Badegjestene Partyband Landing Page

This is the source code for the Badegjestene landing page. The site is a mobile-friendly static website with a main homepage plus dedicated pages for bryllup, event, fest, and om oss.

## Project Structure

- `index.html` — Main homepage.
- `base.css` — Shared site styles.
- `base.js` — Shared site interactions.
- `bryllup.html`, `event.html`, `fest.html`, `om_oss.html` — Supporting pages.
- `images/` — All images (logo, carousel, band members, backgrounds, etc).
- `README.md` — This file.

## Editing Content

- **Images:** Place all images in the `images/` folder. Update image references in HTML as `src="images/your_image.png"`.
- **Homepage:** Edit hero, arrangement cards, and booking in `index.html`.
- **Song List:** Edit the song list in `om_oss.html` as needed.
- **Band Members:** Update the About Us section in `om_oss.html` for member info and photos.
- **Booking Form:** Forms are static and connected to Formspree.
- **Social Links:** Update social media URLs in the relevant HTML files.

## Styling

- Shared styles are in `base.css`. Adjust colors, layout, or responsiveness there.
- Page-specific content is handled in the individual HTML files.

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

## Troubleshooting

- If images do not appear, check the file path and ensure the image is in the `images/` folder.
- If styles are missing, ensure `base.css` is linked correctly in all HTML files.
- For white flashes on load, ensure the background color is set on both `html` and `body` in CSS.

---
For questions or help, contact the site maintainer or the Badegjestene band.
