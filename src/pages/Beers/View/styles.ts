import { minWidth } from 'src/theme/helpers'
import styled, { css } from 'styled-components'
import { BeerPlaceStyled } from './Beer/Place/styles'
import { BeerStyled } from './Beer/styles'

type BeersPageViewStyledProps = {
  primary: boolean
}

export const BeersPageViewStyled = styled.section<BeersPageViewStyledProps>`
  border: 1px solid green;

  color: ${({ theme, primary }) => (primary ? 'green' : theme.colors.primary)};

  ${minWidth.sm`
    color: red;
  `}

  ${BeerStyled} {
    border: 1px solid grey;
    padding: 16px;

    ${BeerPlaceStyled} {
      a {
        color: green;
      }
    }

    ${({ primary }) => {
      if (primary) {
        return css`
          ${BeerPlaceStyled} {
            border: 1px solid red;
          }
        `
      }
    }}
  }
`
