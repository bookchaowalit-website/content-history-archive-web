import { describe, expect, it } from "vitest";
import { eras, findEra, stopNumber } from "@/lib/archive";

describe("archive entries", () => {
  it("holds four synthetic entries in date order with unique ids", () => {
    expect(eras.map((e) => e.id)).toEqual(["river", "road", "press", "signal"]);
    expect(new Set(eras.map((e) => e.id)).size).toBe(eras.length);
  });

  it("gives every entry a question and a hex colour for the ribbon", () => {
    for (const era of eras) {
      expect(era.question.endsWith("?")).toBe(true);
      expect(era.color).toMatch(/^#[0-9a-f]{6}$/);
    }
  });
});

describe("findEra", () => {
  it("returns the matching entry or the first one", () => {
    expect(findEra("press").object).toBe("A printer's proof");
    expect(findEra("unknown").id).toBe("river");
  });
});

describe("stopNumber", () => {
  it("pads to two digits without prefixing a literal zero", () => {
    expect(stopNumber(0)).toBe("01");
    expect(stopNumber(9)).toBe("10");
  });
});
