# On Call Home Care LLC website

Static website for On Call Home Care LLC. It runs on GitHub Pages with no build step.

## Files

- `index.html` home page
- `services.html`, `about.html`, `careers.html`, `contact.html`, `privacy.html`
- `404.html` page-not-found page (GitHub Pages uses it automatically)
- `css/style.css` all styles
- `js/main.js` mobile menu and form handling
- `img/logo.jpg`, `img/favicon.png`
- `.nojekyll` tells GitHub Pages to serve the files as they are

## Publish on GitHub Pages

1. Copy every file and folder in this package into the root of the repository
   `anish-katuwal69/OnCallHomeCareLLC.github.io` (including the hidden `.nojekyll` file).
2. Commit and push:
   ```
   git add .
   git commit -m "Add website"
   git push origin main
   ```
3. On GitHub, open the repository, then Settings, then Pages.
   Under "Build and deployment", choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at
   `https://anish-katuwal69.github.io/OnCallHomeCareLLC.github.io/`

## Use your own domain (oncallhomecarelife.com)

1. In Settings, then Pages, enter `oncallhomecarelife.com` under "Custom domain" and save.
   GitHub adds a `CNAME` file to the repository.
2. At your domain registrar, add these DNS records:
   - Four `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record for `www` pointing to `anish-katuwal69.github.io`
3. When the domain check passes, tick "Enforce HTTPS".

## Forms

GitHub Pages cannot receive form data. Right now the contact and job forms open the
visitor's email app with the message filled in, addressed to support@oncallhomecarelife.com.

To receive submissions directly instead, create a free form at formspree.io, then in
`contact.html` and `careers.html` change `<form data-mailto="...">` to
`<form action="https://formspree.io/f/YOUR_ID" method="POST">`.

## Editing contact details

Phone, email, address, counties and page text are in the HTML files. Search for
`(318) 582-8684` or `support@oncallhomecarelife.com` to update them everywhere.
