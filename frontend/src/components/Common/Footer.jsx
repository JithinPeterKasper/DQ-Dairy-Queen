import React, {useState, useEffect} from 'react'
const key = localStorage.getItem("LOGIN_USER_KEY");


export default function Footer({ price }) {
  let pageUrl = window.location.toString();
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);
  const key = localStorage.getItem("LOGIN_USER_KEY");

  useEffect(() => {
    if (pageUrl.includes("cart")) {
      setShowCheckoutButton(false);
    }
  }, []);

    return (
        <div>
            {key != null && (

            <footer>
                <div class="subtotal">
                    <span class="subtotal-test">Subtotal:</span>
                    <span class="subtotal-price">$ {price}</span>
                </div>
                {showCheckoutButton ? (
                    <a href="/cart">
                        <button class="btn-small">Check Your Cart</button>
                    </a>
                ) :(

                    <a href="/shipment"><button class="btn-small">CheckOut</button></a>
                )}
                
            </footer> 
            )}
        </div>
    )
}


