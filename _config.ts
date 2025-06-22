import lume from "lume/mod.ts";
import { Page } from "lume/core/file.ts";

import resolveUrls from "lume/plugins/resolve_urls.ts";
import checkUrls from "lume/plugins/check_urls.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import pagefind from "lume/plugins/pagefind.ts";
import toc from "https://deno.land/x/lume_markdown_plugins/toc.ts";

import anchor from "npm:markdown-it-anchor";

import mdItObsidianCallouts from "markdown-it-obsidian-callouts";

import { processPreviews } from "./src/utils/processPreviews.ts";

const BASE_URL = "https://leadwithjoy.org";

const site = lume({
  location: new URL(BASE_URL),
  server: {
    debugBar: false, // disable the debug bar
  },
  src: "./src",
  watcher: {
    ignore: ["/_data/ogCache.json"],
  },
});

site.use(resolveUrls());
site.use(checkUrls());
site.use(jsx());
site.use(tailwindcss());
site.use(pagefind());
site.use(toc());

// --------- PREPROCESS FILES ---------- //

// Enable "edit on GitHub" links with 11ty-style polyfill
site.preprocess("*", (pages: Page[]) => {
  pages.forEach((page) => page.data.inputPath = page.src.path + page.src.ext);
});

// 1. Hydrate link previews into rich components
// 2. Set all external links to open in a new tab
site.process([".html"], async (pages) => {
  await processPreviews(pages);
  pages.forEach((page) => {
    page.document?.querySelectorAll('a[href^="http"]').forEach((a) => {
      a.setAttribute("target", "_blank");
    });
  });
});

// --------- MARKDOWN PLUGINS ---------- //

site.hooks.addMarkdownItPlugin(anchor, {
  level: 2,
  permalink: anchor.permalink.headerLink(),
});

site.hooks.addMarkdownItPlugin(mdItObsidianCallouts);

// --------- PUBLIC FILES ---------- //

site.add([".css"]);
site.add("scripts"); // Add JavaScript files
site.add([".jpg", ".jpeg", ".gif", ".png", ".webp", ".svg", ".ico"]);

// --------- FILTERS ---------- //

export const makeAbsoluteUrl = (path: string) => `${BASE_URL}${path}`;

site.filter("absoluteUrl", makeAbsoluteUrl);

export const makeOgImage = (image = "default") =>
  makeAbsoluteUrl(`/img/og/og-${image}.jpg`);

site.filter("og", makeOgImage);

site.filter("hostname", (url: string) => new URL(url).hostname);

site.filter("localDate", (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
});

site.filter("episodeNumber", (value = 0) => {
  const leadingZeros = "0".repeat(3 - value.toString().length);
  return `${leadingZeros}${value}`;
});

// Convert an array of tags to an single search term
// [Article Title, ["foo", "bar", "buzz lightyear"]] => "title!='Article Title' layout=post.njk 'foo'|'bar'|'buzz lightyear'"
// https://lume.land/plugins/search/#searching-pages
const handleSpaces = (tags: string[]) =>
  tags.map((tag) => tag.includes(" ") ? `'${tag}'` : tag);

site.filter(
  "searchTags",
  ([title, tags]: [string, string[]]) =>
    `title!='${title}' layout=post.njk ${handleSpaces(tags).join("|")}`,
);

site.helper("button", (text, link, classes) => {
  // const isInternal = link?.startsWith("/");
  // const arrow = isInternal ? "→" : "↗";
  const target = link?.startsWith("/")
    ? `target="_self"`
    : `target="_blank" rel="noopener"`;
  return `<div class="button ${classes || ""
    }"><a href="${link}" ${target}><span>${text}</span></a></div>`;
}, { type: "tag" });

export default site;
