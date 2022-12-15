import { useState } from "react"
import FerieEtRttRow from "./FerieEtRttRow"
import FerieEtRttForm from "./FerieEtRttForm"

export default function Ferie() {
    const [ferieEtRtt, setFerieEtRtt] = useState([
        {
            id: crypto.randomUUID(),
            dates: '02/01/2023',
            type: 'RTT Employeur',
            jour: 'Lundi',
            commentaires: '',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '10/04/2023',
            type: 'Férié',
            jour: 'Lundi',
            commentaires: 'Lundi de Pâques',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '01/05/2023',
            type: 'Férié',
            jour: 'Lundi',
            commentaires: 'Fête du travail',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '08/05/2023',
            type: 'Férié',
            jour: 'Lundi',
            commentaires: 'Victoire 1945',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '25/05/2023',
            type: 'Férié',
            jour: 'Jeudi',
            commentaires: 'Ascension',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '05/06/2023',
            type: 'RTT Employeur',
            jour: 'Lundi',
            commentaires: 'Lundi de Pentecôte',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '14/07/2023',
            type: 'Férié',
            jour: 'Vendredi',
            commentaires: 'Fête Nationale',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '14/08/2023',
            type: 'RTT Employeur',
            jour: 'Lundi',
            commentaires: '',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '15/08/2023',
            type: 'Férié',
            jour: 'Mardi',
            commentaires: 'Assomption',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '01/11/2023',
            type: 'Férié',
            jour: 'Mercredi',
            commentaires: 'Toussaint',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            dates: '25/12/2023',
            type: 'Férié',
            jour: 'Lundi',
            commentaires: 'Noël',
            editable: false,
        },
    ])

    function addFerieEtRtt(newFerieEtRtt) {
        setFerieEtRtt([newFerieEtRtt, ...ferieEtRtt]);
    }


    function toggleEditFerieEtRtt(ferieretrtt) {
        setFerieEtRtt(
            ferieEtRtt.map(l => l.id === ferieretrtt.id ? { ...l, editable: !l.editable } : l)
        )
    }

    function editFerieEtRtt(id, updates) {
        setFerieEtRtt(
            ferieEtRtt.map(l => l.id === id
                ? { ...l, ...updates }
                : l)
        )
    }

    function deleteFerieEtRtt(id) {
        setFerieEtRtt(
            ferieEtRtt.filter(l => l.id !== id)
        );
    }
    return (
        <div className="container">
            <h1 className="text-center">Jours fériés et RTT employeurs</h1>
            <FerieEtRttForm addFerieEtRtt={addFerieEtRtt} />
            <div className="mb-3">
                <label for="" className="form-label liste-annee m-1">Année</label>
                <select className="form-select form-select-sm m-1" name="year" id="">
                    <option selected value="2023">2023</option>
                    {/* <option value="2024">2024</option> */}
                </select>
            </div>

            <table className="table table-striped table-responsive table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Type</th>
                        <th scope="col">Jour</th>
                        <th scope="col">Commentaires</th>
                    </tr>
                </thead>
                <tbody>
                    {ferieEtRtt.map(liste => (
                        <FerieEtRttRow
                            key={liste.id}
                            liste={liste}
                            deleteFerieEtRtt={() => deleteFerieEtRtt(liste.id)}
                            toggleEditFerieEtRtt={() => toggleEditFerieEtRtt(liste)}
                            editFerieEtRtt={editFerieEtRtt} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
