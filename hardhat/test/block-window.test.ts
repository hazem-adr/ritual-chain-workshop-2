import { expect } from "chai";

import {
  createWindow,
  length,
  hasStarted,
  hasReachedResolution,
  remainingBlocks,
  describeWindow,
} from "../scripts/lib/block-window";

describe("block window", function () {
  const window =
    createWindow(
      1000n,
      1200n,
    );

  it("stores both block numbers", function () {
    expect(
      window.created,
    ).to.equal(1000n);

    expect(
      window.resolve,
    ).to.equal(1200n);
  });

  it("calculates the window length", function () {
    expect(
      length(window),
    ).to.equal(200n);
  });

  it("recognizes the beginning", function () {
    expect(
      hasStarted(
        window,
        1000n,
      ),
    ).to.equal(true);
  });

  it("recognizes the resolution point", function () {
    expect(
      hasReachedResolution(
        window,
        1200n,
      ),
    ).to.equal(true);
  });

  it("shows remaining blocks", function () {
    expect(
      remainingBlocks(
        window,
        1100n,
      ),
    ).to.equal(100n);
  });

  it("returns zero after resolution", function () {
    expect(
      remainingBlocks(
        window,
        1300n,
      ),
    ).to.equal(0n);
  });

  it("describes the window", function () {
    expect(
      describeWindow(window),
    ).to.contain(
      "length=200",
    );
  });

  it("rejects reversed blocks", function () {
    expect(() =>
      createWindow(
        1200n,
        1000n,
      ),
    ).to.throw();
  });
});
