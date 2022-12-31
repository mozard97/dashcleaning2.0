import sanityClient from "@sanity/client"

const client = sanityClient({
    projectId: 'o0xwmn6v',
    dataset: 'productions',
    apiVersion: "2022-09-01",
    token:
        "sk8ZJ9ln7GmlOOGOmktdKQSRkzQQuvoOHnoG9MqUbo7Z4qAQKkBy3Kx5o3BviMkS6wvmZf9Uvuw7Y8xwmsfZSMKinVZH4zj6IyoAovGDEeClrDqHRX10OW7KwW6FyCtUnyRAgSsyFvN4PZX1uHR2cYbfWUo1241rIaUzuTXpQApqu5ytQPHc",
    useCdn: true,
})



export default function signupNewslater(req, res) {

    const { phone, _id } = JSON.parse(req.body)

    if (req.method == "POST") {
        const docsSave = async () => {
            try {
                const save = await client
                    .patch(_id)
                    .setIfMissing({ getQuote: [] })
                    .append('getQuote', [phone])
                    .commit({ autoGenerateArrayKeys: true })
                console.log(save);
                return res.status(201).json({ save })
            } catch (error) {
                console.log(error);
                return res.status(401).json({ error })
            }
        }
        docsSave()
    }
}
