import { useState } from "react"
import FerieEtRttRow from "./FerieEtRttRow"

export default function Ferie() {
    // const [FerieEtRtt, setFerieEtRtt] = useState([
    //     {
    //         id: crypto.randomUUID(),
    //         date: 'une date',
    //         type: 'Férié',
    //         jour: 'Lundi',
    //         commentaires: 'lundi de pâques'
    //     }
    // ])

    // function toggleEditListe(ferieretrtt) {
    //     setFerieEtRtt(
    //         FerieEtRtt.map(l => l.id === ferieretrtt.id ? { ...l, editable: !l.editable } : l)
    //     )
    // }

    // function deleteListe(id) {
    //     setFerieEtRtt(
    //       FerieEtRtt.filter(l => l.id !== id)
    //     );
    //   }

    return (<>
        <div className="container">
            <h1 className="text-center">Jours fériés et RTT employeurs</h1>

            <div class="mb-3">
                <label for="" class="form-label liste-annee">Année</label>
                <select class="form-select form-select-sm" name="year" id="">
                    <option selected value="2022">2022</option>
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
                {/* {FerieEtRtt.map(ferieretrtt => (
                    <FerieEtRttRow key={ferieretrtt.id} ferieretrtt={ferieretrtt} deleteListe={() => deleteListe(ferieretrtt.id)} toggleEditListe={() => toggleEditListe(ferieretrtt)} />
                ))}
                                 */}

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
    </>)
}
