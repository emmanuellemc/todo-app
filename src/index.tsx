// on importe la librairie react
import React from 'react'
//on importe la librairie react-dom (elle permet d'afficher react sur la page)
import { createRoot } from 'react-dom/client'



//const notes: Array<number> = [12, 13, 8, 14, 20]
//const age: number = 18
//
//// On créé un élément react (JSX)

// Apparté : le fragement, element completement vide, permet de contourner la limite d'une seule balise par element JSX. Disparait sur la page html finale
// const element = (
//   <></>

//const element: JSX.Element = (
//  <div>
//    <h1>Vos notes</h1>
//    {age >= 18 ? (
//      <div>
//        <p>Vous êtes majeur</p>
//      </div>
//    ) : (
//      <div>
//        <p>Vous êtes mineur</p>
//      </div>
//    )}
//    <ul>
//    {/* pour les perfs, on mets une "key", pour cela il faut rajouter l'index du tableau en deuxieme argument */}
//      {notes.map((note, index) => (
//        <li key={`note-${index}`}>{note}/20</li>
//      ))}
//    </ul>
//  </div>
//)

type HelloProps = {
  name: string
  age?: string
   //peut être nul grace au "?"
}

function Hello({ name, age = '??' }: HelloProps): JSX.Element {
  return (
    <p>
      Hello {name}, vous avez {age} ans :)
    </p>
  )
}

const element: JSX.Element = (
  <div>
    <Hello name="Rose" />
    <Hello name="Jean" age="35" />
    <Hello name="Jack" age="21" />
    <Hello name="Jane" age="40" />
  </div>
)

// On récupére la balise div#root de notre
// page HTML
const root = document.querySelector('#root')

// Si il n'y a pas de balise root
if (!root) {
  // On léve un erreur
  throw new Error('Oups ... il manque la balise root dans votre index.html')
}

// J'affiche l'élément à l'écran dans la balise
// div#root
createRoot(root).render(element)