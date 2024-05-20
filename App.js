import ReactDOM from 'react-dom/client';
import Home from './src/components/Home';

const App = ()=>{
    return (
        <>
      <Home />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)