export type BlockWindow = {
  created: bigint;
  resolve: bigint;
};

export function createWindow(
  created: bigint,
  resolve: bigint,
): BlockWindow {
  if (created < 0n) {
    throw new Error(
      "Creation block cannot be negative",
    );
  }

  if (resolve < created) {
    throw new Error(
      "Resolution block cannot precede creation",
    );
  }

  return {
    created,
    resolve,
  };
}

export function length(
  window: BlockWindow,
): bigint {
  return (
    window.resolve -
    window.created
  );
}

export function hasStarted(
  window: BlockWindow,
  current: bigint,
): boolean {
  return (
    current >=
    window.created
  );
}

export function hasReachedResolution(
  window: BlockWindow,
  current: bigint,
): boolean {
  return (
    current >=
    window.resolve
  );
}

export function remainingBlocks(
  window: BlockWindow,
  current: bigint,
): bigint {
  if (
    current >=
    window.resolve
  ) {
    return 0n;
  }

  return (
    window.resolve -
    current
  );
}

export function describeWindow(
  window: BlockWindow,
): string {
  return [
    `created=${window.created}`,
    `resolve=${window.resolve}`,
    `length=${length(window)}`,
  ].join(" ");
}
