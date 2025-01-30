const express = require("express");
const app = express();

const rolesAndGroups = {
    roles: ["Admin", "User", "Manager"],
    groups: ["Finance", "Engineering", "HR"]
}; // Mocked data

app.get("/public-roles", (req, res) => {
    res.json(rolesAndGroups); // Serve roles/groups publicly
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));