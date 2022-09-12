import React from 'react'

import { Main } from './Container.styled'

export interface ChildrenProps {
	children?: JSX.Element | JSX.Element[]
}

function Container(props: ChildrenProps) {
	return <Main>{props.children}</Main>
}

export default Container
