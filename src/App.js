import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';
import Container from './components/Container/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PriveteRoute';
import PublicRoute from './components/PublicRoute';
import authSelectors from './redux/auth/auth-selectors';

// const HomeView = lazy(() => import('./views/HomeView/HomeView'));
// const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
// const LoginView = lazy(() => import('./views/LoginView/LoginView'));
// const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<p>Loading, please wait</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted redirectTo={'/'}>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo={'/'}>
              <LoginView />
            </PublicRoute>

            {/* <Route exact path="/" component={HomeView} /> */}
            {/* <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} /> */}
            <PrivateRoute path="/contacts" redirectTo={'/login'}>
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

// OldRedux
// import { Component } from 'react';

// import s from './App.module.css';
// import ContactForm from './components/ContactForm/ContactForm';
// import Filter from './components/Filter/Filter';
// import ContactList from './components/ContactList/ContactList';

// export default class App extends Component {
//   // state = {
//   //   contacts: [
//   //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   //   ],
//   //   filter: '',
//   // };

//   // componentDidMount() {
//   //   console.log('Component did mount');
//   //   const contacts = localStorage.getItem('contacts');
//   //   const parsedContacts = JSON.parse(contacts);
//   //   console.log(contacts);
//   //   console.log(parsedContacts);
//   //   if (parsedContacts) {
//   //     this.setState({ contacts: parsedContacts });
//   //   }
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   console.log('Component did update');
//   //   if (this.state.contacts !== prevState.contact) {
//   //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   //   }
//   // }

//   // onAddContact = ({ name, number }) => {
//   //   const { contacts } = this.state;
//   //   this.setState(prevState => {
//   //     return {
//   //       contacts: [...prevState.contacts, { id: uuidv4(), name, number }],
//   //     };
//   //   });
//   //   console.log(contacts);
//   // };

//   // onFilter = evt => {
//   //   const { name, value } = evt.target;
//   //   this.setState({
//   //     [name]: value,
//   //   });
//   //   console.log(this.state.filter);
//   // };

//   // getVisibleContacts = () => {
//   //   const { filter, contacts } = this.state;

//   //   const normalizedFilter = filter.toLowerCase();

//   //   return contacts.filter(contact =>
//   //     contact.name.toLowerCase().includes(normalizedFilter),
//   //   );
//   // };

//   // deleteContact = evt => {
//   //   console.log(evt.target.id);
//   //   this.setState(prevState => ({
//   //     contacts: prevState.contacts.filter(
//   //       contact => contact.id !== evt.target.id,
//   //     ),
//   //   }));
//   // };

//   render() {
//     // const { filter, contacts } = this.state;
//     // const filteredContacts = this.getVisibleContacts();
//     // console.log(filteredContacts);
//     return (
//       <div className={s.container}>
//         <h1>Phonebook</h1>
//         <ContactForm
//         // contacts={contacts} onAddContact={this.onAddContact}
//         />
//         <h2>Contacts</h2>
//         <Filter
//         // value={filter} onChange={this.onFilter}
//         />
//         <ContactList
//         // onDeleteContact={this.deleteContact}
//         // onGetVisibleContacts={this.getVisibleContacts}
//         />
//       </div>
//     );
//   }
// }
