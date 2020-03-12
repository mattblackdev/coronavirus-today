import React, { useState } from 'react'
import { Formik, Form as FormikForm, useField } from 'formik'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	margin: 0 auto;
`

const Input = styled.input`
	font-size: 16px;
	padding: 10px 15px;
	flex: 1;
`

const ErrorMessage = styled.div`
	font-size: 0.6em;
	color: indianred;
`

const initialValues = {
	symptoms: '',
}

const TextField = props => {
	const [field, meta] = useField(props)
	return (
		<>
			<Input {...field} {...props} />
			{meta.touched && meta.error ? (
				<ErrorMessage>{meta.error}</ErrorMessage>
			) : null}
		</>
	)
}

export default function Form() {
	const [done, setDone] = useState(false)
	if (done) {
		return <p>Thanks!</p>
	}
	return (
		<Formik
			initialValues={initialValues}
			validate={values => {
				const errors = {}
				if (!values.symptoms) {
					errors.symptoms = 'Required'
				}
				return errors
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(`What repo does this go to? ${JSON.stringify(values, null, 2)}`)
					setSubmitting(false)
					setDone(true)
				}, 400)
			}}
		>
			{({ isSubmitting }) => (
				<FormikForm>
					<Container>
						<p>What info do we need?</p>
						<TextField type="text" name="symptoms" placeholder="Info here..." />
						<Button type="submit" disabled={isSubmitting}>
							Submit
						</Button>
					</Container>
				</FormikForm>
			)}
		</Formik>
	)
}
