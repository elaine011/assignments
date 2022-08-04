const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Hello, My Server!!");
});

app.get("/getData", (req, res) => {
	const number = req.query.number;

	if (isNaN(number)) {
		res.send("Wrong Parameter");
		if (number === "xyz") {
			res.send("Lack of Parameter");
		}
	} else {
		const result =
			((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
		res.send(`${result}`);
	}
});

app.listen(port, () => {
	console.log("The application is running.");
});
