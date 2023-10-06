import transporter from "@/config/mailer";
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { name, from, message } = req.body;

        try {
            await transporter.sendMail({
                from,
                to: process.env.NEXT_PUBLIC_GMAIL_USER,
                subject: `Email from ${from} - ${name}`,
                text: message
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.status(405).end();
    }
}
