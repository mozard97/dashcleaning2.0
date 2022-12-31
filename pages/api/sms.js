import twilio from 'twilio';

export default function sendMessage(req, res) {
    const accountSid = "AC02b766afc482f05c66e3d08d39631b90";
    const token = "7716ac4e30f5c91b483a54585a4fb8a0";
  const client = twilio(accountSid, token);
  const { phone, message, address, bedrooms, bathrooms } = req.body;
  console.log("token", token);
  console.log("accountSid", accountSid);


  client.messages
  .create({
    body: `New lead phone: ${phone} address: ${address} bedrooms: ${bedrooms} bathrooms: ${bathrooms}`,
    from: '+14073057603',
    to: '+14078200351',
    
    
  })

  client.messages
    .create({
      body: message,
      from: '+14073057603',
      to: phone,
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });

    });
}