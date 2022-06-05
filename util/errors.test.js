import { describe, it } from "vitest";
import { HttpError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided status code, message and data", () => {
    const testStatus = 1;
    const testMessage = "test";
    const testData = { key: "test" };

    const testError = new HttpError();
  });
});
