const express = require('express');
const app = express();

// Use environment variable or fallback to 3000
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
