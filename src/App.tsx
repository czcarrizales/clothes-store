import { useState } from 'react'
import './App.css'
import Shop from './Shop'

function App() {

  const [inShopView, setInShopView] = useState(false)
  const [homeVisible, setHomeVisible] = useState(true)

  const handleSetShopView = () => {
    setHomeVisible(false)
    setTimeout(() => {
      setInShopView(true)
    }, 500);
    
  }

  return (
    <div id='app-container'>
      <img id='img-1' src="https://images.unsplash.com/photo-1540871398124-992abe834578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <img id='img-2' src="https://images.unsplash.com/photo-1471119017026-179f1bb0a70e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2037&q=80" alt="" />
      <img id='img-3' src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <img id='img-3' src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80" alt="" />
      <img id='img-3' src="https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <img id='img-3' src="https://images.unsplash.com/photo-1471424189333-0c3f7e0e255d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <img id='img-7' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <img id='img-8' src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <img id='img-9' src="https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <img id='img-10' src="https://images.unsplash.com/photo-1507438222021-237ff73669b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" alt="" />
      <img id='img-11' src="https://images.unsplash.com/photo-1495490140452-5a226aef25d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <img id='img-12' src="https://images.unsplash.com/photo-1515541474431-4d8de9207620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" alt="" />
      <div id='app-hero-text'>
        {
          inShopView
            ?
            <div id='shop-container' className={`${inShopView ? 'shop-visible' : ''}`}>
            <Shop />
            </div>
            :
            <div className={`${homeVisible ? 'home-visible' : 'home-invisible'}`}>
              <h1>Another Clothing Store</h1>
              <h2>You should still check us out though.</h2>
              <button onClick={handleSetShopView}>Shop</button>
            </div>
        }


      </div>
      <div>
        <p>Item Here</p>
        <button >Buy</button>
      </div>
    </div>
  )
}

export default App
