<h1 align="center">Lead with Joy</h1>

[![Header image](src/img/joy.png)](https://leadwithjoy.org/)

<p align="center">
  Tools and insights to help engineering leaders change how we work, together.
</p>

## Getting Started

1. Install the latest version of [Deno](https://deno.com/)
2. Run `deno task serve` to run the site locally

## Organization of `/src`

- **_components**: [Vento](https://vento.js.org/) components to be used with Lume's component system
- **_data**: Dynamic data files used for generating pages and keeping things up-to-date
- **_includes**: Layout files and partials
- **img**: Image files for anything not-post-related
- **posts**: All posts (.md) and their attachments / related files
  - **_assets**: Files attached to posts like images, audio, or PDFs
  - **_templates**: Markdown files for making new posts with [Obsidian](https://obsidian.md/) or any editor
- **scripts**: Script files to be imported with script tags in HTML
- **utils**: Helpers and utilities for [Lume](https://lume.land/)

**NOTE:** Any folder prefixed with `_` will not be indexed by Lume as user-accessible pages.

## Contributing

Catch a typo? Have an idea for a post?

Send an email or open a PR!

## Sponsoring

Love the Lead with Joy project?

Support it on [GitHub Sponsors](https://github.com/cvburgess) or [Patreon](https://patreon.com/cvburgess).
