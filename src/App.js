import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './component/Index/Home';
import MovieGrid from './component/MovieGrid/MovieGrid';
import Movielist from './component/MovieList/Movielist';
import Moviedetails from './component/MovieDetails/Moviedetails';
import Movieticketplan from './component/MovieTicketplan/Movieticketplan';
import Movieseatplan from './component/MovieSeatplan/Movieseatplan';
import MovieCheckout from './component/MovieCheckout/MovieCheckout';
import Food from './component/Food/Food';
import Event from './component/Event/Event';
import Eventdetails from './component/EventDetails/Eventdetails';
import Eventspeker from './component/Eventspeker/Eventspeker';
import EventTicket from './component/EventTicket/EventTicket';
import EventCheckout from './component/EventCheckout/EventCheckout';
import Sports from './component/Sports/Sports';
import SportDetails from './component/SportDetails/SportDetails';
import SportsTicket from './component/SportsTicket/SportsTicket';
import SportsCheckout from './component/SportsCheckout/SportsCheckout';
import Pages from './component/About/Pages';
import AppsDownload from './component/AppsDownload/AppsDownload';
import Signin from './component/Sign-in/Signin';
import Signout from './component/Sign-in/Signout';
import Errors from './component/Sign-in/404';
import Blog from './component/Blog/Blog';
import BlogSingle from './component/BlogSingle/BlogSingle';
import Contact from './component/Contact/Contact';
import Login from './Admin/Login';
import Register from './Admin/Register';
import AddDetails from './Admin/AddDetails';
import ViewDetails from './Admin/ViewDetails';



function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={ <Home/> } />
         <Route path="/movie-grid" element={ <MovieGrid/> } />
         <Route path="/movie-list" element={ <Movielist/> } />
         <Route path="/movie-details" element={ <Moviedetails/> } />
         <Route path="/movie-ticket-plan" element={ <Movieticketplan/> } />
         <Route path="/movie-seat-plan" element={ <Movieseatplan/> } />
         <Route path="/movie-checkout" element={ <MovieCheckout/> } />
         <Route path="/food" element={ <Food/> } />
         <Route path="/events" element={ <Event/> } />
         <Route path="/event-details" element={ <Eventdetails/> } />
         <Route path="/event-speaker" element={ <Eventspeker/> } />
         <Route path="/event-ticket" element={ <EventTicket/> } />
         <Route path="/event-checkout" element={ <EventCheckout/> } />
         <Route path="/sports" element={ <Sports/> } />
         <Route path="/sport-details" element={ <SportDetails/> } />
         <Route path="/sport-tickets" element={ <SportsTicket/> } />
         <Route path="/sport-checkout" element={ <SportsCheckout/> } />
         <Route path="/about" element={ <Pages/> } />
         <Route path="/apps-download" element={ <AppsDownload/> } />
         <Route path="/sign-in" element={ <Signin/> } />
         <Route path="/sign-up" element={ <Signout/> } />
         <Route path="/404" element={ <Errors/> } />
         <Route path="/blog" element={ <Blog/> } />
         <Route path="/blog-single" element={ <BlogSingle/> } />
         <Route path="/contact" element={ <Contact/> } />


         {/* ======================= Admin Side Components ================= */}


         <Route path="/login" element={ <Login/> } />
         <Route path="/register" element={ <Register/> } />
         <Route path="/adddetails" element={ <AddDetails/> } />
         <Route path="/viewdetails" element={ <ViewDetails/> } />

         


















         


         {/* <Route path="contact" element={ <Contact/> } />  */}
      </Routes>
    </div>
  );
}

export default App;
