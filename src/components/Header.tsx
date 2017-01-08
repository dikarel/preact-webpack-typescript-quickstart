import preact, { VNode } from 'preact'

interface Props {
  children?: VNode
}

export default function Header(props: Props) {
  return <h1>{props.children}</h1>
}
