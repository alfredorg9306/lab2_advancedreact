import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
      // setGiftCard((prevState)=>{
      //   prevState.text = "Your coupon has been used.";
      //   prevState.instructions = "Please visit our restaurant to renew your gift card.";
      //   prevState.valid = false;

      //     return {...prevState}
      // });

      setGiftCard((prevState)=>({
        ...prevState,
        text:"Your coupon has been used.",
        instructions: "Please visit our restaurant to renew your gift card.",
        valid: false
      })
        
    )
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}

