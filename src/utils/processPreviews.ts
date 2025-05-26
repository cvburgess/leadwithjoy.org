import { Page } from "lume/core/file.ts";

import { fetchOgData } from "./fetchOgData.ts";

const processPreview = async (page: Page) => {
  const elements = page.document?.querySelectorAll("a") ?? [];
  for (const element of elements) {
    const shouldHydratePreview = element.textContent === "preview";

    if (shouldHydratePreview) {
      const url = element.getAttribute("href")!;
      const props = await fetchOgData(url);
      const html = await page.data.comp.preview(props);
      const newElement = htmlToElement(html, page.document!);
      element.parentElement!.replaceWith(newElement);
    }
  }
};

export const processPreviews = async (pages: Page[]) => {
  await Promise.all(pages.map(processPreview));
};

export const htmlToElement = (
  html: string,
  document: Document,
): ChildNode => {
  const template = document.createElement("template");
  template.innerHTML = html.trim(); // Never return a text node of whitespace as the result
  return template.content.firstChild!;
};
