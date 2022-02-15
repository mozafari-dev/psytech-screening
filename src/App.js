
import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import payeshItemList from './components/payesh/payeshItemList';
import AboutUs from "./components/about";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Footer from "./components/common/footer";
import Home from "./components/home";
import Blog from "./components/blog";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import QuestionBox from './components/payesh/questionBox';
import auth from "./services/authService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

class App extends Component {
  state = {
    currentIndex: 1,
    activePrevious: false,
    activeNext: true,
    questionnaire: payeshItemList,
    user: ""
  }

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleClickNext = (page) => {
    if (page === this.state.questionnaire.length - 1) {
      this.setState({ currentIndex: page + 1, activeNext: false, activePrevious: true });
      // console.log('End', page + 1);

    }
    else {
      this.setState({ currentIndex: page + 1, activePrevious: true, activeNext: true });
      // console.log('next', page + 1);
    }
  }

  handleClickPrevious = (page) => {
    if (page === 2) {
      this.setState({ currentIndex: page - 1, activePrevious: false, activeNext: true });
      // console.log('Start', page - 1);

    }
    else {
      this.setState({ currentIndex: page - 1, activePrevious: true, activeNext: true });
      // console.log('Previous', page - 1);
    }
  }


  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container" style={{ fontFamily: "IranSans" }}>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path='/payesh'
              render={(props) => <QuestionBox {...props}
                key={this.state.currentIndex.toString()}
                question={payeshItemList.filter(q => q._id === this.state.currentIndex)}
                user={user}
                activeNext={this.state.activeNext}
                activePrevious={this.state.activePrevious}
                onClickNext={() => this.handleClickNext(this.state.currentIndex)}
                onClickPrevious={() => this.handleClickPrevious(this.state.currentIndex)}
              />}
            />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/blogs" component={Blog} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
