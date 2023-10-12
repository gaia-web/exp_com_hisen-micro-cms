export function startViewTransition(callback: () => void) {
  if ((document as any).startViewTransition) {
    (document as any).startViewTransition(() => callback());
    return;
  }
  callback();
}
