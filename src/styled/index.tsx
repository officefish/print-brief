import tw from 'tailwind-styled-components'
import styled from 'styled-components'

interface IsActive {
    $active?: boolean
  }
  
  export const StyledButton = tw.button<IsActive>`
  btn
  btn-secondary
  ${(p) => (p.$active ? '' : 'btn-outline')}
  `