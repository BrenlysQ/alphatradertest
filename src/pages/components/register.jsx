import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './style.css'
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';

const schema = yup
  .object()
  .shape({
    name: yup.string().required('El campo es requerido'),
    lastName: yup.string().required('El campo es requerido'),   
    email: yup.string().required('El campo es requerido').email('Email incorrecto'),
    phone: yup.string().required('El campo es requerido'),
  })
  .required();

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};


function Register() {
  
  const [phone, setPhone] = useState('');
  const isValid = isPhoneValid(phone);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

    return (
      <>
        <h1 style={{color:'#000'}}>ACTUALIZACIÓN</h1>
        <h3>
          Acabamos de recibir noticias que, a partir de hoy <strong>6 de agosto del 2024</strong>, Casi todas las posiciones están ocupadas <a href='#registro'>Oil Profit </a>
          solo puede aceptar un número limitado de usuarios totales para mantener altas las ganancias por usuario. En este momento, 
          aún quedan (37) lugares disponibles, así que apúrate y regístrate ahora para asegurar tu lugar.
        </h3>
        <div className='HR-register'>
          Inscripción gratuita
        </div>
        <form onSubmit={handleSubmit((d) => console.log(d))}>                   
          <div className='HR-input-general'>           
            <input {...register('name')} type="text" placeholder="Nombre" aria-label="Full name" className='HR-input'/> 
            <p >{errors.name?.message}</p>
           
            <input {...register('lastName')} type="text" placeholder="Apellido" aria-label="Full name" className='HR-input'/>
            <p >{errors.lastName?.message}</p>
           
            <input {...register('email')} type="email" placeholder="Correo electrónico" aria-label="Full name" className='HR-input'/>           
            <p >{errors.email?.message}</p>

            <PhoneInput defaultCountry="ua" value={phone} onChange={(phone) => setPhone(phone)} inputClassName='HR-input-phone' className='HR-input-phone'/>
            {!isValid && <div style={{ color: 'red' }}>Phone is not valid</div>}
          </div> 
          <button type="submit" className='HR-button'>Regístrese ahora</button>
          <p className='HR-button-subtitle'>* Monto mínimo de inversión ₡135 000</p>                   
        </form>
       
      </>
    )
  }
  
  export default Register