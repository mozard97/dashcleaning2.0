/* eslint-disable import/no-anonymous-default-export */
const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY
  // "sk_test_51KzQ3bIJzOKvndwpfMIe5ytjgbhA9O59pJcZFR7siYTeRevLwadP5lN8X57ZmyyKngfq4yRxfB9vOfT7qmUxiyLo00Tbzbuqej"
);

export default async (req, res) => {
  const { info, userEmail } = req.body;

  let transformedItems = [
    {
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: info.price * 100,
        product_data: {
          name: `${info.type === "purchase" ? "Purchase Services" : "Tips"}`,
        },
      },
    },
  ];
  console.log(transformedItems);
  try {
    const email = userEmail;

    const createStripeCustomer = async ({ email }) => {
      const { data } = await stripe.customers.list({ email });
      return data.length === 0 ? stripe.customers.create({ email }) : data[0];
    };

    const customer = await createStripeCustomer({ email });

    const session = await stripe.checkout.sessions.create({
      payment_intent_data: {
        setup_future_usage: "off_session",
      },
      payment_method_types: ["card"],
      customer: customer.id,
      line_items: transformedItems,
      mode: "payment",

      success_url: `${
        info.type === "purchase"
          // ? `http://localhost:3000/success`
          // : `http://localhost:3000/tip-success`
          ? `${process.env.HOST}/success`
          : `${process.env.HOST}`
      }`,
      cancel_url: `${
        info.type === "purchase"
          // ? `http://localhost:3000/cancel`
          // : `http://localhost:3000/tip-cancel`
          ? `${process.env.HOST}`
          : `${process.env.HOST}`
      }`,
      metadata: { info: JSON.stringify(info) },
    });
    return res.status(200).json({ id: session.id });
  } catch (err) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
