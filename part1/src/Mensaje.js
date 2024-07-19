const Mensaje = (promps) => {
    console.log(promps)
    return <h1 style={{color: promps.color}}>
        {promps.message}
        </h1>
}

export default Mensaje;