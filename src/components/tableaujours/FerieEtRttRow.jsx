import { useState } from 'react'

export default function FerieEtRttRow({ ferieetrtt, deleteFerieEtRtt, toggleEditFerieEtRtt, editFerieEtRtt }) {
  const [dates, setDates] = useState(ferieetrtt.dates)
  const [type, setType] = useState(ferieetrtt.type)
  const [jour, setJour] = useState(ferieetrtt.jour)
  const [commentaires, setCommentaires] = useState(ferieetrtt.commentaires)

  function handleChange(e) {
    const inputValue = e.target.value;
    switch (e.target.name) {
      case 'dates':
        setDates(inputValue);
        editFerieEtRtt(ferieetrtt.dates, {dates: inputValue})
        return;
      case 'type':
        setType(inputValue);
        editFerieEtRtt(ferieetrtt.type, {type: inputValue})
        return;
      case 'jour':
        setJour(inputValue);
        editFerieEtRtt(ferieetrtt.jour, {jour: inputValue})
        return;
      case 'commentaires':
        setCommentaires(inputValue);
        editFerieEtRtt(ferieetrtt.commentaires, {commentaires: inputValue})
        return;
    }
  }

  return (
    <tr>
      {ferieetrtt.editable ? (
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
          <td>{ferieetrtt.dates}</td>
          <td>{ferieetrtt.type}</td>
          <td>{ferieetrtt.jour}</td>
          <td>{ferieetrtt.commentaires}</td>
        </>
      )}
      <>
        <td className="text-center">
          <button
            onClick={toggleEditFerieEtRtt}
            className="btn btn-sm btn-info me-1">
            {ferieetrtt.editable ? '✔︎' : '✎'}
          </button>
          <button
            onClick={deleteFerieEtRtt}
            className="btn btn-sm btn-danger">✖︎</button>
        </td>

      </>
    </tr>
  )
}