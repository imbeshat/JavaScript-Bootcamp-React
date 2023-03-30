import React, { useContext, useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
	const context = useContext(UserContext);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="info" light expand="md">
			<NavbarBrand tag={Link} to="/">
				<Link to="/" className="text-white">
					Github Finder App
				</Link>
			</NavbarBrand>
			<NavbarText className="text-white">{context.user?.email ? `Welcome ${context.user.email}` : ""}</NavbarText>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					{context.user ? (
						<NavItem>
							<NavLink
								onClick={() => {
									context.setUser(null);
								}}
							>
								<Link className="text-white">Logout</Link>
							</NavLink>
						</NavItem>
					) : (
						<>
							<NavItem>
								<NavLink tag={Link} to="/signin">
									<Link to="/signin" className="text-white">
										Signin
									</Link>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/signup">
									<Link to="/signup" className="text-white">
										Signup
									</Link>
								</NavLink>
							</NavItem>
						</>
					)}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
