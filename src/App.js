import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 引入全局 css
import "./App.less"

import { LayoutComponent } from '@/containers/Layout/Index';
import { BlogList } from '@/containers/BlogList/Index'
import { ContentComponent } from '@/containers/Layout/Content/Index';

const Home = () => {
  return (
    <div>Home</div>
  )
}

const Test = () => {
  return (
    <div>Test</div>
  )
}




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="/" element={<ContentComponent />}>
            <Route path="/" element={<BlogList />}></Route>
            <Route path="/archive" element={<Test />}></Route>
          </Route>
          <Route path="/about" element={<Test />}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App