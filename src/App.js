import './App.css'
import Header from './header/Header'
import { Redirect, Switch, Route, useLocation } from "react-router-dom"
import { useTransition, animated } from "react-spring"

import Navbar from './navbar/Navbar'
import Week from './pages/Week'
import Today from './pages/Today'
import Homework from './pages/Homework'
import Submit from './pages/Submit'
import Info from './pages/Info'

function App() {
  const location = useLocation()

  const transitions = useTransition(location, {
    from: {
      // opacity: 0,
      transform: 'translateX(100%)'
    },
    enter: {
      // opacity: 1,
      transform: 'translateX(0%)'
    },
    leave: {
      // opacity: 0,
      transform: 'translateX(-100%)'
    },
  })

  var date = new Date()

  return (
    <div style={{position:'relative', overflowX:'hidden', minHeight:'100vh'}}>
        {transitions((props, item) => (
          <animated.div style={props}>
              <div style={{position:'absolute', width:'100%'}}>
              <Switch location={item}>

                <Route path="/week">
                  <Header date={date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} title={date.toLocaleDateString("en-US", { month: 'long' }).toUpperCase()} />
                  <Week />
                </Route>

                <Route path="/today">
                  <Header date={date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} title={date.toLocaleDateString("en-US", { month: 'long' }).toUpperCase()} />
                  <Today /> 
                </Route>

                <Route path="/homework">
                  <Header date={date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} title={date.toLocaleDateString("en-US", { month: 'long' }).toUpperCase()} />
                  <Homework />
                </Route>

                <Route path="/submit">
                  <Header date="" title="SUBMIT" />
                  <Submit />
                </Route>

                <Route path="/thanks">
                  <Header date="" title="THANKS" />
                  <Info data="Thank you for your help!"/>
                </Route>

                <Route path="/error">
                  <Header date="" title="ERROR" />
                  <Info data="Failed to connect and post data to API"/>
                </Route>

                <Redirect to="/today" />
              </Switch>
              </div>
              </animated.div>
            ))
          }
          <Navbar /> 
      </div>
  );
}

export default App;
