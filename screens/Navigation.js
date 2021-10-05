import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from "./home/HomePage"
import { Login } from "./login/Login"
import { HeaderBar } from "../components/Header"
import { Register } from './register/Register'
import { User } from './user/User'
import { useSelector } from 'react-redux'
import ReadMore from './read-more/ReadMore'
import { MyCart } from '../components/MyCart';
import { Cart } from './cart/cart';

const NavigationStack = createNativeStackNavigator()

export function Navigation() {
  const isAuthed = useSelector(state => state.user.token)

  return (
    <NavigationContainer>
      <NavigationStack.Navigator  
        initialRouteName="Home" 
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        { isAuthed === null ? (
          publicRoutes.map(route => (
            <NavigationStack.Screen 
              key={route.name}
              name={route.name}
              component={route.component}
              options={route.options}
            />
          ))
          ) : (
            privateRoutes.map(route => (
              <NavigationStack.Screen 
                key={route.name}
                name={route.name}
                component={route.component}
                options={route.options}
              />
            ))
          )
        }
      </NavigationStack.Navigator>
    </NavigationContainer>
  )
}


const publicRoutes = [
  { 
    name: "Home", 
    component: HomePage,
    options: () => ({ 
      headerTintColor: "blue",
      headerTitle: props => <HeaderBar title="Welcome" {...props} />
    })
  },
  { 
    name: "Login", 
    component: Login,
    options: () => ({ 
      headerTitle: props => <HeaderBar title="User Login" {...props} />
    })
  },
  { 
    name: "Register", 
    component: Register,
    options: () => ({ 
      headerTitle: props => <HeaderBar title="New User" {...props} />
    })
  },
]

const privateRoutes = [ 
  {
    name: "User", 
    component: User,
    options: (props) => ({ 
      headerTitle: () => <HeaderBar title="User" {...props} />,
      headerRight: () => <MyCart {...props}/>
    })
  },
  {
    name: "ReadMore", 
    component: ReadMore,
    options: (props) => ({ 
      headerTitle: () => <HeaderBar title="More" {...props}/>,
      headerRight: () => <MyCart {...props}/>
    })
  },
  {
    name: "Cart", 
    component: Cart,
    options: (props) => ({ 
      headerTitle: () => <HeaderBar title="My Cart" {...props} />,
    })
  },
]
