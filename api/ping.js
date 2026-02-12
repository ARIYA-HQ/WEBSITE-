export default function handler(req, res) {
    res.status(200).json({
        status: 'ok',
        msg: 'Vercel JS Function Reached',
        time: new Date().toISOString(),
        env: process.env.NODE_ENV
    });
}
