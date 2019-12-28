const { config } = require('dotenv');
const path = require('path');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe');
const compression = require('compression');

config();

const stripeConfiged = stripe(process.env.STRIPE_SECRET_KEY);
// Create global app object
const app = express();

app.use(cors());
app.use(compression());

const PORT = process.env.PORT || 5000;

// bodyparse for express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serving static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.post('/payment', (req, res) => {
	const { token, amount } = req.body;
	const stripePayload = {
		source: token.id,
		amount,
		currency: 'usd',
	};
	stripeConfiged.charges.create(stripePayload, (stripeErr, stripeRes) => {
		if (stripeErr) {
			console.log(stripeErr);
			return res.status(500).json({ message: 'Error creating charge', error: stripeErr });
		}
		return res.status(200).json({ message: 'Payment success', data: stripeRes });
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
