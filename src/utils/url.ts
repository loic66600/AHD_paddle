export const withBase = (path: string): string => {
  const rawBase = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  if (!path || path === '/') {
    return normalizedBase;
  }

  if (path.startsWith('#')) {
    return path;
  }

  if (/^(?:[a-z+.-]+:)?\/\//i.test(path) || /^(?:mailto|tel|data):/i.test(path)) {
    return path;
  }

  const [pathname = '', hash] = path.split('#');
  const trimmedPath = pathname.replace(/^\/+/, '').replace(/\/+/g, '/');

  let resolved = normalizedBase;
  if (trimmedPath.length > 0) {
    resolved += trimmedPath;
    if (pathname.endsWith('/') && !resolved.endsWith('/')) {
      resolved += '/';
    }
  }

  if (hash) {
    resolved += `#${hash}`;
  }

  return resolved;
};
