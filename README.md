Edge Side Includes (ESI)
========================

This project implements a [Cloudflare Worker](https://developers.cloudflare.com/workers/) that processes [Edge Side Includes](https://en.wikipedia.org/wiki/Edge_Side_Includes) according to [ESI 1.0](https://www.w3.org/TR/esi-lang/) specification.

**Features:**
- Concurrent fetching of `<esi:include>` fragments
  - Absolute and root-relative resource URLs
  - Fallback to alternative URL upon failure
- Recursive ESI template processing

## Installation

**Steps:**
1. Clone the repository
2. Install [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler)
3. Create `wrangler.toml`:
    ```toml
    name = "esi"
    type = "webpack"
    account_id = "abcdef1234567890abcdef1234567890"
    zone_id = "1234567890abcdef1234567890abcdef"
    route = "example.com/*"
    ```
    Replace placeholders with values specific to your project. 
4. Initialize the project
    ```bash
    npm install
    ```
5. Deploy the Worker
    ```bash
    npm run deploy
    ```

## Usage

Reuse HTML content across pages of your website.

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Example website</title>
</head>
<body>
  <esi:include src="/_header.html" onerror="continue">
  <main>Example content...</main>
  <esi:include src="/_footer.html" onerror="continue">
</body>
</html>
```

`_header.html`
```html
<nav>
  <a href="https://example.com/">Home</a>
</nav>
```

`_footer.html`
```html
<footer>
  Copyright © Upscale Software. All rights reserved.
</footer>
```

## Contributing

Pull Requests with fixes and improvements are welcome!

## License

Copyright © Upscale Software. All rights reserved.

Licensed under the [Apache License, Version 2.0](https://github.com/upscalesoftware/cloudflare-esi/blob/master/LICENSE.txt).