function Contato() {
  return (
    <div style={{padding:"40px"}}>

      <h1>Contato</h1>

      <form style={{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        maxWidth:"400px"
      }}>

        <input placeholder="Nome" />

        <input placeholder="Email" />

        <textarea placeholder="Mensagem" />

        <button>Enviar</button>

      </form>

    </div>
  )
}

export default Contato