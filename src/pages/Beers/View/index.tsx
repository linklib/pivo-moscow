import React, { useCallback, useMemo, useState } from 'react'
import Beer from './Beer'
import { BeersPageViewProps } from './interfaces'
import { BeersPageViewStyled } from './styles'

const BeersPageView: React.FC<BeersPageViewProps> = ({ objects }) => {
  const [primary, setPrimary] = useState<boolean | null>(false)

  const changePrimary = useCallback(() => {
    setPrimary(!primary)
  }, [primary])

  return useMemo(() => {
    return (
      <BeersPageViewStyled primary={primary || false}>
        <button onClick={changePrimary}>Change primary</button>
        {objects.map((n) => (
          <Beer key={n.id} object={n} />
        ))}
      </BeersPageViewStyled>
    )
  }, [changePrimary, objects, primary])
}

export default BeersPageView
