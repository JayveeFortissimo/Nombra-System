import type { JSX } from 'react'
import { GoogleLogo, Facebook } from './LogoButtons'

interface Socialmedia {
  name: string
  logo: () => JSX.Element
  actions: string
}


export const socialsButtons: Socialmedia[] = [
  {
    name: 'Continue with Google',
    logo: () => <GoogleLogo />,
    actions: 'Facebook',
  },
  {
    name: 'Continue with Facebook',
    logo: () => <Facebook />,
    actions: 'Facebook',
  },
]
