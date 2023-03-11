import React from "react";
import Cards from "./Cards";

const ContactUs = () => {
	return (
		<div className="my-3">
			<h1 className="text-3xl py-2 text-center">This is Contact Us</h1>
			<p>
				This is our contact page and it's empty. <br />
				Feel free to contact us at if you have any issues or questions.
				<br />
				But, you can't reach us as this is a dummy page.
			</p>
			<Cards
				title="Contact Us"
				cardDesc="This is our contact page and it's empty."
				imgSrc={"https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
			/>
		</div>
	);
};

export default ContactUs;
