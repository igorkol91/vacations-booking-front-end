import jwt from 'jwt-decode';

const URL = 'http://localhost:3000/api/v1/';

const handleError = (err) => {
  console.warn(err);
  return new Response(JSON.stringify(
    { errors: ['Connection failed!', 'Server is down!'] },
  ));
};

export const authUser = async (data) => {
  const req = await (fetch(`${URL}users/sign_in`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      email: data.email,
      password: data.password,

    }), // body data type must match "Content-Type" header
  })).catch((e) => {
    console.log(e);
  });

  const res = await req.json();

  if (res.token) {
    localStorage.setItem('token', res.token);
    const user = jwt(res.token);
    res.details = user.sub;
    return res;
  }
  return res;
};

export const regUser = async (data) => {
  const req = await (fetch(`${URL}users`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({

      username: data.username,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,

    }), // body data type must match "Content-Type" header
  })).catch(handleError);
  if (req.ok) {
    const res = await req.json();
    if (res.token) {
      localStorage.setItem('token', res.token);
      const user = jwt(res.token);
      res.details = user.sub;
      return res;
    }
    console.log(res);
    return res;
  }
  return Promise.reject(req);
};