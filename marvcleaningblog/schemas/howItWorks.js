export default {
    name: 'howItWorks',
    title: 'How It Works',
    type: 'document',
    fields: [
        {
            name: "content",
            title: "Content",
            type: "array",
            validation: Rule => Rule.required().max(3),
            of: [
                {
                    title: "Content",
                    name: "content",
                    type: "object",
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        },
                    ]
                },
            ]
        },
        {
            name: 'learnMore',
            title: 'Learn More Button',
            type: 'string',
        },
    ]
}
