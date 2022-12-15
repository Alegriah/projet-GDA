import { useState } from 'react';


export default function FerieEtRttForm({ addFerieEtRtt }) {
  let [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const newFerieEtRtt = {
      id: crypto.randomUUID(),
      dates: form.dates.value,
      type: form.type.value,
      jour: form.jour.value,
      commentaires: form.commentaires.value,
      editable: false
    };
    if (newFerieEtRtt.dates && newFerieEtRtt.type && newFerieEtRtt.jour && newFerieEtRtt.commentaires) {
      addFerieEtRtt(newFerieEtRtt);
      setError('');
      form.reset();
    }
    else {
      setError("Oh, t'as pas oublié quelque chose là ?");
    }
  }

  function getInputForm(name, placeholder, type = 'text') {
    return (
      <div className="form-floating m-1">
        <input
          id={name}
          name={name}
          type={type}
          step={type === 'number' ? 'any' : ''}
          autoComplete='off'
          className="form-control"
          placeholder={placeholder} />
        <label
          htmlFor={name}
          className="form-label">
            { placeholder }
          </label>
      </div>
    );
  }
  
  return (
    <>
      <div className={`alert alert-danger mb-0 ${error ? '' : 'd-none'}`}>
        { error }
        <button
          onClick={() => setError('')}
          className="btn btn-close">
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-center"
        style={{ minWidth: '300px' }}>
        { getInputForm('dates', 'Date du jour') }
        { getInputForm('type', 'Type du jour') }
        { getInputForm('jour', 'Journée concernée') }
        { getInputForm('commentaires', 'commentaires') }
        <button
          type="submit"
          className="btn btn-success">
            Ajouter journée.
        </button>
      </form>
    </>
  );
}
