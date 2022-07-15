import Home from "../Home";
import Books from "../Books";


const routes = { //what happens when a certrain route is chosen
    '/': () => <Home />,
    '/books': () => <Books />, //once the file is found the function will fire the Books component
};


export default routes;