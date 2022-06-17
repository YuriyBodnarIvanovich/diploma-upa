import React from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import RichTextEditor from './components/RichTextEditor';
import { Route, Switch } from 'react-router-dom';
import AdminCreate from './components/AdminCreate';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/Registration/LoginForm';
import ContentPost from './components/ContentPost';
import UserPage from './components/UserPage';
import { Footer } from './components/Footer';
import CreateQuestion from './components/CreateQuestion';

function App() {
  
  return (
    <div className='App'>
      <div style={{width: '100%', maxWidth: '1440px'}}>
        <Menu  admin={true} name={'Юрчик'} avatar={'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024'}/>
        <Switch>
          <Route path={'/'} component={Content} exact />
          <Route path={'/admin/create'} component={AdminCreate} exact/>
          <Route path={'/admin/create/post'} component={RichTextEditor} exact />
          <Route path={'/post/:id'} component={ContentPost} exact />
          <Route path={'/create-question/:id'} component={CreateQuestion} exact />
          <Route path={'/login'} component={LoginForm} exact />
          <Route path={'/regitration'} component={RegistrationForm} exact />
          <Route path={'/user-page'} component={UserPage} exact />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
