import * as zod from 'zod'

const ContactTypes = zod.object({
    name: zod.string().min(3, 'Must contain at least 3 character').max(100, 'Must be less than 100 character').optional(),
    email: zod.email(),
    phone: zod.string().max(10, 'Must be 10 characters').optional(),
    message: zod.string().min(3, 'Must contain at least 3 character').max(100, 'Must be less than 100 character').optional(),
})

export { ContactTypes }
