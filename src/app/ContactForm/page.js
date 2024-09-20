"use client";
import { useState } from "react";
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
import map from "./images/areaMap.png";
import Link from "next/link";

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
	const [failure, setFailure] = useState(true);

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

		try {
			const response = await fetch("/api/submit", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify({ formData }),
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
			console.log("Error submitting form - contactForm", err);
		  }
		};

	const containerStyle = { width: "100%", height: "auto" };

	const LocationMap = () => {

		return (
			<Container fluid className="contact-page">
				<Row>
					<Col xs={12}>
						<Image
							src={map}
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
								<Col xs={6} className={styles.formColMain}>
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
								<Col xs={6} className={styles.formColMain}>
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
								<Col xs={6} className={styles.formColMain}>
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
								<Col xs={6} className={styles.formColMain}>
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
								<Col xs={6} className={styles.formColMain}>
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
								<Col xs={6} className={styles.formColMain}>
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
										<Col xs={6} className={styles.services}>
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

										<Col xs={6} className={styles.services}>
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
						<h6>Based out of Port St. Lucie, FL</h6>						
						<h6>** Only serving the State of Florida</h6>
					</Col>
				</Row>
			</section>

			<Modal isOpen={success} toggle={toggleSucces} className={styles.modal}>
				<ModalHeader toggle={toggleSucces} className={styles.modalHeader}>Thank You For Reaching Out!</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="success">I will get back to you within 24 hours.</Label>
						</FormGroup>
					</Form>
				</ModalBody>
			</Modal>

			<Toast isOpen={failure} color="danger">
				<ToastHeader toggle={() => setFailure(false)}>Error</ToastHeader>
				<ToastBody className={styles.toastBody}>
					<p>
						Oh no, there was a problem submitting your request. Please try again, or email me at: 
					</p>
					
					<Link href="mailto:contact@cfuentherapy.com">
						{" "}Contact@CFuenTherapy.com
							</Link>
				</ToastBody>
			</Toast>
		</Container>
	);
};

