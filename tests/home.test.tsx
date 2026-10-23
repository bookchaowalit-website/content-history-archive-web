import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("home page", () => {
  it("renders the thread of four objects, the first label and the synthetic-record notices", () => {
    const html = renderToString(<Home />);
    expect(html).toContain("small signal.");
    for (const object of ["A clay tally mark", "A road milestone", "A printer&#x27;s proof", "A radio transcript"]) expect(html).toContain(object);
    expect(html).toContain("The river keeps score");
    expect(html).toContain("--era:#c46b45");
    expect(html).toContain("SYNTHETIC RECORD");
    expect(html).toContain("Study entry is synthetic.");
    expect(html).toContain("NOT AN AUTHORITATIVE HISTORY");
  });
});
