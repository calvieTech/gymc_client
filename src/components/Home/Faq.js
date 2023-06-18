import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

function Faq() {
	return (
		<>
			<h1 className="faq__header text-center border-bottom mb-4">Frequently Asked Questions</h1>
			<Accordion
				defaultActiveKey="0"
				flush>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Is this free?</Accordion.Header>
					<Accordion.Body>
						Yes! For the time being, this app is free as it is in development mode and made for
						educational purposes only.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>How do I log my workouts in the app?</Accordion.Header>
					<Accordion.Body>
						Our app offers a simple workout logging feature. Navigate to the "Log Workout" section,
						select the exercises performed, enter the sets, reps, and weights, and save the workout
						to your journal.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>Can I customize my workout routines?</Accordion.Header>
					<Accordion.Body>
						Absolutely! Our app allows you to create personalized workout routines tailored to your
						specific goals. Simply go to the "Create Routine" section, choose exercises from our
						extensive library, and arrange them according to your preferences.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header>Can I time my exercises and rest periods?</Accordion.Header>
					<Accordion.Body>
						Yes, you can! Our app includes a built-in timer feature. It enables you to time your
						exercises and rest intervals, helping you maintain a structured and efficient workout.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="4">
					<Accordion.Header>Can I customize my workout routines?</Accordion.Header>
					<Accordion.Body>
						Absolutely! Our app allows you to create personalized workout routines tailored to your
						specific goals. Simply go to the "Create Routine" section, choose exercises from our
						extensive library, and arrange them according to your preferences.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="5">
					<Accordion.Header>How can I share my workout progress with a friend?</Accordion.Header>
					<Accordion.Body>
						Sharing your progress is easy! Simply go to your workout journal, select the workout you
						want to share, and click on the share button. You can then choose to share it via email,
						messaging apps, or social media platforms.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	);
}

export default Faq;
