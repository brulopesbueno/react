import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor) {
    // chave: nome, descricao...
    setValues({
      ...values,
      [chave]: valor // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    )
  }

  useEffect(() => {
    console.log('alo alo')
    const URL_TOP = 'http://localhost:8080/categorias'
    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json()
      setCategorias([...resposta])
    })

    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria',
          cor: '#cbd1ff'
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Uma categoria',
          cor: '#cbd1ff'
        }
      ])
    //}, 4 * 1000) */
  }, [])

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault()
          setCategorias([...categorias, values])

          setValues({ valoresIniciais })
        }}
      />
      <FormField
        label="Nome da Categoria"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />

      <FormField
        label="Descrição"
        type="textarea"
        name="descricao"
        value={values.nome}
        onChange={handleChange}
      />

      <FormField
        label="cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
      />

      <Button>Cadastrar</Button>
      <form />

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          // eslint-disable-next-line react/no-array-index-key
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>
        })}
      </ul>

      <Link to="/">Ir para a Home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria
