import { describe, expect, it } from "vitest"

import foo from "../src"

describe("Foo", () => {
  it('Should be return "bar"', () => {
    expect(foo()).toBe("bar")
  })
})
