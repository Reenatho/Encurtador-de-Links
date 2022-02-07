import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/menu'
import { useState}  from 'react'
import LinkItem from '../../components/LinkItem';
import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'


export default function Home () {

  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState('');
  async function handleShortLink (){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLink('key', response.data)
      setLink('');
    }catch{
      alert('Ops, parece que algo deu errado!')
      setLink('');
    }
    
  }

  
    return (
      <div className="container-home">
        <div className="logo">
            <img src="/logo.svg" alt="sujeito link logo"/>
            <h1>Encurtador de Link</h1>
            <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
            <div>
              <FiLink size={24} color="FFF"/>  
              <input 
                placeholder='Cole seu link aqui...'
                value = {link}
                onChange = { (e) => setLink(e.target.value)}
              />
            </div>
            <button
              onClick={handleShortLink}>
                Encurtar Link
            </button>
        </div>

        <Menu/>

        { showModal && (
          <LinkItem
            closeModal={ () => setShowModal(false)}
            content = {data}
          />
        )}
      </div>
    )
  }

  // f75e15c94a7e1fe2849c0ed0bafbc5c66470a060 token de acesso bitly