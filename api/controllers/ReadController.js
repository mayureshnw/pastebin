const read = (req, res) => {
	const hash = req.param('hash');
	console.log(hash);
	if (isValid(hash)) {
		Pastes
			.find({
				short: hash
			})
			.exec((err, result) => {
				if (err) {
					return Promise.reject("Path not found")
				} else {
					getTextFromS3(result.path)
						.then((text) => {
							res.json({
								text: text,
								status: "Found"
							})
						})
						.catch((err) => res.json({
							status: false
						}))
				}
			})
	}
}

const getTextFromS3 = (text) => {
	return Promise.resolve("Hey there so much text")
}

const isValid = (text) => {
	return true
}


module.exports = {
	read
}
// Scalable implemntation
// for Continuous feature detection using Machine learning
