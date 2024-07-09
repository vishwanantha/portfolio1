import React from 'react'
import styles from "./App.module.css";

import { BrowserRouter,   Route, Routes } from 'react-router-dom'
import Allontainer from './components/Allontainer';
export default function App() {
  return (
    <div className={styles.App}>
   
   <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Allontainer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
    
    
      </div>
  )
}
