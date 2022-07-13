// function MainContent( ){
//     return (
//         <ul>
//             <li>Item1</li>
//             <li>Item2</li>
//         </ul>
//     )
// }



// const container = document.getElementById("root1")

// const root = ReactDOM.createRoot(container);
// root.render(
//     <div>
//         <h1>
//         Hello smthn
//         </h1>
//         <MainContent/>
//     </div>
// )

const h1 = document.createElement("h1");
h1.textContent = "H1 some text content";
h1.className = "header";
document.getElementById("root1").append(h1);