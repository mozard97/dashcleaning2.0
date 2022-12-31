export default {
    name: 'customerReview',
    title: 'Customer Review',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Full Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Profile Image',
            type: 'image',
        },
        {
            name: "rating",
            title: "Give a Rating",
            type: "number",
            validation: Rule => Rule.required().max(5)
        },
        {
            name: 'review',
            title: 'Review',
            type: 'string',
        },
    ]
}
