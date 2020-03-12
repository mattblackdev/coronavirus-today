import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import Button from './Button'

const Header = styled.header`
	text-align: center;
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(16px + 2vmin);
	color: snow;
`

const CTA = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

function App() {
	const [yes, setYes] = React.useState(false)
	return (
		<div>
			<Header>
				{!yes && (
					<>
						<p>Do you think you have Coronavirus today?</p>
						<CTA>
							<Button onClick={() => setYes(true)}>Yes</Button>
							<Button onClick={() => {}}>No</Button>
						</CTA>
					</>
				)}
				{yes && <Form />}
			</Header>
		</div>
	)
}

export default App
