export default function Calculo () {

  async function handleSomar () {
    const calc = ( await import( '../../libs/calc' ) ).default
    alert( calc.sum( 5, 6 ) )
  }
  return (
    <div>
      <h1>Calculo</h1>
      <button onClick={ handleSomar }>Somar</button>
    </div>
  )
}