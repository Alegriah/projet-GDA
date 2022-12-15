import { useState } from 'react'
import axios from 'axios'

export default function FerieEtRttRow({ 
  liste, 
  deleteFerieEtRtt,
  toggleEditFerieEtRtt,
  editFerieEtRtt,
 }) {

  const [ dates, setDates ] = useState(liste.dates)
  const [ type, setType ] = useState(liste.type)
  const [ jour, setJour ] = useState(liste.jour)
  const [ commentaires, setCommentaires ] = useState(liste.commentaires)

  function handleChange(e) {
    const inputValue = e.target.value;
    switch (e.target.name) {
      case 'dates':
        setDates(inputValue);
        editFerieEtRtt(liste.dates, {dates: inputValue})
        return;
      case 'type':
        setType(inputValue);
        editFerieEtRtt(liste.type, {type: inputValue})
        return;
      case 'jour':
        setJour(inputValue);
        editFerieEtRtt(liste.jour, {jour: inputValue})
        return;
      case 'commentaires':
        setCommentaires(inputValue);
        editFerieEtRtt(liste.commentaires, {commentaires: inputValue})
        return;
    }
  }

  return (
    <tr>
      {liste.editable ? 
      (
        <>
          <td>
            <input
              type="text"
              name="dates"
              onChange={handleChange}
              value={dates} />
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
              name="jour"
              onChange={handleChange}
              value={jour} />
          </td>
          <td>
            <input
              type="text"
              name="commentaires"
              onChange={handleChange}
              value={commentaires} />
          </td>
        </>
      ) 
      : 
      (
        <>
          <td>{liste.dates}</td>
          <td>{liste.type}</td>
          <td>{liste.jour}</td>
          <td>{liste.commentaires}</td>
        </>
      )}
      <>
        <td className="text-center">
          <button
            onClick={toggleEditFerieEtRtt}
            className="btn btn-sm btn-info me-1">
            {liste.editable ? '✔︎' : '✎'}
          </button>
          <button
            onClick={deleteFerieEtRtt}
            className="btn btn-sm btn-danger">✖︎</button>
        </td>

      </>
    </tr>
  )
}