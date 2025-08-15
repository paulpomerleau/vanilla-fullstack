
let nextId = 1;
const claims = new Map(); // id -> { firstName, lastName }

export default async function handler(req, res) {
  const { firstName = "", lastName = "" } = req.body || {};
  const claimId = String(nextId++);
  claims.set(claimId, { firstName, lastName });
  res.status(201).json({ claimId, firstName, lastName });
}