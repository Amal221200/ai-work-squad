import "./index.css"
import Footer from './components/Footer';
import Form from './components/Form';
import LoginHeader from './components/Header';


const LoginPage = () => {
  return (
    <div className='h-full' id="login">
        <LoginHeader />
        <main className='h-[calc(100%-120px)]'>
            <Form />
        </main>
        <Footer />
    </div>
  )
}

export default LoginPage