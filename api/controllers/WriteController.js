const write = (req, res) => {
	const text = req.param('text');
	const exp = req.param('expiraion')

	if (isValid(text)) {
		updateToS3(text)
			.then((s3path) => {
				return Pastes.create({
					short: '1234',
					path: s3path,
					expiration: ''
				}).exec((err, result) => {
					return res.json(result)
				})
			})
	} else {
		res.json({
			status: 'Empty'
		})
	}
}

const updateToS3 = (text) => {
	return Promise.resolve('/123/456')
}

const isValid = (text) => (typeof text === 'undefined') || (text === "")

module.exports = {
	write
}
