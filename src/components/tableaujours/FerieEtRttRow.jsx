import { useState } from 'react'

export default function FerieEtRttRow({ FerieEtRtt, deleteListe, toggleEditListe }) {
  const [date, setDate] = useState(FerieEtRtt.date)
  const [type, setType] = useState(FerieEtRtt.type)
  const [jour, setJour] = useState(FerieEtRtt.jour)
  const [commentaires, setCommentaires] = useState(FerieEtRtt.commentaires)

  function handleChange(e) {
    const inputValue = e.target.value;
    switch (e.target.name) {
      case 'date':
        setDate(inputValue);
        FerieEtRtt.date = inputValue;
        return;
      case 'type':
        setType(inputValue);
        FerieEtRtt.type = inputValue;
        return;
      case 'jour':
        setJour(inputValue);
        FerieEtRtt.jour = inputValue;
        return;
      case 'commentaires':
        setCommentaires(inputValue);
        FerieEtRtt.commentaires = inputValue;
        return;
    }
  

  return (
    <tr>
      {FerieEtRtt.editable ? (
        <>
          <td>
            <input
              type="Date"
              name="Date"
              onChange={handleChange}
              value={date} />
          </td>
          <td>
            <input
              type="text"
              name="type"
              onChange={handleChange}
              value={type} />
          </td>
          <td>
            <input
              type="text"
              name="Jour"
              onChange={handleChange}
              value={jour} />
          </td>
          <td>
            <input
              type="text"
              name="Commentaires"
              onChange={handleChange}
              value={commentaires} />
          </td>
        </>
      ) : (
        <>
          <td>{FerieEtRtt.date} €</td>
          <td>{FerieEtRtt.type}</td>
          <td>{FerieEtRtt.jour}</td>
          <td>{FerieEtRtt.commentaires} €</td>
        </>
      )}
      <>
        <td className="text-center">
          <a
            onClick={toggleEditListe}
            className="btn btn-sm btn-info me-1">
            {FerieEtRtt.editable ? '✔︎' : '✎'}
          </a>
          <a
            onClick={deleteListe}
            className="btn btn-sm btn-danger">✖︎</a>
        </td>

      </>
    </tr>
  )
}}