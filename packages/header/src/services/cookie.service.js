export const getCookie = (name) => {
  const val = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));

  return val ? val.split('=')[1] : null;
};

export const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};
