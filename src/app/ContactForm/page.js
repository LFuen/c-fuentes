"use client";
import { useState } from "react";
import jwt from "jsonwebtoken";
import { Row, Col, ToastBody, ToastHeader, Modal, ModalHeader, ModalBody } from "reactstrap";
import Image from "next/image";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Container,
	Toast,
} from "reactstrap";
import styles from "./contactForm.module.css";

export default function ContactForm () {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");
	const [message, setMessage] = useState("");
	const [therapyChecked, setTherapyChecked] = useState(false);
	const [supervisionChecked, setSupervisionChecked] = useState(false);

	const [success, setSuccess] = useState(false);
	const [failure, setFailure] = useState(false);

	const toggleSucces = () => setSuccess(!success);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			name,
			email,
			phone,
			city,
			state,
			zip,
			message,
			therapyChecked,
			supervisionChecked,
		};

		const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
		const token = jwt.sign(formData, secretKey);

		try {
			const response = await fetch("/api/encrypt", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSuccess(true);
				setFailure(false);
			} else {
				setFailure(true);
				setSuccess(false);
			}
		} catch (err) {
			setFailure(true);
			setSuccess(false);
			console.error("Error submitting form", err);
		}
	};

	const containerStyle = { width: "100%", height: "auto" };

	const LocationMap = () => {
		const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=27.2730,-80.3582&zoom=10&size=600x400&markers=color:red%7Clabel:S%7C27.2730,-80.3582&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

		return (
			<Container fluid className="contact-page">
				<Row>
					<Col xs={12}>
						<Image
							src={mapUrl}
							alt="Our location on Google Maps"
							style={containerStyle}
							className={styles.locationMap}
							width={300}
							height={300}
						/>
					</Col>
				</Row>
			</Container>
		);
	};

	return (
		<Container fluid className={styles.formContainer}>
			<h2 xs={12}>Let's Get In Touch</h2>
			<section className={styles.contactSection}>
				<Row className={styles.contactRow}>
					<Col className={styles.inputCol}>
						<Form onSubmit={handleSubmit} className={styles.form}>
							<Row className={styles.formRows}>
								<Col xs={6}>
									<FormGroup>
										<Label for="Name">Name</Label>
										<Input
											id="name"
											name="name"
											placeholder="Jane Smith"
											type="text"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</FormGroup>
								</Col>
								<Col xs={6}>
									<FormGroup>
										<Label for="Email">Email</Label>
										<Input
											id="Email"
											name="email"
											placeholder="jane.smith@example.com"
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</FormGroup>
								</Col>
								<Col xs={6}>
									<FormGroup>
										<Label for="Phone">Phone</Label>
										<Input
											id="Phone"
											name="phone"
											placeholder="(123) 456-7890"
											type="phone"
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
										/>
									</FormGroup>
								</Col>
								<Col xs={6}>
									<FormGroup>
										<Label for="City">City</Label>
										<Input
											id="City"
											name="city"
											value={city}
											placeholder="Daytona Beach"
											onChange={(e) => setCity(e.target.value)}
										/>
									</FormGroup>
								</Col>
							</Row>

							<Row className={styles.formRows}>
								<Col xs={6}>
									<FormGroup>
										<Label for="State">State</Label>
										<Input
											id="State"
											name="state"
											value={state}
											placeholder="Florida"
											onChange={(e) => setState(e.target.value)}
										/>
									</FormGroup>
								</Col>
								<Col xs={6}>
									<FormGroup>
										<Label for="Zip">Zip</Label>
										<Input
											id="Zip"
											name="zip"
											value={zip}
											placeholder="90210"
											onChange={(e) => setZip(e.target.value)}
										/>
									</FormGroup>
								</Col>
							</Row>

							<Row className={styles.formRowMessage}>
								<Col xs={12}>
									<FormGroup>
										<Label for="Message">Message</Label>
										<Input
											id="Message"
											name="message"
											type="textarea"
											value={message}
											placeholder="Hi, I have questions about therapy."
											onChange={(e) => setMessage(e.target.value)}
										/>
									</FormGroup>
								</Col>
							</Row>

							<Row className={styles.formRowService}>
								<Col>
									<FormGroup check className={styles.formGroupService}>
										<Col xs={2} className={styles.services}>
											<Input
												id="Therapy"
												name="Therapy"
												type="checkbox"
												checked={therapyChecked}
												onChange={(e) => setTherapyChecked(e.target.checked)}
											/>
											<Label check for="Therapy">
												Therapy
											</Label>
										</Col>

										<Col xs={2} className={styles.services}>
											<Input
												id="Supervision"
												name="Supervision"
												type="checkbox"
												checked={supervisionChecked}
												onChange={(e) =>
													setSupervisionChecked(e.target.checked)
												}
											/>
											<Label check for="Supervision">
												Supervision
											</Label>
										</Col>
									</FormGroup>
								</Col>
							</Row>

							<Button className={styles.ctaButton} type="submit">Submit</Button>
						</Form>
					</Col>

					<Col className={styles.locationMap}>
						<LocationMap />

						<h6>* Serving <strong>all</strong> of the State of Florida</h6>
					</Col>
				</Row>
			</section>

			<Modal isOpen={success} toggle={toggleSucces}>
				<ModalHeader toggle={toggleSucces}>Success</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="success">Form submitted successfully! I will get back to you within 24 hours.</Label>
						</FormGroup>
					</Form>
				</ModalBody>
			</Modal>

			<Toast isOpen={failure} color="danger">
				<ToastHeader toggle={() => setFailure(false)}>Error</ToastHeader>
				<ToastBody>
					There was a problem submitting your request. Please try again.
				</ToastBody>
			</Toast>
		</Container>
	);
};

