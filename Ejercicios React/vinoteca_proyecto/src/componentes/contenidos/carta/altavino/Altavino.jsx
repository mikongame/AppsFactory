import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import API from '../../../../entorno/api';
import IMG from '../../../../entorno/img';
import './Altavino.css';

const Altavino = () => {
  const { register, handleSubmit, formState: { errors }, setFocus, reset } = useForm();
  const previo = useRef();

  const previsualizar = (ev) => {
    const imagen = ev.target.files[0];
    if (!imagen) {
      previo.current.src = `${IMG}/sinbotella.jpg`;
      return;
    }
    console.log("Nombre de la imagen subida:", imagen.name);
    const objectURL = URL.createObjectURL(imagen);
    previo.current.src = objectURL;
  };

  const recogerDatos = (datosFormulario) => {
    const imagenSubida = datosFormulario.imagen[0];
    const nombreLimpio = imagenSubida.name.toLowerCase().replace(/\s+/g, "_");

    let datos = new FormData();
    datos.append('nombre', datosFormulario.nombre);
    datos.append('anyo', datosFormulario.anyo);
    datos.append('uvas', datosFormulario.uvas);
    datos.append('region', datosFormulario.region);
    datos.append('pais', datosFormulario.pais);
    datos.append('imagen', nombreLimpio); // solo el nombre limpio
    datos.append('descripcion', datosFormulario.descripcion);
    datos.append('imagenbmp', imagenSubida); // imagen como archivo

    const parametros = { method: 'POST', body: datos };

    fetch(API, parametros)
      .then(res => res.json())
      .then(() => {
        alert('Vino dado de alta correctamente');
        setFocus('nombre');
        reset();
        previo.current.src = `${IMG}/sinbotella.jpg`;
      });
  };

  return (
    <form className="row" onSubmit={handleSubmit(recogerDatos)}>
      <div className="col-8">
        <input type="text" placeholder="NOMBRE" autoFocus {...register('nombre', { required: true, maxLength: 30 })} />
        {errors.nombre?.type === 'required' && <div className='errores'>Nombre es obligatorio</div>}
        {errors.nombre?.type === 'maxLength' && <div className='errores'>Máximo 30 caracteres</div>}

        <input type="text" placeholder="AÑO" {...register('anyo', { required: true })} />
        {errors.anyo && <div className='errores'>Año es obligatorio</div>}

        <input type="text" placeholder="UVAS" {...register('uvas')} />
        <input type="text" placeholder="REGIÓN" {...register('region')} />
        <input type="text" placeholder="PAÍS" {...register('pais')} />

        <textarea placeholder="DESCRIPCIÓN" {...register('descripcion')}></textarea>

        <input type="file" className="form-control" {...register('imagen')} onChange={previsualizar} accept='image/*' />

        <button type="submit" className="btn btn-primary mt-2">Dar de alta vino</button>
      </div>

      <div className="col-4">
        <br />
        <img ref={previo} src={`${IMG}/sinbotella.jpg`} alt="previsualizar" id='previsualizar' />
      </div>
    </form>
  );
};

export default Altavino;
