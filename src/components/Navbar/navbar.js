import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Popover,
  PopoverHeader,
  PopoverBody,
  Button
} from "reactstrap";
import ListCart from "./listCart";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false
    };

  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Cupcake</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="/basket-cart" id="Popover1">
                Корзина (<b>{props.count}</b>)
              </NavLink> */}
              <Button id="Popover1" type="button">
                Корзина (<b>{this.props.count}</b>)
              </Button>
              <Popover
                placement="bottom"
                isOpen={this.state.popoverOpen}
                target="Popover1"
                toggle={() =>
                  this.setState({ popoverOpen: !this.state.popoverOpen })
                }
              >
                <PopoverHeader>Список товаров</PopoverHeader>
                <PopoverBody>
                  <div>
                    {this.props.items.length <= 0 ? (
                      <div>Корзина пуста</div>
                    ) : (
                      this.props.items.map((book, i) => (
                        <ListCart
                          key={i}
                          book={book}
                          quantity={this.props.quantity}
                          removeFromCart={this.props.removeFromCart}
                        />
                      ))
                    )}
                  </div>
                  <div>Общая сумма:{this.props.totalPrice}</div>
                </PopoverBody>
              </Popover>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

// const NavBar = props => {
//   const [popoverOpen, setPopoverOpen] = useState(false);
//   console.log(props.items[0]);

//   const toggle = () => setPopoverOpen(!popoverOpen);
//   if (props.items.length) {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">Cupcake</NavbarBrand>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               {/* <NavLink href="/basket-cart" id="Popover1">
//                 Корзина (<b>{props.count}</b>)
//               </NavLink> */}
//               <Button id="Popover1" type="button">
//                 Корзина (<b>{props.count}</b>)
//               </Button>
//               <Popover
//                 placement="bottom"
//                 isOpen={popoverOpen}
//                 target="Popover1"
//                 toggle={toggle}
//               >
//                 <PopoverHeader>Popover Title</PopoverHeader>
//                 <PopoverBody>
//                   <div>{props.items[0].title}</div>
//                   {/* {props.items.map((book, i) => (
//                     <div key={i}>
//                       {console.log(book)}
//                       <div>{book.title}</div>
//                     </div>
//                   ))} */}
//                 </PopoverBody>
//               </Popover>
//             </NavItem>
//           </Nav>
//         </Navbar>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">Cupcake</NavbarBrand>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               {/* <NavLink href="/basket-cart" id="Popover1">
//                 Корзина (<b>{props.count}</b>)
//               </NavLink> */}
//               <Button id="Popover1" type="button">
//                 Корзина (<b>{props.count}</b>)
//               </Button>
//               <Popover
//                 placement="bottom"
//                 isOpen={popoverOpen}
//                 target="Popover1"
//                 toggle={toggle}
//               >
//                 <PopoverHeader>Popover Title</PopoverHeader>
//                 <PopoverBody>
//                   {/* {props.items.map((book, i) => (
//                     <div key={i}>
//                       {console.log(book)}
//                       <div>{book.title}</div>
//                     </div>
//                   ))} */}
//                 </PopoverBody>
//               </Popover>
//             </NavItem>
//           </Nav>
//         </Navbar>
//       </div>
//     );
//   }
// };

export default NavBar;
