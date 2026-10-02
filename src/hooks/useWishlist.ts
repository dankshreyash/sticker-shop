"use client";

import { useSyncExternalStore, useCallback } from "react";

const WISHLIST_KEY = "stickerlab_wishlist";

function readStorage(): string {
  if (typeof window === "undefined") return "[]";
  try {
    return localStorage.getItem(WISHLIST_KEY) || "[]";
  } catch {
    return "[]";
  }
}

let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(callback: () => void) {
  listeners = [...listeners, callback];
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function getSnapshot(): string {
  return readStorage();
}

function getServerSnapshot(): string {
  return "[]";
}

export function useWishlist() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ids: number[] = JSON.parse(stored);

  const toggle = useCallback((id: number) => {
    const current: number[] = JSON.parse(readStorage());
    const next = current.includes(id)
      ? current.filter((i) => i !== id)
      : [...current, id];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
    emitChange();
  }, []);

  const isLiked = useCallback(
    (id: number) => ids.includes(id),
    [ids]
  );

  return { ids, toggle, isLiked };
}
