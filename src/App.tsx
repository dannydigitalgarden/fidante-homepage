import React, {useEffect, useState} from 'react'
import Homepage, {HomepageProps} from 'views/Homepage'
import './App.scss'
import mockdata from './api/mockData'
import Preloader from 'components/Preloader'

const App = () => {
  const [data, setData] = useState<HomepageProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setData(mockdata);
      setIsLoading(false);
      console.log(data)
    }, 1500)
  })
  return (
    <div className="fidante-app">
      {data && !isLoading && <Homepage {...data} />}
      <Preloader isLoading={isLoading}/>
    </div>
  )
}

export default App