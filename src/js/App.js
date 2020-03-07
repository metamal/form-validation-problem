import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => console.log(JSON.stringify(data, null, 2));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <p>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" name="email" autoComplete="email" ref={register} />
        </p>
        <p>
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
        <p>
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
        <p>
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
        <p>
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
