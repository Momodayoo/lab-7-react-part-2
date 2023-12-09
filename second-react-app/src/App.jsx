import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import ClockDisplay from './Clock/Clock'
// import ActivityFinder from './ActivityFinder/ActivityFinder'
import BitcoinRates from './BitCoinRates/BitCoinRates'
// import RefCounter from './RefCounter/RefCounter'
// import VideoPlayer from './VideoPlayer/VideoPlayer'
// import ReducerCounter from './ReducerCounter/ReducerCounter'
// import PostListReducer from './PostListReducer/PostListReducer'
// import SubscribeForm from './SubscribeForm/SubscribeForm'
import BitcoinRatesExtender from './BitCoinRates/BitCoinRatesExtender'
// import { UserProvider } from './Context/UserContext'
// import LoginForm from './LoginForm/LoginForm'

import Emoji from './Emoji/Emoji'
import { EmojiProvider } from './Context/EmojiContext'

import AppRoutes from './Routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    
   
    <EmojiProvider>
      <div>
      <NavBar/>
        <BitcoinRates />
        <br />
        <BitcoinRatesExtender />
        <br />
        <Emoji />
        <br />
        
       
      </div>
    </EmojiProvider>
    
    
    
  );
}

    // <>
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
      
/* <UserProvider> */
/* <MyThemeProvider>   */
          /* <ClockDisplay/> */

          /* <ActivityFinder/> */

          /* <RefCounter/> */

           /* <VideoPlayer/> */

           /* <ReducerCounter/> */

           /* <PostListReducer/> */

           /* <SubscribeForm/> */

           /* <LoginForm/> */
/* </MyThemeProvider>            */
/* </UserProvider> */

    // </>
//   );
// }

export default App;
