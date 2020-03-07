import React from 'react';
import { useForm } from 'react-hook-form';

// As per the HTML5 Specification
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validationResolver(data) {
  const errors = {};
  if (!emailRegExp.test(data.email)) {
    errors.email = { message: 'Must be a valid email address.' };
  }
  if (data.password.length <= 8) {
    errors.password = { message: 'Password must be longer than 8 characters.' };
  }
  if (data.colour === '') {
    errors.colour = { message: 'Colour must be selected.' };
  }
  if (data.animal.length < 2) {
    errors.animal = { message: 'At least two animals must be chosen.' };
  }
  if (data.animal.includes('tiger') && data.tiger_type === '') {
    errors.tiger_type = {
      message:
        'If Tiger is one of the chosen animals then ' +
        'Type of tiger is required to be a non-empty string.',
    };
  }
  return {
    values: data,
    errors,
  };
}

export default function App() {
  const { errors, handleSubmit, register } = useForm({ validationResolver });
  const onSubmit = data => console.log(JSON.stringify(data, null, 2));
  const isValid = name => !errors?.[name];
  const getClass = name => (isValid(name) ? null : 'error');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <p className={getClass('email')}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" name="email" autoComplete="email" ref={register} />
        </p>
        <p className={getClass('password')}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="error"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            ref={register}
          />
        </p>
      </fieldset>

      <fieldset>
        <h3>Your animal</h3>
        <p className={getClass('colour')}>
          <label className="label" htmlFor="colour">
            Colour
          </label>
          <select name="colour" id="colour" ref={register}>
            <option value="">Choose colour</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
          </select>
        </p>
        <p className={getClass('animal')}>
          <span className="label">Animal</span>

          <input type="checkbox" name="animal" value="bear" id="bear" ref={register} />
          <label htmlFor="bear">Bear</label>

          <input type="checkbox" name="animal" value="tiger" id="tiger" ref={register} />
          <label htmlFor="tiger">Tiger</label>

          <input type="checkbox" name="animal" value="snake" id="snake" ref={register} />
          <label htmlFor="snake">Snake</label>

          <input type="checkbox" name="animal" value="donkey" id="donkey" ref={register} />
          <label htmlFor="donkey">Donkey</label>
        </p>
        <p className={getClass('tiger_type')}>
          <label className="label" htmlFor="tiger_type">
            Type of tiger
          </label>
          <input type="text" name="tiger_type" id="tiger_type" ref={register} />
        </p>
      </fieldset>
      <fieldset>
        <p>
          <input type="submit" value="Create account" />
        </p>
      </fieldset>
    </form>
  );
}
