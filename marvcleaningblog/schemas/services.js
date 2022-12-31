export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Service Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug url',
            type: 'slug',
            options: {
                source: "name"
            }
        },
        {
            name: "image",
            title: "Service image",
            type: "image"
        },
        {
            name: "minPrice",
            title: "Minimum Charge",
            type: "number"
        },
        {
            name: "maxPrice",
            title: "Max Charge",
            type: "number"
        },
        {
            name: "getQuote",
            title: "Get Quote",
            type: "array",
            of: [
                {
                    name: "phoneNumber",
                    title: "Phone Number",
                    type: "string"
                }
            ]
        },
        {
            name: 'Review',
            type: 'array',
            of: [
                {
                    title: 'Employee Review',
                    name: 'employeeReview',
                    type: 'reference',
                    to: [{ type: 'employeeReview' }]
                }
            ]
        },
        {
            name: 'customerReview',
            type: 'array',
            of: [
                {
                    title: 'Customer Review',
                    name: 'customerReview',
                    type: 'reference',
                    to: [{ type: 'customerReview' }]
                }
            ]
        },
        {
            name: 'lawnZap',
            title: "Why LawnZap",
            type: 'array',
            of: [
                {
                    name: "lawnZap", title: " Lawn Zap", type: "object", fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: 'Description',
                            name: 'description',
                            type: 'string',
                        },
                    ]
                }
            ]
        },
        {
            name: 'faq',
            title: "Faq",
            type: 'array',
            of: [
                {
                    name: "faq",
                    title: "Faq",
                    type: "object",
                    fields: [
                        {
                            title: 'Question',
                            name: 'question',
                            type: 'string',
                        },
                        {
                            title: 'Answer',
                            name: 'answer',
                            type: 'string',
                        },
                    ]
                }
            ]
        },
        {
            title: 'How it Works',
            name: 'howItWorks',
            type: 'reference',
            to: [{ type: 'howItWorks' }]
        }
        ,
        {
            name: 'marvClean',
            type: 'array',
            of: [
                {
                    title: 'Marv Clean',
                    name: 'marvClean',
                    type: 'reference',
                    to: [{ type: 'marvClean' }]
                }
            ]
        },
    ]
}
