import ButtonAdotar from '../ButtonAdotar';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import * as S from './styles';
import FormCadastro from '../Cadastro';
import FormPersonal from '../FormPersonal';
import Header from "../Header";
import Logo from "../Logo";
import BackArrow from "../BackArrow";
import OptionMenu from "../OptionMenu";
import { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Modal } from 'react-bootstrap';
import { cadastroUsuario } from '../../service/user';
import { log } from 'console';

const FormPerfil = () => {

  const validationSchema = Yup.object({
    name_user: Yup.string().required('Por favor preencha com seu nome'),

    email: Yup.string().email('Por favor preencha com um email válido').required('Por favor preencha com seu email'),

    password: Yup.string().required('Por favor preencha com uma password').min(8, 'Sua password deve ter no mínimo 8 caracteres').max(12, 'Sua password deve ter no máximo 12 caracteres'),

    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As passwords não são iguais').required('Por favor preencha com uma password'),

    comments: Yup.string(),

    address: Yup.string().required('O endereço é obrigatório'),

    phone: Yup.string(),

    mobile: Yup.string().min(10,'Deve ter no mínimo 10 digitios').required('O telefone é obrigatório'),

    image: Yup.string().required('A imagem deve ser obrigatório'),
  })

  const formik = useFormik({
    initialValues: {
      name_user: '',
      password: '',
      confirmPassword: '',
      email: '',
      image: '',
      comments: '',
      address: '',
      phone: '',
      mobile: '',
      whats: 'false',

    },
    validationSchema,
    onSubmit: async (values)=>{
      let data = new FormData()
      data.append('name_user', values.name_user)      
      data.append('password', values.password)      
      data.append('email', values.email)   
      data.append('image', values.image)

      if (values.comments) {       
        data.append('comments', values.comments)  
      }      
          
      if (values.phone) {
        data.append('phone', values.phone) 
      }

      data.append('address', values.address)     
      data.append('mobile', values.mobile)      
      data.append('whats', values.whats)
    
      
      
      let a = await cadastroUsuario(data)     
      console.log(a);
      
      if (a.user_id) {
        setShow(true)
        setErro('Conta criada com sucesso!')
      }
      else{
        setShow(true)
        setErro(a)
      }  
    }
  })

  const [changePage, setChangePage] = useState(true)
  const [aviso, setAviso] = useState(false)
  const [show, setShow] = useState(false)
  const [erro, setErro] = useState('')

  const advance = () => {
    if (formik.values.email && !formik.errors.confirmPassword) {
      console.log('Entrou');
      setChangePage(!changePage)
      setAviso(false)      
    }
    else{
      setAviso(true)
    }
  }

  return (
    <>
      <Header display= {!changePage} logo="center" background="rgba(255, 255, 255, 0.75)">
        <BackArrow display = {'center'} url = '' onclick = {()=>setChangePage(true)}/>
        <Logo margin = {'center'}/>
        <OptionMenu displayProfile="none"/>
      </Header>
      <S.StyledForm display = {changePage} onSubmit = {formik.handleSubmit}>

        <FormCadastro display= {changePage} formik = {formik} />

        <FormPersonal display= {!changePage} formik = {formik} />

        <ButtonAdotar display= {!changePage} color='#1E1E1E' type='submit'>
          Salvar Perfil ✔
        </ButtonAdotar>
    
        <S.DivButton>
          <S.Aviso display = {aviso} >Não é possívle avançar! Algum dos dados estão incorretos ou não foram preenchidos. Corrija e clique em Avançar.</S.Aviso>

          <ButtonAdotar onclick={advance} margin = {9} display= {changePage} color='#1E1E1E' type='button'>
            Avançar <FiLogIn/>
          </ButtonAdotar>
        </S.DivButton>

      <Modal centered show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{erro}</Modal.Title>
        </Modal.Header>
      </Modal>

      </S.StyledForm>
    </>

  )
}

export default FormPerfil;