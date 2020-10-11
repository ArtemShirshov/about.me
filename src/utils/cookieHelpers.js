export function getCookie(name) {
  if (!document) return;

  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)',
    ),
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
}
