// @vitest-environment happy-dom
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { EraView, ThreadView } from "@/components/archive-views";
import { eras } from "@/lib/archive";
import Home from "@/app/page";
import EraPage, { generateMetadata, generateStaticParams } from "@/app/entries/[id]/page";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import nextConfig from "../next.config";

const page = (node: React.ReactNode) => {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(<>{node}</>);
  return host;
};
const texts = (host: Element, selector: string) => [...host.querySelectorAll(selector)].map((el) => el.textContent);
const params = (id: string) => ({ params: Promise.resolve({ id }) });

describe("the thread", () => {
  it("lists the four objects in order, each opening its own page, and says the entries are synthetic", () => {
    const host = page(<Home />);
    expect(host.querySelectorAll("h1").length).toBe(1);
    expect(texts(host, ".rs-entry-link")).toEqual(["The river keeps score", "The road changes shape", "A page travels farther", "The room hears a signal"]);
    expect(host.querySelector(".rs-entry-link")?.getAttribute("href")).toBe("/entries/river");
    expect(host.textContent).toContain("03.2000 BCE · A clay tally mark");
    expect(host.querySelector(".rs-count")?.textContent).toBe("4 objects, oldest first");
    expect(host.querySelector(".rs-lede")?.textContent).toContain("synthetic study notes");
    expect(host.querySelector(".rs-foot")?.textContent).toContain("not an authoritative history");
    expect(host.querySelector('.rs-foot a[href="https://bookchaowalit.com/"]')?.textContent).toBe("More projects");
  });

  it("has a nothing-yet state", () => {
    expect(page(<ThreadView eras={[]} />).querySelector(".rs-empty h2")?.textContent).toBe("No entries yet");
  });
});

describe("entry pages", () => {
  it("shows the label, the question and earlier / later along the thread", () => {
    const host = page(<EraView era={eras[1]} eras={eras} />);
    expect(host.querySelector("h1")?.textContent).toBe("The road changes shape");
    expect(host.querySelector(".rs-prose blockquote")?.textContent).toBe("Who gets to move when a road is made?");
    expect(host.querySelector('.rs-pager a[rel="prev"]')?.getAttribute("href")).toBe("/entries/river");
    expect(host.querySelector('.rs-pager a[rel="next"]')?.getAttribute("href")).toBe("/entries/press");
    expect(host.textContent).toContain("This study entry is synthetic.");
  });

  it("renders every real entry page and 404s an unknown id", async () => {
    for (const { id } of generateStaticParams()) {
      expect(page(await EraPage(params(id))).querySelectorAll("h1").length).toBe(1);
      expect((await generateMetadata(params(id))).title).toBeTruthy();
    }
    expect(await generateMetadata(params("missing"))).toEqual({});
    await expect(EraPage(params("missing"))).rejects.toThrow();
  });
});

describe("share data", () => {
  it("gives each entry its own share title, description and URL", async () => {
    const meta = await generateMetadata(params("press"));
    expect(meta.openGraph).toMatchObject({ url: "https://history.bookchaowalit.com/entries/press", title: "A page travels farther", type: "article" });
    expect(meta.twitter).toMatchObject({ title: "A page travels farther" });
  });
});

describe("site files", () => {
  it("uses the site's own domain and sends /more-projects to the main site", async () => {
    expect(sitemap().map((u) => u.url)).toContain("https://history.bookchaowalit.com/entries/signal");
    expect(robots().sitemap).toBe("https://history.bookchaowalit.com/sitemap.xml");
    expect(await nextConfig.redirects!()).toContainEqual({ source: "/more-projects", destination: "https://bookchaowalit.com/", permanent: true });
  });
});
