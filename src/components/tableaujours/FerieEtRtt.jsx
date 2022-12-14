import { useState } from "react"
import FerieEtRttRow from "./FerieEtRttRow"
import FerieEtRttForm from "./FerieEtRttForm"

export default function Ferie() {
    const [FerieEtRtt, setFerieEtRtt] = useState([
        {
            id: crypto.randomUUID(),
            date: '02/01/2023',
            type: 'RTT Employeur',
            jour: 'Lundi',
            commentaires: '',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '10/04/2023',
            type: 'Férié',
            jour: 'Lundi',
            commentaires: 'Lundi de Pâques',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '01/05/2023',
            type: 'Férié',
            jour: 'Lundi',
            commentaires: 'Fête du travail',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '08/05/2023',
            type: 'Férié',
            jour: 'Lundi',
            commentaires: 'Victoire 1945',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '25/05/2023',
            type: 'Férié',
            jour: 'Jeudi',
            commentaires: 'Ascension',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '05/06/2023',
            type: 'RTT Employeur',
            jour: 'Lundi',
            commentaires: 'Lundi de Pentecôte',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '14/07/2023',
            type: 'Férié',
            jour: 'Vendredi',
            commentaires: 'Fête Nationale',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '14/08/2023',
            type: 'RTT Employeur',
            jour: 'Lundi',
            commentaires: '',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '15/08/2023',
            type: 'Férié',
            jour: 'Mardi',
            commentaires: 'Assomption',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '01/11/2023',
            type: 'Férié',
            jour: 'Mercredi',
            commentaires: 'Toussaint',
            editable: false,
        },
        {
            id: crypto.randomUUID(),
            date: '25/12/2023',
            type: 'Férié',
            jour: 'Lundi',
            commentaires: 'Noël',
            editable: false,
        },
    ])

    function addFerieEtRtt(newFerieEtRtt) {
        setFerieEtRtt([newFerieEtRtt, ...FerieEtRtt]);
    }


    function toggleEditFerieEtRtt(ferieretrtt) {
        setFerieEtRtt(
            FerieEtRtt.map(l => l.id === ferieretrtt.id ? { ...l, editable: !l.editable } : l)
        )
    }

    function editFerieEtRtt(id, updates) {
        setFerieEtRtt(
            FerieEtRtt.map(l => l.id === id
                ? { ...l, ...updates }
                : l)
        )
    }

    function deleteFerieEtRtt(id) {
        setFerieEtRtt(
            FerieEtRtt.filter(l => l.id !== id)
        );
    }

    return (
        <div className="container">
            <h1 className="text-center">Jours fériés et RTT employeurs</h1>
            <FerieEtRttForm addFerieEtRtt={addFerieEtRtt} />
            <div className="mb-3">
                <label for="" className="form-label liste-annee">Année</label>
                <select className="form-select form-select-sm" name="year" id="">
                    <option selected value="2023">2023</option>
                    <option value="2024">2024</option>
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
                {FerieEtRtt.map(ferieretrtt => (
                    <FerieEtRttRow key={ferieretrtt.id}
                        ferieretrtt={ferieretrtt}
                        deleteFerieEtRtt={() => deleteFerieEtRtt(ferieretrtt.id)}
                        toggleEditFerieEtRtt={() => toggleEditFerieEtRtt(ferieretrtt)}
                        editFerieEtRtt={editFerieEtRtt} />
                ))}


                <tbody>
                    <tr>
                        <th scope="row">02/01/2023</th>
                        <th>RTT Employeur</th>
                        <th>Lundi</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th scope="row">10/04/2023</th>
                        <th>Férié</th>
                        <th>Lundi</th>
                        <th>Lundi de Pâques</th>
                    </tr>
                    <tr>
                        <th scope="row">01/05/2023</th>
                        <th>Férié</th>
                        <th>Lundi</th>
                        <th>Fête du travail</th>
                    </tr>
                    <tr>
                        <th scope="row">08/05/2023</th>
                        <th>Férié</th>
                        <th>Lundi</th>
                        <th>Victoire 1945</th>
                    </tr>
                    <tr>
                        <th scope="row">25/05/2023</th>
                        <th>Férié</th>
                        <th>Jeudi</th>
                        <th>Ascension</th>
                    </tr>
                    <tr>
                        <th scope="row">05/06/2023</th>
                        <th>RTT Employeur</th>
                        <th>Lundi</th>
                        <th>Lundi de Pentecôte</th>
                    </tr>
                    <tr>
                        <th scope="row">14/07/2023</th>
                        <th>Férié</th>
                        <th>Vendredi</th>
                        <th>Fête nationale</th>
                    </tr>
                    <tr>
                        <th scope="row">14/08/2023</th>
                        <th>RTT Employeur</th>
                        <th>Lundi</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th scope="row">15/08/2023</th>
                        <th>Férié</th>
                        <th>Mardi</th>
                        <th>Assomption</th>
                    </tr>
                    <tr>
                        <th scope="row">01/11/2023</th>
                        <th>Férié</th>
                        <th>Mercredi</th>
                        <th>Toussaint</th>
                    </tr>
                    <tr>
                        <th scope="row">25/12/2023</th>
                        <th>Férié</th>
                        <th>Lundi</th>
                        <th>Noël</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
