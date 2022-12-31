import { JOB_STATUS } from "../../utils/users";

const { buffer } = require("micro");

//secure a connection to Firebase from the backend
const admin = require("firebase-admin");
const serviceAccount = require("../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fullfilOrder = (session, req, res) => {
  const info = JSON.parse(session.metadata.info);

  console.log({ info });

  if (info.type === "purchase" && info.duration) {
    let expiryDate = new Date();

    if (info.duration === "Months3") {
      expiryDate.setMonth(expiryDate.getMonth() + 3);
    } else if (info.duration === "Months6") {
      expiryDate.setMonth(expiryDate.getMonth() + 6);
    } else if (info.duration === "Months12") {
      expiryDate.setMonth(expiryDate.getMonth() + 12);
    }

    const data = {
      price: session.amount_total / 100,
      frequency: info.frequency,
      duration: info.duration,
      servicesInfo: info.servicesInfo,
      expiryDate,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      name: info.name,
      status:JOB_STATUS.INITIATE



    };
    console.log({ data });

    return app
      .firestore()
      .collection("subscription").doc()
      .set({ ...data, paymentId: session.id, email: info.email })
      .then(() => {
        console.log(`Success: Order ${session.id} has been added to the DB`);
        return res.status(200);
      })
      .catch((error) => {
        console.log("DB error: ", error.message);
        return res.status(400).send(`DB error: ${error.message}`);
      });
  } else if (info.type === "purchase" && !info.duration) {
    const data = {
      price: session.amount_total / 100,
      servicesInfo: info.servicesInfo,
      jobDone: false,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      status:JOB_STATUS.INITIATE

    };
    console.log({ data });

    return app
      .firestore()
      .collection("onetime").doc()
      .set({ ...data, paymentId: session.id, email: info.email })
      .then(() => {
        console.log(`Success: Order ${session.id} has been added to the DB`);
        return res.status(200);
      })
      .catch((error) => {
        console.log("DB error: ", error.message);
        return res.status(400).send(`DB error: ${error.message}`);
      });
  } else if (info.type === "tip") {
    const data = {
      tip: session.amount_total / 100,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };
    console.log({ data });

    return app
      .firestore()
      .collection("tips").doc()
      .set({ ...data, paymentId: session.id, email: info.email })
      .then(() => {
        console.log(`Success: Tip ${session.id} has been added to the DB`);
        return res.status(200);
      })
      .catch((error) => {
        console.log("DB error: ", error.message);
        return res.status(400).send(`DB error: ${error.message}`);
      });
  }

  return null;
};


export default async (req, res) => {
  
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    try {
      let event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        console.log("Session: ", session);
        console.log("Event: ", event.type);
        const checkoutSession = await stripe.checkout.sessions.retrieve(id, {
          expand: ["customer", "setup_intent.payment_method"]
        });

        checkoutSession(session.setup_intent)
        
        //Fullfil the order
        fullfilOrder(session, req, res);
      }
    } catch (err) {
      console.log("Error", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
// import config from config