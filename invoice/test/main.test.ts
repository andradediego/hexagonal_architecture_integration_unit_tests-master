import axios from "axios";

test.skip("must test the api", async function() {
    const response = await axios.get("http://localhost:3000/cards/1234/invoices")
    const output = response.data;
    expect(output.total).toBe(1050);
});