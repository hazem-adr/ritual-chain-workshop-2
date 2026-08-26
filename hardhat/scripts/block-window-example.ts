import {
  createWindow,
  remainingBlocks,
  hasReachedResolution,
  describeWindow,
} from "./lib/block-window";

const market =
  createWindow(
    5000n,
    5200n,
  );

const checkpoints = [
  5000n,
  5050n,
  5100n,
  5150n,
  5200n,
];

console.log(
  describeWindow(market),
);

console.log("");

for (
  const block of checkpoints
) {
  console.log(
    `Current block: ${block}`,
  );

  console.log(
    `Remaining: ${remainingBlocks(
      market,
      block,
    )}`,
  );

  console.log(
    `Ready: ${hasReachedResolution(
      market,
      block,
    )}`,
  );

  console.log("");
}
