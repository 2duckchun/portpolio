import { FunctionComponent, PropsWithChildren } from 'react'
import { Header } from '@/src/layers/widgets'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
interface layoutProps extends PropsWithChildren {}

const layout: FunctionComponent<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>FOOTER</footer>
    </>
  )
}

export default layout
