import React, { useEffect, useState } from 'react';

const ScorecardTop = ({ teeData }) => {
  const [indexArr, setIndexArr] = useState([]);
  const [holePars, setHolePars] = useState([]);
  const [holeLengths, setHoleLengths] = useState([])

  // set up the arrays to map through for building the tee scorecard
  useEffect(() => {
    if (teeData?.length) {
      const indexArr = []
      const frontPars = []
      const frontLengths = []
      for (let i = 0; i < 9; i++) {
        const teeObj = teeData[i]
        indexArr.push(teeObj.handicap)
        frontPars.push(teeObj.par)
        frontLengths.push(teeObj.yardage)
      }
      indexArr.push('')

      const frontParTotal = frontPars.reduce((acc, cv) => acc + cv)
      const frontLengthTotal = frontLengths.reduce((acc, cv) => acc + cv)
      const backPars = []
      const backLengths = []
      for (let i = 9; i < 18; i++) {
        const teeObj = teeData[i]
        indexArr.push(teeObj.handicap)
        backPars.push(teeObj.par)
        backLengths.push(teeObj.yardage)
      }
      const backParTotal = backPars.reduce((acc, cv) => acc + cv)
      const backLengthTotal = backLengths.reduce((acc, cv) => acc + cv)

      setIndexArr([...indexArr, '', ''])
      setHolePars([...frontPars, frontParTotal, ...backPars, backParTotal, frontParTotal + backParTotal])
      setHoleLengths([...frontLengths, frontLengthTotal, ...backLengths, backLengthTotal, frontLengthTotal + backLengthTotal])
    }
  }, [teeData])

  return (
    <div className="scorecard-top-wrapper">
      <table className="score-card">
        <thead>
          <tr>
            <th><div className="hole-col">HOLE</div></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>OUT</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>IN</th>
            <th>TOT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="wide-col">INDEX</th>
            { indexArr && indexArr.map((hc, idx) => (
              <td key={idx}>{hc}</td>
            )) }
          </tr>
          <tr>
            <th className="wide-col">Par</th>
            { holePars && holePars.map((par, idx) => (
              <td key={idx}>{par}</td>
            )) }
          </tr>
          <tr>
            <th className="wide-col">Hole Lengths</th>
            { holeLengths && holeLengths.map((len, idx) => (
              <td key={idx}>{len}</td>
            )) }
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScorecardTop;